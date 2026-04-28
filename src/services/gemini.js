import axios from "axios";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=";

export async function askGemini(prompt, mode = "general") {
  const key = GEMINI_API_KEY?.trim();

  if (!key) {
    throw new Error("VITE_GEMINI_API_KEY missing in .env");
  }

  const legalGuardrail =
    mode === "raw"
      ? ""
      : "You are LegalEase AI, an Indian legal information assistant. Give clear, practical, India-focused guidance. Mention relevant Indian laws, authorities, sections, articles, and immediate steps when useful. Do not claim to be a lawyer. Tell users to contact emergency services or a qualified lawyer for serious matters.\n\n";

  const { data } = await axios.post(
    `${GEMINI_ENDPOINT}${key}`,
    {
      contents: [
        {
          parts: [
            {
              text: `${legalGuardrail}Mode: ${mode}\n\nUser request:\n${prompt}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: mode === "quiz-json" ? 0.7 : 0.45,
        topP: 0.95,
        maxOutputTokens: mode === "quiz-json" ? 8192 : 1600,
      },
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}
