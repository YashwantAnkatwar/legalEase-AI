import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { askGemini } from "../services/gemini.js";

export default function Quiz() {
  const [category, setCategory] = useState("general");
  const [difficulty, setDifficulty] = useState("medium");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  async function startQuiz() {
    setLoading(true);
    setQuiz("");
    try {
      setQuiz(
        await askGemini(
          `Create a 5-question Indian law quiz. Category: ${category}. Difficulty: ${difficulty}. Include options A-D and answer explanation after each question.`,
          "quiz-json"
        )
      );
    } catch (err) {
      setQuiz(err?.response?.data?.error?.message || err.message || "AI request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader label="Quiz" title={'Legal Knowledge <span class="gold">Quiz</span>'} text="Practice Indian law through AI-generated questions." />
      <section className="section">
        <div className="container panel">
          <div className="tab-row">
            {["general", "criminal", "constitutional", "consumer"].map((item) => (
              <button key={item} className={item === category ? "tab active" : "tab"} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <div className="tab-row">
            {["easy", "medium", "hard"].map((item) => (
              <button key={item} className={item === difficulty ? "tab active" : "tab"} onClick={() => setDifficulty(item)}>{item}</button>
            ))}
          </div>
          <button className="btn btn-gold" onClick={startQuiz} disabled={loading}>{loading ? "Creating..." : "Start Quiz →"}</button>
          {quiz && <div className="answer-box spaced">{quiz}</div>}
        </div>
      </section>
    </>
  );
}
