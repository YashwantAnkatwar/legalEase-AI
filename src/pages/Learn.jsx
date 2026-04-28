import React from "react";
import AiAnswer from "../components/AiAnswer.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Learn() {
  return (
    <>
      <PageHeader label="AI Tutor" title={'Learn <span class="gold">Indian Law</span>'} text="Ask questions and get beginner-friendly lessons with examples." tone="blue" />
      <section className="section">
        <div className="container two-col">
          <div className="panel">
            <h2>Start with the basics</h2>
            <p>Use prompts like FIR, IPC, fundamental rights, consumer rights, civil vs criminal law, or court process.</p>
            <div className="topic-list">
              <span>📖 Indian legal system</span>
              <span>⚖ IPC and BNS basics</span>
              <span>📝 How to file FIR</span>
              <span>🛡 Fundamental rights</span>
            </div>
          </div>
          <AiAnswer
            mode="legal-tutor"
            buttonLabel="Learn"
            placeholder="Ask me what you want to learn about Indian law..."
            buildPrompt={(text) => `Teach this like a patient legal tutor. Use simple steps, examples, and a short recap:\n${text}`}
          />
        </div>
      </section>
    </>
  );
}
