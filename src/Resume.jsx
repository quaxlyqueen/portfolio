import React from "react";
import PdfViewer from "./components/PdfViewer";

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
