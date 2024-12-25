import React, { useEffect, useState } from "react";
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
  // FUNCTION DATA
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 790);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 790);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initState = isMobile ? [true, false, false] : [true, true, true];

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
      description: "ASDF",
      image: "/images/projects/one-ai.png",
      imageGallery: null,
      url: "https://github.com/quaxlyqueen/one-ai",
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
      initState={initState}
    />,
    <Projects cardData={projectData} />,
  ];
  return <VerticalSlider slides={slides} />;
}
