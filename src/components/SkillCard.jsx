import React, { useState } from "react";

// TODO: Add state which only allows one skill card at a time to be expanded.
// TODO: Ensure that the expandability of the skill card is only an option when @media max-width 790px (mobile)
export default function SkillCard({ header, symbol, list, initState }) {
  const [isExpanded, setIsExpanded] = useState(initState); // Initial state

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card shadow">
      <div className="skill-section-header" onClick={toggleExpansion}>
        <span className="material-icons skill-symbol">{symbol}</span>
        <h3>{header}</h3>
      </div>
      {isExpanded && (
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
