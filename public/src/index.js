import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import Resume from "./Resume";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);
