import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "./App.jsx";
import Resume from "./Resume.jsx";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>,
);
