import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import Emergency from "./pages/Emergency.jsx";
import Education from "./pages/Education.jsx";
import Docs from "./pages/Docs.jsx";
import Scenario from "./pages/Scenario.jsx";
import Quiz from "./pages/Quiz.jsx";
import Help from "./pages/Help.jsx";
import LawDomain from "./pages/LawDomain.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/education" element={<Education />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/scenario" element={<Scenario />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/help" element={<Help />} />
        <Route path="/laws/:domain" element={<LawDomain />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
