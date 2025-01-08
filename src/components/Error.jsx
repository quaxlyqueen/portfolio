import React from "react";

export default function Error({ errorCode, message }) {
  return (
    <>
      <div className="errorPage">
        <h1>{errorCode}</h1>
        <p>{message}</p>

        <a href="/" className="link">
          <div className="button shadow">Return to joshashton.dev</div>
        </a>
      </div>
    </>
  );
}
