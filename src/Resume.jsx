import React from "react";
import PdfViewer from "./components/PdfViewer";

/*
 * Page to display my Resume.
 *
 * TODO: Rework resume to make it one page
 * TODO: Convert resume to a React component, with a link to save as PDF
 */
export default function Resume() {
  return (
    <>
      <div id="resume-section">
        <h1>Resume</h1>
        <PdfViewer file="resume.pdf" />
      </div>
    </>
  );
}
