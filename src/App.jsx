import React, { useState, useEffect } from "react";
import VerticalSlider from "./components/VerticalSlider";
import Primary from "./Primary";
import Projects from "./Projects";
import Contact from "./Contact";
import "./main.css";
import { terminal } from "virtual:terminal";

/**
 * TODO: Read in data from a plain text file for easier editing in the future.
 */
export default function App() {
  // DATA VARIABLES
  /*
   {
    title: "",
    description: "",
    image: "",
    imageGallery: null,
    url: ""
   },
*/
  const projectData = [
    {
      title: "One AI",
      descriptionA:
        "An end-to-end self-hosted Artificial Intelligence solution, using Meta's Ollama platform to run Large Language Models. Go was used for the backend as a wrapper API and the frontend is Flutter. Here are some of the implemented features:",
      featureList: [
        "user authentication",
        "AES encryption",
        "SHA-256 hashing",
        "file uploads in Base64",
        "dynamic LLM routing",
      ],
      image: "/images/one-ai-cropped.png",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/one-ai",
    },
    {
      title: "D&D Character Builder",
      descriptionA:
        "A Dungeons and Dragons character builder, following the 5th edition rules and creation process. A collaborative project creating a GUI in Java with Swing. Features include:",
      featureList: [
        "serializing data into custom filetype",
        "image import",
        "export to PDF",
        "button hover effects",
      ],
      image: "/images/dnd.png",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/dnd",
    },
  ];

  const skillsData = {
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
      skills={skillsData}
    />,
    <Projects cardData={projectData} />,
    <Contact />,
  ];

  return <VerticalSlider slides={slides} />;
}
