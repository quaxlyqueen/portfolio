import React, { useState } from "react";
import SlccCourseView from "./SlccCourseView.jsx";
import SlccNav from "./components/SlccNav.jsx";
import SlccSplash from "./components/SlccSplash.jsx";
import SlccGoals from "./components/SlccGoals.jsx";

export default function Slcc() {
  var currentPageComponent;
  const pages = [<SlccSplash />, <SlccGoals />, <SlccCourseView />];
  const [currentPage, setCurrentPage] = useState(0);

  if (currentPage === 0) {
    currentPageComponent = pages[0];
  } else if (currentPage === 1) {
    currentPageComponent = pages[1];
  } else if (currentPage === 2) {
    currentPageComponent = pages[2];
  }

  return (
    <>
      <div className="center-column">
        <SlccNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      {currentPageComponent}
    </>
  );
}
