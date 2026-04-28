import React, { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import LawCard from "../components/LawCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { getDomain, getLawsByDomain } from "../data/laws.js";

export default function LawDomain() {
  const { domain } = useParams();
  const meta = getDomain(domain);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const list = getLawsByDomain(domain);
    const needle = query.trim().toLowerCase();
    if (!needle) return list;
    return list.filter((law) => [law.title, law.summary, ...law.keywords].join(" ").toLowerCase().includes(needle));
  }, [domain, query]);

  if (!meta) return <Navigate to="/education" replace />;

  return (
    <>
      <PageHeader label={meta.label} title={`${meta.label} <span class="gold">Library</span>`} text="Search sections, concepts, keywords and generate AI explanations." />
      <section className="section">
        <div className="container">
          <div className="search-row">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sections, keywords..." />
            <span className="result-pill">{filtered.length} section{filtered.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="law-grid">
            {filtered.map((law) => <LawCard key={law.id} law={law} />)}
          </div>
        </div>
      </section>
    </>
  );
}
