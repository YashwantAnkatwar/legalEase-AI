import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { askGemini } from "../services/gemini.js";

const docTypes = ["FIR Draft", "Legal Notice", "RTI Application", "Complaint Letter"];

export default function Docs() {
  const [type, setType] = useState(docTypes[0]);
  const [details, setDetails] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!details.trim()) return;
    setLoading(true);
    setOutput("");
    try {
      setOutput(await askGemini(`Generate a structured ${type} for India. Keep it practical and ready to edit.\n\nDetails:\n${details}`, "docs"));
    } catch (err) {
      setOutput(err?.response?.data?.error?.message || err.message || "AI request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader label="Documents" title={'Legal Document <span class="gold">Generator</span>'} text="Generate FIR drafts, legal notices, RTI applications and complaint letters." tone="orange" />
      <section className="section">
        <div className="container two-col">
          <div className="panel">
            <div className="tab-row">
              {docTypes.map((item) => (
                <button key={item} className={item === type ? "tab active" : "tab"} onClick={() => setType(item)}>
                  {item}
                </button>
              ))}
            </div>
            <textarea value={details} onChange={(event) => setDetails(event.target.value)} rows={10} placeholder="Enter names, dates, facts, place, amount, authority, and what relief you want..." />
            <button className="btn btn-gold" onClick={generate} disabled={loading}>
              {loading ? "Generating..." : `Generate ${type}`}
            </button>
          </div>
          <div className="answer-box">{output || "Generated document preview will appear here."}</div>
        </div>
      </section>
    </>
  );
}
