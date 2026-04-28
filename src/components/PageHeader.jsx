import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({ label, title, text, tone = "gold" }) {
  return (
    <section className={`page-header tone-${tone}`}>
      <div className="container page-header-inner">
        <Link className="back-btn" to="/">
          ← Back
        </Link>
        <div>
          <div className="section-label">{label}</div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          {text && <p>{text}</p>}
        </div>
      </div>
    </section>
  );
}
