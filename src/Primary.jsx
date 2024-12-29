// TODO: Replace h4 callToAction with a GREEN button callToAction.
import React, { useState, useRef } from "react";
import SkillCard from "./components/SkillCard";
import { terminal } from "virtual:terminal";

export default function Primary({
  primaryText,
  secondaryText,
  callToAction,
  image,
  skills,
  initState,
}) {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  return (
    <>
      <div id="primary">
        <div id="header">
          <div id="header-text">
            <h1>{primaryText}</h1>
            <h3>{secondaryText}</h3>
            <h4>{callToAction}</h4>
          </div>
          <div id="header-image">
            <img id="profile" src={image} />
          </div>
        </div>
        <div id="skills-section">
          <div className="cards">
            <SkillCard
              header="Languages"
              symbol="code"
              list={skills.languages}
              initState={initState[0]}
              index={0}
              isActive={activeCardIndex === 0}
              onToggle={() => setActiveCardIndex(0)}
            />
            <SkillCard
              header="Tools"
              symbol="terminal"
              list={skills.tools}
              initState={initState[1]}
              index={1}
              isActive={activeCardIndex === 1}
              onToggle={() => setActiveCardIndex(1)}
            />
            <SkillCard
              header="Other"
              symbol="hub"
              list={skills.other}
              initState={initState[2]}
              index={2}
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
