import React from "react";
import PdfViewer from "./components/PdfViewer";

export default function Resume() {
  return (
    <>
      <PdfViewer file="resume.pdf" />
    </>
  );
}
