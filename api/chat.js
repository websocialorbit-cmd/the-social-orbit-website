const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 2000;

const instructions = `You are Bharat AI, the friendly and helpful website assistant for The Social Orbit, a creative production and marketing agency based in Mumbai and working globally, including Dubai.

Help visitors understand the agency's services: ad films and TVCs, production, editing and post-production, VFX, CGI, motion graphics, DI, branding, social media marketing, websites, AI films, and automations. Ask relevant follow-up questions about their project, goals, deliverables, budget, or timeline. Keep replies natural, clear, and concise.

Never claim a booking, quote, delivery date, or action has been confirmed. Do not invent prices, portfolio details, or company facts. For a tailored quote or to speak with the team, invite the visitor to use the Email or WhatsApp buttons in the chat. Do not request sensitive personal or payment information.`;

function getProviderOrder() {
  const configuredOrder = process.env.AI_PROVIDER_ORDER || process.env.AI_PROVIDER || "gemini";
  return Array.from(new Set(
    configuredOrder
      .split(",")
      .map((provider) => provider.trim().toLowerCase())
      .filter(Boolean)
      .map((provider) => provider === "claude" ? "anthropic" : provider)
  ));
}

function getProviderConfig(provider) {
  switch (provider) {
    case "gemini":
      return {
        provider,
        apiKey: process.env.GEMINI_API_KEY,
        model: process.env.GEMINI_MODEL || "gemini-4-hydrogen",
        endpoint: "https://generativelanguage.googleapis.com/v1beta/interactions"
      };
    case "openai":
      return {
        provider,
        apiKey: process.env.OPENAI_API_KEY,
        model: process.env.OPENAI_MODEL,
        endpoint: "https://api.openai.com/v1/chat/completions"
      };
    case "anthropic":
    case "claude":
      return {
        provider: "anthropic",
        apiKey: process.env.ANTHROPIC_API_KEY,
        model: process.env.ANTHROPIC_MODEL,
        endpoint: "https://api.anthropic.com/v1/messages"
      };
    case "nemotron":
      return {
        provider,
        apiKey: process.env.NEMOTRON_API_KEY_2 || process.env.NVIDIA_API_KEY || process.env.NEMOTRON_API_KEY,
        model: process.env.NVIDIA_MODEL || process.env.NEMOTRON_MODEL,
        endpoint: "https://integrate.api.nvidia.com/v1/chat/completions"
      };
    default:
      return { provider, invalid: true };
  }
}

function shouldFallback(status) {
  return status === 408 || status === 429 || status >= 500;
}

function createProviderRequest(config, messages) {
  if (config.provider === "gemini") {
    return {
      headers: {
        "x-goog-api-key": config.apiKey,
        "Content-Type": "application/json"
      },
      body: {
        model: config.model,
        input: messages.map(({ role, content }) => ({
          type: role === "user" ? "user_input" : "model_output",
          content: [{ type: "text", text: content }]
        })),
        system_instruction: instructions,
        generation_config: { max_output_tokens: 350 },
        store: false
      }
    };
  }

  if (config.provider === "anthropic") {
    const firstUserMessageIndex = messages.findIndex((message) => message.role === "user");
    return {
      headers: {
        "x-api-key": config.apiKey,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json"
      },
      body: {
        model: config.model,
        max_tokens: 350,
        system: instructions,
        messages: firstUserMessageIndex >= 0 ? messages.slice(firstUserMessageIndex) : messages
      }
    };
  }

  const conversation = [
    { role: "system", content: instructions },
    ...messages
  ];

  return {
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json"
    },
    body: {
      model: config.model,
      ...(config.provider === "openai"
        ? { max_completion_tokens: 350 }
        : { max_tokens: 350 }),
      messages: conversation
    }
  };
}

