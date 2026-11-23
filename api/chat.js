const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 2000;

const instructions = `You are Bharat AI, the friendly and helpful website assistant for The Social Orbit, a creative production and marketing agency based in Mumbai and working globally, including Dubai.

Help visitors understand the agency's services: ad films and TVCs, production, editing and post-production, VFX, CGI, motion graphics, DI, branding, social media marketing, websites, AI films, and automations. Ask relevant follow-up questions about their project, goals, deliverables, budget, or timeline. Keep replies natural, clear, and concise.

Never claim a booking, quote, delivery date, or action has been confirmed. Do not invent prices, portfolio details, or company facts. For a tailored quote or to speak with the team, invite the visitor to use the Email or WhatsApp buttons in the chat. Do not request sensitive personal or payment information.`;

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

  if (!process.env.OPENAI_API_KEY) {
    return sendJson(res, 503, { error: "The AI assistant is not configured yet. Please contact our team by Email or WhatsApp." });
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

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions,
        input: messages.map(({ role, content }) => ({ role, content })),
        max_output_tokens: 350
      })
    });

    if (!response.ok) {
      console.error("OpenAI chat request failed with status:", response.status);
      return sendJson(res, 502, { error: "I couldn't get a reply just now. Please try again or contact our team by Email or WhatsApp." });
    }

    const result = await response.json();
    const reply = result.output
      ?.flatMap((item) => item.content || [])
      .filter((item) => item.type === "output_text")
      .map((item) => item.text)
      .join("")
      .trim();

    if (!reply) {
      console.error("OpenAI chat response did not contain text.");
      return sendJson(res, 502, { error: "I couldn't get a reply just now. Please try again or contact our team by Email or WhatsApp." });
    }

    return sendJson(res, 200, { reply });
  } catch (error) {
    console.error("OpenAI chat request error:", error);
    return sendJson(res, 502, { error: "I couldn't connect just now. Please try again or contact our team by Email or WhatsApp." });
  }
};
