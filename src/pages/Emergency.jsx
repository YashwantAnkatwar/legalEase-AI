import React from "react";
import AiAnswer from "../components/AiAnswer.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Emergency() {
  return (
    <>
      <PageHeader label="Emergency" title={'Urgent Legal <span class="gold">Help</span>'} text="Get immediate legal clarity for serious situations." tone="red" />
      <section className="section">
        <div className="container two-col">
          <div className="panel danger-panel">
            <h2>Emergency Numbers</h2>
            <p><strong>112</strong> National Emergency</p>
            <p><strong>1930</strong> Cyber Fraud Helpline</p>
            <p><strong>1091</strong> Women Helpline</p>
            <p><strong>1098</strong> Childline</p>
          </div>
          <AiAnswer
            mode="emergency"
            buttonLabel="Get Help"
            placeholder="Describe your situation in detail..."
            buildPrompt={(text) => `Give urgent India-focused legal guidance. Include immediate safety steps, relevant laws, documents to preserve, authorities to contact, and what not to do:\n${text}`}
          />
        </div>
      </section>
    </>
  );
}
