import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "./App.jsx";
import Resume from "./Resume.jsx";
import ErrorPage from "./ErrorPage.jsx";

/*
 * Root React container and renderer. Also manages the router. Any new pages should be added here.
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route
        path="*"
        element={
          <ErrorPage errorCode="404" errorMessage="This page does not exist." />
        }
      />
    </Routes>
  </Router>,
);
