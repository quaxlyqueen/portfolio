// TODO: Replace h4 callToAction with a GREEN button callToAction.
import React, { useState } from "react";
import SkillCard from "./components/SkillCard";

export default function Primary({
  primaryText,
  secondaryText,
  callToAction,
  image,
  skills,
  initState,
}) {
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
            />
            <SkillCard
              header="Tools"
              symbol="terminal"
              list={skills.tools}
              initState={initState[1]}
            />
            <SkillCard
              header="Other"
              symbol="hub"
              list={skills.other}
              initState={initState[2]}
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
