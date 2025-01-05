import React from "react";
import PdfViewer from "./PdfViewer";

export default function SlccCourseSection({ header, text, pathToPdf }) {
  return (
    <>
      <div className="course-section">
        <div className="course-section-text">
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
        {pathToPdf !== null && <PdfViewer file={pathToPdf} />}{" "}
      </div>
    </>
  );
}