function extractReply(provider, result) {
  if (provider === "gemini") {
    return result.steps
      ?.filter((step) => step.type === "model_output")
      .flatMap((step) => step.content || [])
      .filter((item) => item.type === "text" && typeof item.text === "string")
      .map((item) => item.text)
      .join("")
      .trim();
  }

  if (provider === "anthropic") {
    return result.content
      ?.filter((item) => item.type === "text" && typeof item.text === "string")
      .map((item) => item.text)
      .join("")
      .trim();
  }

  const content = result.choices?.[0]?.message?.content;
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) {
    return content
      .filter((item) => item.type === "text" && typeof item.text === "string")
      .map((item) => item.text)
      .join("")
      .trim();
  }
  return "";
}

function getProviderErrorMessage(errorBody) {
  try {
    const errorResult = JSON.parse(errorBody);
    if (typeof errorResult.error?.message === "string") {
      return errorResult.error.message.slice(0, 500);
    }
    if (typeof errorResult.error === "string") {
      return errorResult.error.slice(0, 500);
    }
    if (typeof errorResult.message === "string") {
      return errorResult.message.slice(0, 500);
    }
  } catch {
    return "Provider returned a non-JSON error response.";
  }
  return "Provider returned an error without a message.";
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  const messages = req.body && req.body.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return sendJson(res, 400, { error: "Please send a valid chat message." });
  }

  const validMessages = messages.every((message) =>
    message &&
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.trim().length > 0 &&
    message.content.length <= MAX_MESSAGE_LENGTH
  );

  if (!validMessages) {
    return sendJson(res, 400, { error: "One or more chat messages are invalid." });
  }

  const providerOrder = getProviderOrder();
  let attemptedProviders = 0;

  for (const provider of providerOrder) {
    const config = getProviderConfig(provider);
    if (config.invalid) {
      console.error("Unsupported AI provider in priority order:", provider);
      continue;
    }

    if (!config.apiKey || !config.model) {
      console.error("AI provider configuration is incomplete; skipping:", provider);
      continue;
    }

    attemptedProviders += 1;
    const providerRequest = createProviderRequest(config, messages);
    let response;
    try {
      response = await fetch(config.endpoint, {
        method: "POST",
        headers: providerRequest.headers,
        body: JSON.stringify(providerRequest.body)
      });
    } catch (error) {
      console.error(`${config.provider} chat connection failed:`, error);
      continue;
    }

    if (!response.ok) {
      let providerMessage;
      try {
        providerMessage = getProviderErrorMessage(await response.text());
      } catch (error) {
        providerMessage = "Could not read the provider error response.";
        console.error(`${config.provider} error response read failed:`, error);
      }
      console.error(`${config.provider} chat request failed with status:`, response.status, providerMessage);
      if (shouldFallback(response.status)) {
        continue;
      }
      return sendJson(res, 503, { error: "Bharat AI is temporarily unavailable. Please try again or contact our team by Email or WhatsApp." });
    }

    let result;
    try {
      result = await response.json();
    } catch (error) {
      console.error(`${config.provider} chat response could not be parsed:`, error);
      return sendJson(res, 503, { error: "Bharat AI couldn't produce a reply just now. Please try again or contact our team by Email or WhatsApp." });
    }

    const reply = extractReply(config.provider, result);

    if (!reply) {
      console.error(`${config.provider} chat response did not contain text.`);
      return sendJson(res, 503, { error: "Bharat AI couldn't produce a reply just now. Please try again or contact our team by Email or WhatsApp." });
    }

    return sendJson(res, 200, { reply });
  }

  if (!attemptedProviders) {
    console.error("No configured AI providers were available in the priority order.");
    return sendJson(res, 503, { error: "The AI assistant is not configured yet. Please contact our team by Email or WhatsApp." });
  }

  console.error("All configured AI providers are temporarily unavailable.");
  return sendJson(res, 503, { error: "Bharat AI is temporarily unavailable. Please try again or contact our team by Email or WhatsApp." });
};
