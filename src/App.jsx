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
 * Managed by /main.jsx.
 * Data by /main.jsx.
 *
 * @param projectData JSON[], data necessary to create project cards.
 * @param skillData JSON, data necessary to create skill cards.
 */
const App = ({ projectData, skillData }) => {
  const slides = [
    <Home
      image="/images/profile.jpg"
      skills={skillData}
    />,
    <Projects cardData={projectData} />,
    <Contact />,
  ];

  return <VerticalSlider slides={slides} />;
}

export default App;
