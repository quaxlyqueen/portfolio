import React from "react";
import VerticalSlider from "./components/VerticalSlider";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import "./main.css";

/*
 * Primary portfolio application. Utilizes swiper.js (via /components/VerticalSlider.jsx) to
 * have a scrolling section to section effect.
 *
 * This is the primary place where (currently) application data is stored. This information will be read in
 * from plain-text files in the future for ease of future editing. In the meantime, generated components,
 * specifically the Skill Card and Project Card (see /components/SkillCard.jsx and /components/ProjectCard.jsx)
 * get their data from here and thus any additions are made in this file.
 *
 * TODO: Read in data from a plain text file for easier editing in the future, and to separate domains.
 */
const App = () => {
  // DATA VARIABLES
  const projectData = [
    {
      title: "One AI",
      description:
        "An end-to-end self-hosted Artificial Intelligence solution, using Meta's Ollama platform to run Large Language Models. Go was used for the backend as a wrapper API and the frontend is Flutter. Here are some of the implemented features:",
      featureList: [
        "AES encryption of messages between client and server",
        "SHA-256 hashing for message validation",
        "Base64 encoding for file uploads to the server",
        "Docker container for isolation and security",
      ],
      image: "/images/one-ai-cropped.png",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/one-ai",
    },
    {
      title: "Snake",
      description:
        "A Snake clone in the command line, written in C#. Utilized a Queue data structure to keep track of the snake's body. Implemented features include:",
      featureList: [
        "basic pseudo-randomized obstacle generation",
        "difficulty selection by adjusting the frequency of obstacle generation",
        "keyboard input to move the snake",
        "ASCII art for the menu and game over state",
      ],
      image: "/images/snake.gif",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/2410-Snake",
    },
    {
      title: "Battery Monitor",
      description:
        "A battery monitor, written in C with a GUI written in Python. Utilizes the acpi Unix command to gather battery information. Implemented features incldue:",
      featureList: [
        "embed Unix commands in C to get the date, time, battery percentage, and battery status",
        "basic file I/O to store historical battery data",
        "daemonize to run as a background process",
        "script to install as a SystemD service",
        "basic Python GUI in TKinter to provide graph of data",
      ],
      image: "/images/battery-mon.png",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/battery-mon",
    },
    {
      title: "D&D Character Builder",
      description:
        "A Dungeons and Dragons character builder, following the 5th edition rules and creation process. A collaborative project creating a GUI in Java with Swing. Features include:",
      featureList: [
        "serialization of character data into custom filetype",
        "global styling and custom font import",
        "button hover effects",
      ],
      image: "/images/dnd.png",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/dnd",
    },
    {
      title: "Calculator",
      description:
        "A simple and themable calculator written in Python. This uses CustomTKinter for the GUI and the eva CLI package for the actual calculator functionality. Supports MacOS and Linux. Implemented features include:",
      featureList: [
        "custom theming read in from a global .theme file",
        "button hover effects",
        "keyboard input",
      ],
      image: "/images/calculator.gif",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/calculator",
    },
  ];

  const skillsData = {
    languages: [
      "C & C#",
      "HTML & CSS",
      "Go",
      "Java",
      "JavaScript & Dart",
      "Python",
    ],
    tools: [
      "Git & GitHub",
      "Docker",
      "Flutter & React",
      "Linux & NeoVim",
      "Cloudflare",
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
    <Home
      image="/images/profile.jpg"
      skills={skillsData}
    />,
    <Projects cardData={projectData} />,
    <Contact />,
  ];

  return <VerticalSlider slides={slides} />;
}

export default App;
