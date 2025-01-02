import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

export default function PdfViewer({ file }) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

  return (
    <>
      <div className="pdf-container">
        <Document file={file}>
          <Page pageNumber={1} />
          <Page pageNumber={2} />
        </Document>
      </div>
    </>
  );
}
