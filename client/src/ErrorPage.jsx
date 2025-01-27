import React from "react";

/*
 * An error page component, typically used for 404 errors, but available for use for any other errors.
 *
 * TODO: Stylize the error page.
 *
 * @param errorCode String
 * @param errorMessage String
 */
const ErrorPage = ({ errorCode, errorMessage }) => {
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

export default ErrorPage;
