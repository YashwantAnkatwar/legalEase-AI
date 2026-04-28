import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { askGemini } from "../services/gemini.js";

export default function Scenario() {
  const [scenario, setScenario] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!scenario.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      setAnswer(
        await askGemini(
          `Analyze this legal situation in India. Return: issue spotting, relevant laws, evidence needed, immediate steps, risk level, and when to consult a lawyer.\n\nScenario:\n${scenario}`,
          "scenario"
        )
      );
    } catch (err) {
      setAnswer(err?.response?.data?.error?.message || err.message || "AI request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader label="Scenario Analyzer" title={'Analyze Your <span class="gold">Situation</span>'} text="Explain what happened and get structured legal guidance." />
      <section className="section">
        <div className="container">
          <textarea value={scenario} onChange={(event) => setScenario(event.target.value)} rows={9} placeholder="Example: My landlord is refusing to return my security deposit..." />
          <div className="chip-row">
            {["Wrongful Termination", "Consumer Dispute", "Property Dispute"].map((item) => (
              <button key={item} className="chip" onClick={() => setScenario(item)}>
                {item}
              </button>
            ))}
          </div>
          <button className="btn btn-gold" onClick={analyze} disabled={loading}>
            {loading ? "Analyzing..." : "🔬 Analyze Now"}
          </button>
          {answer && <div className="answer-box spaced">{answer}</div>}
        </div>
      </section>
    </>
  );
}
