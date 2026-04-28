import React from "react";
import AiAnswer from "../components/AiAnswer.jsx";
import PageHeader from "../components/PageHeader.jsx";

const faqs = [
  "What is the difference between civil and criminal law?",
  "Can police refuse to register FIR?",
  "How does RTI work?",
  "What are consumer rights in India?",
];

export default function Help() {
  return (
    <>
      <PageHeader label="Help" title={'Ask LegalEase <span class="gold">AI</span>'} text="Ask any legal question in plain language." tone="purple" />
      <section className="section">
        <div className="container two-col">
          <AiAnswer mode="help" buttonLabel="Ask AI" placeholder="Ask any legal question..." />
          <div className="panel">
            <h2>Frequently Asked</h2>
            <div className="topic-list">
              {faqs.map((faq) => <span key={faq}>{faq}</span>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
