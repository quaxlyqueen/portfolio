import React, { useState } from "react";
import SkillCard from "./components/SkillCard";

export default function Home({ primaryText, secondaryText, image, skills }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  return (
    <>
      <div id="primary">
        <div className="header">
          <div className="header-image">
            <img id="profile" src={image} />
          </div>
          <div className="header-text">
            <div className="center-column">
              <h1>{primaryText}</h1>
              <h3>{secondaryText}</h3>
              <a className="button" href="/resume" target="_blank">
                <div className="button-grid">Access my resume</div>
              </a>
            </div>
          </div>
        </div>
        {skills.languages !== null ? (
          <div id="skill-cards">
            <div id="card-grid">
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
        ) : (
          <p>Something here</p>
        )}
        <span className="material-icons down-indicator">
          keyboard_double_arrow_down
        </span>
      </div>
    </>
  );
}
