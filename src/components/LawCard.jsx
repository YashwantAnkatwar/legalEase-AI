import React, { useState } from "react";
import { askGemini } from "../services/gemini.js";

export default function LawCard({ law }) {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function explain() {
    setLoading(true);
    setAnswer("");
    try {
      setAnswer(
        await askGemini(
          `Explain ${law.title} in India.\n\nIndex note: ${law.summary}\n\nReturn: Real definition, simple meaning, real-life example, and next steps.`,
          "law-card"
        )
      );
    } catch (err) {
      setAnswer(err?.response?.data?.error?.message || err.message || "AI request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <article className="law-card">
      <div className="law-card-tag">{law.domain}</div>
      <h3>{law.title}</h3>
      <p>{law.summary}</p>
      <div className="keyword-row">
        {law.keywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
      <button className="btn btn-outline" onClick={explain} disabled={loading}>
        {loading ? "Generating..." : "⚡ AI Explain"}
      </button>
      {answer && <div className="mini-answer">{answer}</div>}
    </article>
  );
}
