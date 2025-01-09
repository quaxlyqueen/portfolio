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

// TODO: Read data in from plain text files.
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

const skillData = {
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

const jobData = [
  {
    company: "SLC Public Library",
    title: "Technology & Digital Equity Assistant",
    start: "Aug '23",
    end: "Present",
    location: "Salt Lake City, UT",
    responsibilities: [
      "Assist library patrons with using technology, on devices such as publicly available PCs, laptops, mobile devices, and more.",
      "Teach fundamental computer usage skills.",
      "Expose patrons to the importance of digital security, password management, and two-factor authentication.",
      "Developing workshop curriculum for Raspberry Pi’s."
    ],
  },
  {
    company: "Trust Lands Admin.",
    title: "IT Intern",
    start: "Aug '23",
    end: "Aug '24",
    location: "Salt Lake City, UT",
    responsibilities: [
      "Orchestrated Microsoft Intune setup and deployment to multiple platforms.",
      "Streamlined IT equipment inventory process",
      "Provided training to optimize the usage of hardware and software.",
      "Troubleshoot and repair hardware and software on a variety of devices.",
      "Developed automation scripts for use in various parts of the business.",
    ],
  },
];

const eduData = [
  {
    institution: "Salt Lake Comm. College",
    degree: "AS Comp Sci",
    gpa: "3.48 (CS) || 2.87 (Cumulative)",
    start: "Jan '21",
    end: "Present",
  }
];

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App projectData={projectData} skillData={skillData} />} />
      <Route exact path="/resume" element={<Resume jobData={jobData} eduData={eduData} skillData={skillData} />} />
      <Route
        path="*"
        element={
          <ErrorPage errorCode="404" errorMessage="This page does not exist." />
        }
      />
    </Routes>
  </Router>,
);
