import React, { useState, useEffect } from "react";

// TODO: Add state which only allows one skill card at a time to be expanded.
// TODO: Ensure that the expandability of the skill card is only an option when @media max-width 790px (mobile)
const SkillCard = ({ header, symbol, list, isActive, onToggle }) => {
  // FUNCTION DATA
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 790);

  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia("(max-width: 790px)");
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card shadow">
      <div className="skill-card-header" onClick={() => onToggle()}>
        <span className="material-icons skill-symbol">{symbol}</span>
        <h3>{header}</h3>
      </div>
      {(isActive || !isMobile) && (
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
