export const lawDomains = [
  { id: "constitutional", label: "Constitutional", icon: "⚖️", tone: "green" },
  { id: "criminal", label: "Criminal Law", icon: "🔒", tone: "red" },
  { id: "civil", label: "Civil Law", icon: "🏛️", tone: "blue" },
  { id: "cyber", label: "Cyber Law", icon: "💻", tone: "purple" },
  { id: "family", label: "Family Law", icon: "👨‍👩‍👧", tone: "gold" },
  { id: "corporate", label: "Corporate Law", icon: "🏢", tone: "slate" },
  { id: "tax", label: "Tax Law", icon: "💰", tone: "orange" },
];

export const laws = [
  { id: "article-14", domain: "constitutional", title: "Article 14", summary: "Equality before law and equal protection of laws.", keywords: ["equality", "fundamental rights"] },
  { id: "article-19", domain: "constitutional", title: "Article 19", summary: "Protection of freedoms including speech, movement, assembly and profession.", keywords: ["speech", "freedom"] },
  { id: "article-21", domain: "constitutional", title: "Article 21", summary: "Protection of life and personal liberty except according to procedure established by law.", keywords: ["life", "liberty", "privacy"] },
  { id: "article-32", domain: "constitutional", title: "Article 32", summary: "Right to approach the Supreme Court for enforcement of fundamental rights.", keywords: ["writ", "supreme court"] },
  { id: "fir-crpc-154", domain: "criminal", title: "CrPC Section 154", summary: "Information in cognizable cases must be recorded as an FIR.", keywords: ["fir", "police"] },
  { id: "ipc-420", domain: "criminal", title: "IPC Section 420", summary: "Cheating and dishonestly inducing delivery of property.", keywords: ["cheating", "fraud"] },
  { id: "ipc-498a", domain: "criminal", title: "IPC Section 498A", summary: "Cruelty by husband or relatives of husband against a woman.", keywords: ["domestic violence", "cruelty"] },
  { id: "bns-overview", domain: "criminal", title: "BNS / BNSS 2023", summary: "New criminal law framework replacing IPC and CrPC provisions in stages.", keywords: ["bns", "bnss"] },
  { id: "cpc-9", domain: "civil", title: "CPC Section 9", summary: "Civil courts can try suits unless expressly or impliedly barred.", keywords: ["civil court", "jurisdiction"] },
  { id: "consumer-act", domain: "civil", title: "Consumer Protection Act", summary: "Protects consumers from defective goods, deficient services and unfair trade practices.", keywords: ["consumer", "refund"] },
  { id: "rera", domain: "civil", title: "RERA", summary: "Regulates real estate projects and protects home buyers.", keywords: ["property", "builder"] },
  { id: "it-66c", domain: "cyber", title: "IT Act Section 66C", summary: "Punishment for identity theft using passwords, digital signatures or unique identifiers.", keywords: ["identity theft", "cyber"] },
  { id: "it-66d", domain: "cyber", title: "IT Act Section 66D", summary: "Cheating by personation using computer resources.", keywords: ["online fraud", "phishing"] },
  { id: "dpdp", domain: "cyber", title: "Digital Personal Data Protection Act", summary: "Framework for processing digital personal data and data principal rights.", keywords: ["privacy", "data"] },
  { id: "hma", domain: "family", title: "Hindu Marriage Act", summary: "Rules for Hindu marriage, divorce, restitution and related matrimonial reliefs.", keywords: ["marriage", "divorce"] },
  { id: "dv-act", domain: "family", title: "Domestic Violence Act", summary: "Civil protections for women facing domestic violence, residence orders and monetary relief.", keywords: ["abuse", "protection"] },
  { id: "sma", domain: "family", title: "Special Marriage Act", summary: "Civil marriage framework for inter-faith and registered marriages.", keywords: ["court marriage", "registration"] },
  { id: "companies-act", domain: "corporate", title: "Companies Act, 2013", summary: "Formation, governance, directors, audits, shareholder rights and company compliance.", keywords: ["company", "director"] },
  { id: "ibc", domain: "corporate", title: "Insolvency and Bankruptcy Code", summary: "Time-bound insolvency resolution for companies, partnerships and individuals.", keywords: ["insolvency", "debt"] },
  { id: "income-tax", domain: "tax", title: "Income Tax Act", summary: "Charging provisions, heads of income, deductions, TDS and assessment rules.", keywords: ["income tax", "tds"] },
  { id: "gst", domain: "tax", title: "GST Law", summary: "Indirect tax framework for supply of goods and services.", keywords: ["gst", "input tax credit"] },
];

export function getDomain(id) {
  return lawDomains.find((domain) => domain.id === id);
}

export function getLawsByDomain(domain) {
  return laws.filter((law) => law.domain === domain);
}
