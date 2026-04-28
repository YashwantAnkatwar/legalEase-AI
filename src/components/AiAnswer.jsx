import React, { useEffect, useState } from "react";
import { askGemini } from "../services/gemini.js";

export default function AiAnswer({ buttonLabel = "Ask AI", mode = "general", buildPrompt, placeholder, preset }) {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (preset) setInput(preset);
  }, [preset]);

  async function submit(value = input) {
    const text = value.trim();
    if (!text) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const prompt = buildPrompt ? buildPrompt(text) : text;
      setAnswer(await askGemini(prompt, mode));
    } catch (err) {
      setError(err?.response?.data?.error?.message || err.message || "AI request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ai-widget">
      <div className="search-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && submit()}
          placeholder={placeholder || "Ask about any Indian law, right, or legal situation..."}
        />
        <button className="btn btn-gold" onClick={() => submit()} disabled={loading}>
          {loading ? "Thinking..." : buttonLabel}
        </button>
      </div>
      {error && <div className="answer-box error">{error}</div>}
      {answer && <div className="answer-box">{answer}</div>}
    </div>
  );
}
