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

/*
 * TEMPLATE:
 {
    frontend: "",
    backend: "",
    id: "",
    name: "",
    description: "",
    url: "",
    img: "",
    imgCaption: ""
 },
 */
const projects = [
  {
    frontend: "java",
    backend: "",
    id: "graph",
    name: "Graph",
    description: "Interactive representation of a graph data structure, developed in Java.",
    url: "https://github.com/quaxlyqueen/2420-graph-visualizer",
    img: "/assets/img/graph.png",
    imgCaption: "A screenshot of my graph data structure visualizer application."
  },
  {
    frontend: "flutter",
    backend: "go",
    id: "one-ai",
    name: "OneAI",
    description: "An end-to-end deployment wrapper for Meta's Ollama.",
    url: "https://github.com/quaxlyqueen/one-ai",
    img: "/assets/img/one-ai.png",
    imgCaption: "A screenshot of a conversation with a self-hosted artificial intelligence."
  },
  {
    frontend: "java",
    backend: "",
    id: "dnd",
    name: "D&D",
    description: "A Dungeons and Dragons character builder app, developed in Java.",
    url: "https://github.com/quaxlyqueen/dnd",
    img: "/assets/img/dnd.png",
    imgCaption: "A screenshot of my Dungeons and Dragons character builder application."
  },
];

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home projects={projects} />} />
      <Route path="/projects" element={<Projects projects={projects} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);
