import React, { useState } from "react";

export default function SlccNav({ currentPage, setCurrentPage }) {
  const [isActive, setIsActive] = useState(currentPage);

  function navigateWelcome() {
    if (isActive === 0 && currentPage === 0) return;
    setIsActive(0);
    setCurrentPage(0);
  }

  function navigateGoals() {
    if (isActive === 1 && currentPage === 1) return;
    setIsActive(1);
    setCurrentPage(1);
  }

  function navigateCourseView() {
    if (isActive === 2 && currentPage === 2) return;
    setIsActive(2);
    setCurrentPage(2);
  }

  return (
    <>
      <div className="nav">
        <ul className="nav-list">
          <li
            className={`center-column nav-item ${isActive === 0 ? "nav-item-active" : ""}`}
            onClick={() => navigateWelcome()}
          >
            Welcome
          </li>
          <li
            className={`center-column nav-item ${isActive === 1 ? "nav-item-active" : ""}`}
            onClick={() => navigateGoals()}
          >
            Goals & Outcomes
          </li>
          <li
            className={`center-column nav-item ${isActive === 2 ? "nav-item-active" : ""}`}
            onClick={() => navigateCourseView()}
          >
            Coursework
          </li>
          <li
            className="center-column nav-sublist nav-item"
            onClick={() => viewOutside()}
          >
            Outside Learning
          </li>
        </ul>
      </div>
    </>
  );
}
