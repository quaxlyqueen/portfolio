import React, { useState } from "react";
import SkillCard from "./components/SkillCard";

/**
 * "Home" page/slide of my portfolio.
 *
 * Managed by /App.jsx.
 * Data by /main.jsx.
 *
 * @param image String
 * @param skills json, containing JSON values of String arrays.
 */
const Home = ({ image, skills }) => {
  // Manage active card state, defaulting to languages card being active or open. Mobile only.
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <>
      <div id="primary">
        <div className="header">
          <div className="header-image center-row">
            <img id="profile" src={image} />
          </div>
          <div className="center-column">
            <div className="center-column">
              <h1>Hi, I'm Josh Ashton.</h1>
              <h3>Junior full-stack developer.</h3>
              <a className="button" href="/resume" target="_blank">
                <div className="button-grid">Access my resume</div>
              </a>
            </div>
          </div>
        </div>
        <div id="skill-cards">
          <div className="center-row">
            <SkillCard
              header="Languages"
              symbol="code"
              list={skills.languages}
              isActive={activeCardIndex === 0}
              onToggle={() => setActiveCardIndex(0)}
            />
            <SkillCard
              header="Tools"
              symbol="terminal"
              list={skills.tools}
              isActive={activeCardIndex === 1}
              onToggle={() => setActiveCardIndex(1)}
            />
            <SkillCard
              header="Other"
              symbol="hub"
              list={skills.other}
              isActive={activeCardIndex === 2}
              onToggle={() => setActiveCardIndex(2)}
            />
          </div>
        </div>
        <span className="material-icons down-indicator">
          keyboard_double_arrow_down
        </span>
      </div>
    </>
  );
}

export default Home;
