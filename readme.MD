# LegalEase AI – Hackathon Project

**LegalEase AI** is an AI-driven legal platform that helps users learn and interact with Indian law. It features an AI tutor for Q&A, a structured law database, quizzes, and a news dashboard, all in a multilingual (English/Hindi) and responsive UI with light/dark themes【8†L39-L44】【10†L63-L71】.  


---

## Features

- **AI Tutor (Learn):** Chat-based legal Q&A with context-aware responses.  
- **Law Database (Education):** Browse laws (IPC, Constitution, etc.) with official definitions, simple explanations, and examples.  
- **AI Quiz:** Generate 5 random multiple-choice questions per topic (via Google Gemini API) each time.  
- **Legal News Dashboard:** View latest legal news, case updates, and AI-generated daily tips; filterable and refreshable.  
- **User Profile:** Track XP points, bookmarks, saved news, and switch language/theme.  
- **Multilingual & Theming:** English/Hindi support; toggle between day/night UI modes.  
- **Responsive UI:** Mobile-friendly design and smooth animations for a modern feel.

---

## Technologies

| Category        | Technologies                                                                                     |
|-----------------|--------------------------------------------------------------------------------------------------|
| Frontend        | HTML/CSS/JavaScript, Bootstrap (UI), DOMPurify (XSS sanitizer)【33†L222-L227】                      |
| Backend         | Node.js (LTS)【8†L39-L44】, Express.js (web framework)【10†L63-L71】                                 |
| AI & API        | Google Gemini (Generative Language API)【21†L90-L93】                                              |
| Security/Utils  | cors (Cross-Origin Resource Sharing) middleware【3†L126-L134】, JSON Web Tokens (future for auth) |

---

## Usage

- **Learn (AI Tutor):** Click *Learn*, type a legal question or “start basics,” and get step-by-step answers via the Gemini AI. Follow prompts like “proceed” to continue the lesson.  
- **Education (Law Browser):** Navigate law categories (e.g. Criminal, Constitution). Click a law to view its real definition, simple meaning, and example. Content is fetched dynamically when opened.  
- **Quiz:** Select a topic (e.g. IPC, Fundamental Rights). The app calls Gemini to generate 5 multiple-choice questions. Answer them one by one; your score is shown at the end.  
- **Profile:** Click the profile icon to see your name (placeholder), XP points, and settings. Switch between English/Hindi or Day/Night mode. View **Bookmarks** (saved laws) and **Saved News** you marked.  
- **News Dashboard:** Accessed via the News section. Shows latest legal news and case updates with filter options. Click “Refresh News” for new items and “Save” on any article to add it to your profile’s Saved News. Daily legal tips are regenerated on each refresh.
- **Emergency (AI Assistant):** Click *Emergency* to get instant legal help in urgent situations. Simply describe your scenario, such as being scammed or facing harassment, and the system will analyze it to provide relevant laws, step-by-step actions to take, and any required documents. The feature is designed to give quick, practical, and actionable guidance when users need immediate legal clarity.

- **Docs (Legal Document Generator):** In the *Docs* section, users can generate commonly used legal documents such as FIR drafts, legal notices, RTI applications, and complaint letters. By entering the required details through guided inputs, the platform uses AI to create a structured and ready-to-use document, along with a preview to review before final use.

---

## API Endpoints

| Method | Path            | Request                     | Response                     | Description                           |
|--------|-----------------|-----------------------------|------------------------------|---------------------------------------|
| `POST` | `/api/quiz`     | JSON `{ "topic": "IPC" }`   | JSON array of 5 Q&A objects  | Generate quiz questions on given topic |
| `GET`  | `/api/law/:id`  | —                           | JSON `{ real, simple, example }` | Get law details (definitions)      |
| `POST` | `/api/gemini`   | JSON `{ prompt: "..."} `    | JSON AI answer              | Proxy to Gemini API for any prompt     |
| `GET`  | `/api/profile`  | —                           | JSON user data (XP, bookmarks, savedNews) | Retrieve user profile info |
| `POST` | `/api/profile`  | JSON with updated profile   | JSON success/failure         | Save/update user profile               |

---

## Testing

- **Sanitization Test:** Inject a script tag in the AI input (e.g. `<script>alert(1)</script>`) and verify it does **not** execute. DOMPurify strips unsafe elements【33†L222-L227】.  
- **API Fetch Test:** Use `curl` to fetch endpoints. For example:  
  ```bash
  curl http://localhost:3000/api/law/420
  ```  
  Confirm you get valid JSON with law details.  
- **Quiz Generation Test:** Request the quiz endpoint as shown above and ensure you receive 5 unique questions in JSON.  

---

## Deployment

- **Heroku:** Create a Heroku app, push your code, and set Config Vars for `GEMINI_API_KEY`, `MONGO_URI`, etc. (use the Heroku dashboard or CLI)【34†L273-L279】.  
- **Vercel:** Import the GitHub repo in Vercel, then add environment variables under Project Settings. Deploy; Vercel will handle the build.  
- **Firebase:** Set up Firebase Hosting and Cloud Functions. Use `firebase functions:config:set` for keys, then `firebase deploy` (see Firebase docs for configuring `.env`-style vars).

---

## Troubleshooting

- **CORS Errors:** Ensure you enabled CORS in Express (`app.use(cors())`)【3†L126-L134】.  
- **Missing API Key:** Check that `GEMINI_API_KEY` is correctly set in `.env` and not quoted.  
- **JSON Parse Errors:** Confirm the Gemini API returns strict JSON (no extra text). If parse fails, log the raw response.  
- **DOMPurify Missing:** If scripts still run, verify you included the DOMPurify script in your HTML (or imported it) before using it.  

---

## Contribution & License

- Contributions are welcome via GitHub pull requests. Follow any existing code style.  
- **License:** MIT (see [LICENSE](LICENSE) file).  
- **Contact:** Developer Name – [email@example.com].

---

## Architecture Flow

```mermaid
flowchart LR
    UserBrowser --> Frontend[Browser (UI)]
    Frontend --> BackEnd[Node/Express Server]
    BackEnd -->|HTTP Request| GeminiAPI[Google Gemini API]
    GeminiAPI --> BackEnd
    BackEnd --> Frontend
    Frontend --> UserBrowser
```
---
"# legalEase-AI" 
