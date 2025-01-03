import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

export default function PdfViewer({ file }) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  function prev() {
    if (pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
    }
  }

  function next() {
    if (pageNumber < numPages - 1) {
      setPageNumber(pageNumber + 1);
    }
  }

  console.log("numPages: " + numPages);
  console.log("pageNumber: " + pageNumber);

  return (
    <>
      <div className="pdf-container">
        <button className="pdf-button shadow" onClick={() => prev()}>
          <span className="material-icons">arrow_back</span>
        </button>
        <Document
          file={file}
          onLoadSuccess={({ numPages: numPagesInPdf }) => {
            setNumPages(numPagesInPdf);
          }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <button className="pdf-button shadow" onClick={() => next()}>
          <span className="material-icons">arrow_forward</span>
        </button>
      </div>
    </>
  );
}
