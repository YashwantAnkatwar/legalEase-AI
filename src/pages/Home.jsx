import React, { useState } from "react";
import { Link } from "react-router-dom";
import AiAnswer from "../components/AiAnswer.jsx";
import { laws } from "../data/laws.js";

const suggestions = [
  "What is Article 21?",
  "Can police arrest without warrant?",
  "How to file an FIR?",
  "What is RTI Act?",
  "What is IPC Section 420?",
  "Tenant rights in India",
];

export default function Home() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span>AI Legal Intelligence</span>
            <span>India</span>
          </div>
          <h1>
            Know Your
            <br />
            <em className="gold">Rights</em>
          </h1>
          <p>
            Understand any Indian law, get emergency guidance, analyze your scenario and navigate the legal system
            with confidence.
          </p>
          <AiAnswer
            buttonLabel="Search"
            mode="home-search"
            preset={selected}
            placeholder="Search anything — Ask about any law, right, or legal situation..."
          />
          <div className="chip-row">
            {suggestions.map((item) => (
              <button key={item} className="chip" onClick={() => setSelected(item)}>
                {item}
              </button>
            ))}
          </div>
          {selected && <div className="selected-question">Selected: {selected}</div>}
          <div className="stats-row">
            <div><strong>{laws.length}+</strong><span>Laws Covered</span></div>
            <div><strong>24/7</strong><span>AI Assistance</span></div>
            <div><strong>7</strong><span>Legal Domains</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <Link className="feature-card" to="/learn"><span>📚</span><h3>Learn Indian Law</h3><p>Step-by-step legal tutor for citizens and students.</p></Link>
          <Link className="feature-card danger" to="/emergency"><span>🚨</span><h3>Emergency Help</h3><p>Quick practical guidance for urgent legal situations.</p></Link>
          <Link className="feature-card" to="/education"><span>🎓</span><h3>Law Library</h3><p>Search constitutional, criminal, civil, cyber, family, corporate and tax laws.</p></Link>
          <Link className="feature-card" to="/docs"><span>📄</span><h3>Docs Generator</h3><p>Generate FIR drafts, legal notices, RTI applications and complaint letters.</p></Link>
        </div>
      </section>
    </>
  );
}
