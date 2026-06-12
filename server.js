import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=";

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY?.trim();
}

app.get("/health", (_req, res) => {
  res.json({ ok: true, geminiConfigured: Boolean(getGeminiApiKey()) });
});

app.post("/ai", async (req, res) => {
  try {
    const { prompt, mode = "general" } = req.body;
    const geminiApiKey = getGeminiApiKey();

    if (!geminiApiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is missing in .env" });
    }

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await fetch(
      `${GEMINI_URL}${geminiApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: (mode === "legal-tutor" || mode === "quiz-json" || mode === "law-card")
                    ? prompt
                    : `You are LegalEase AI, an Indian legal information assistant. Give clear, practical, India-focused guidance. Mention relevant laws or authorities when useful. Do not pretend to be a lawyer, do not create certainty where facts are missing, and advise consulting a qualified lawyer or emergency authority for serious matters.\n\nMode: ${mode}\n\nUser request:\n${prompt}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topP: 0.95,
            /* quiz-json mode requests 30 questions (~150 tokens each = ~4500 tokens);
               use 8192 for quiz mode, 1400 for everything else */
            maxOutputTokens: mode === "quiz-json" ? 8192 : 1400,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini error:", data);
      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Gemini request failed. Check your API key and model access.",
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response";

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching Gemini" });
  }
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
