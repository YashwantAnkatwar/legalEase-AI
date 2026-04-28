import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { lawDomains } from "../data/laws.js";

const navItems = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/learn", label: "Learn", icon: "📚" },
  { to: "/emergency", label: "Emergency", icon: "🚨" },
  { to: "/education", label: "Education", icon: "🎓" },
  { to: "/docs", label: "Docs", icon: "📄" },
  { to: "/help", label: "Help", icon: "❓" },
];

export default function Layout() {
  return (
    <>
      <div className="noise-overlay" />
      <nav className="navbar">
        <NavLink className="nav-logo" to="/">
          <span className="nav-logo-icon">⚖</span>
          LegalEase <span className="gold">AI</span>
        </NavLink>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.to} className="nav-link" to={item.to}>
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="category-bar">
        <div className="category-scroll">
          {lawDomains.map((domain) => (
            <NavLink key={domain.id} className="cat-btn" to={`/laws/${domain.id}`}>
              {domain.icon} {domain.label}
            </NavLink>
          ))}
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        ⚠️ This platform provides general legal information using AI and is not a substitute for professional legal advice.
        Always consult a qualified lawyer for serious legal matters.
      </footer>
    </>
  );
}
