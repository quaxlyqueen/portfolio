import React, { useState } from "react";

// TODO: Add state which only allows one skill card at a time to be expanded.
// TODO: Ensure that the expandability of the skill card is only an option when @media max-width 790px (mobile)
const SkillCard = ({ header, symbol, list, isActive, onToggle }) => {
  function test() {
    console.log("click detected");
    onToggle();
  }
  return (
    <div className="card shadow">
      <div className="skill-card-header" onClick={() => test()}>
        <span className="material-icons skill-symbol">{symbol}</span>
        <h3>{header}</h3>
      </div>
      {isActive && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillCard;
