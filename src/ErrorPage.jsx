import React from "react";

export default function ErrorPage({ errorCode, errorMessage }) {
  return (
    <>
      <div className="error-page">
        <h1>{errorCode}</h1>
        <p>{errorMessage}</p>

        <a href="/" className="button shadow">
          Return to joshashton.dev
        </a>
      </div>
    </>
  );
}
