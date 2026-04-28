import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LawCard from "../components/LawCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { lawDomains, laws } from "../data/laws.js";

export default function Education() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return laws;
    return laws.filter((law) => [law.title, law.summary, law.domain, ...law.keywords].join(" ").toLowerCase().includes(needle));
  }, [query]);

  return (
    <>
      <PageHeader label="Education" title={'Indian Law <span class="gold">Library</span>'} text="Browse and search structured legal knowledge." tone="green" />
      <section className="section">
        <div className="container">
          <div className="search-row">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search laws, sections, keywords..." />
            <button className="btn btn-outline" onClick={() => setQuery("")}>✕ Clear</button>
          </div>
          <div className="domain-grid">
            {lawDomains.map((domain) => (
              <Link key={domain.id} className="domain-card" to={`/laws/${domain.id}`}>
                <span>{domain.icon}</span>
                <strong>{domain.label}</strong>
              </Link>
            ))}
          </div>
          <div className="results-bar">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>
          <div className="law-grid">
            {filtered.map((law) => <LawCard key={law.id} law={law} />)}
          </div>
        </div>
      </section>
    </>
  );
}
