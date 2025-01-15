import React, { useState, useEffect } from "react";

/**
 * Skill Card component.
 *
 * On mobile, only one card at a time may be active. The currently active card is
 * managed by the parent component, Home.jsx, via the isActive and onToggle props.
 *
 * Managed by /Home.jsx.
 * Data by /main.jsx > /App.jsx > /Home.jsx
 * 
 * @param header String, the skill card's header
 * @param symbol String, a Material Icon from https://fonts.google.com/icons?icon.size=24&icon.color=%23e8eaed
 * @param list String[], a list of skills
 * @param isActive boolean, the parent's state tracking if this instance of a skill card is the active (open) one. Only applicable to mobile.
 * @param onToggle function(), the action the parent component state takes when a skill card header is pressed. Only applicable to mobile.
 */
const SkillCard = ({ header, symbol, list, isActive, onToggle }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia("(max-width: 900px)");
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display if on desktop (!isMobile) or if Home.jsx determines this to be the currently active component.
  return (
    <div className="card shadow">
      <div className="skill-card-header" onClick={() => onToggle()}>
        <span className="material-icons skill-symbol">{symbol}</span>
        <h4>{header}</h4>
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
