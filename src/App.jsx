import React, { useRef, useState } from "react";
import VerticalSlider from "./components/VerticalSlider";
import Primary from "./Primary";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import ProjectCard from "./components/ProjectCard";
import "./main.css";

/**
 * TODO: Read in data from a plain text file for easier editing in the future.
 */
export default function App() {
  const cards = [<ProjectCard />, <ProjectCard />, <ProjectCard />];

  const skills = {
    languages: ["Java", "JavaScript", "Go", "Dart", "Python", "C#"],
    tools: [
      "Git & GitHub",
      "Docker & Kubernetes",
      "Flutter",
      "React",
      "Linux",
      "Microsoft Intune",
    ],
    other: [
      "Written Communication",
      "Conflict Resolution",
      "Project Management",
      "Event Planning",
      "Electronics Repair",
      "Soldering",
    ],
  };

  const slides = [
    <Primary
      primaryText="Hi, I'm Josh Ashton."
      secondaryText="Junior full-stack developer."
      callToAction="Here's my resume."
      image="/images/profile.jpg"
      skills={skills}
    />,
    <Projects cards={cards} />,
    <Contact />,
    <About />,
  ];
  return <VerticalSlider slides={slides} />;
}
