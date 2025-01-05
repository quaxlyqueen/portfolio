import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "./App.jsx";
import Resume from "./Resume.jsx";
import PageNotFound from "./PageNotFound.jsx";
import Slcc from "./Slcc.jsx";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route exact path="/slcc" element={<Slcc />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>,
);
