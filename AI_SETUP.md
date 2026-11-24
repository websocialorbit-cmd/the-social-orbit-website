# Bharat AI provider setup

Bharat AI reads a comma-separated provider priority from the Vercel environment variable `AI_PROVIDER_ORDER`. It tries providers in order and returns the first successful reply. If `AI_PROVIDER_ORDER` is unset, the older `AI_PROVIDER` setting selects one provider; if both are unset, Gemini is used.

Supported providers and Vercel variables:

| Provider value | API key | Model |
| --- | --- | --- |
| `gemini` | `GEMINI_API_KEY` | `GEMINI_MODEL` (defaults to `gemini-4-hydrogen`) |
| `openai` | `OPENAI_API_KEY` | `OPENAI_MODEL` |
| `anthropic` or `claude` | `ANTHROPIC_API_KEY` | `ANTHROPIC_MODEL` |
| `nemotron` | `NVIDIA_API_KEY`, `NEMOTRON_API_KEY_2`, or `NEMOTRON_API_KEY` | `NVIDIA_MODEL` or `NEMOTRON_MODEL` |

For example, set `AI_PROVIDER_ORDER=nemotron,gemini,openai,anthropic` to use Nemotron first, then Gemini, OpenAI, and Claude. Providers without both a configured key and model are skipped. For Nemotron, use the model ID shown for your NVIDIA API/NIM account; its endpoint uses NVIDIA's OpenAI-compatible chat completions API.

When multiple Nemotron key variables are set, `NVIDIA_API_KEY` takes precedence, followed by `NEMOTRON_API_KEY_2`, then `NEMOTRON_API_KEY`.

The next configured provider is tried after a network error, HTTP 408, HTTP 429, or an HTTP 5xx response. Other HTTP errors, including invalid-key or invalid-model errors, are returned without trying another provider so configuration problems are visible in Vercel logs. Requests sent to a fallback provider may incur that provider's usage charges.

In Vercel, add `AI_PROVIDER_ORDER` and the key/model variables for each provider you want available under **Project Settings → Environment Variables**, for the environments you use, then redeploy. Do not add API keys to browser code or commit them to the repository.

The adapters cover the providers listed above, not every arbitrary API. Adding a provider with a different API format requires a server-side adapter.
