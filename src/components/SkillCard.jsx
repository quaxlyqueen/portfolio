import React, { useState } from "react";

export default function SkillCard({ header, symbol, list, initState }) {
  const [isExpanded, setIsExpanded] = useState(initState); // Initial state

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
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
