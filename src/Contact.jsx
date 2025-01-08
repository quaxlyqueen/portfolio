import React, { useState } from "react";

/*
 * Contact page or "slide". The contact form functionality is enabled by a NodeJS server,
 * see /server.js. A basic form for getting contact information. Emails are sent to me@joshashton.dev
 * from contact@joshashton.dev.
 *
 * TODO: Handle blank and spam inputs.
 *
 * Managed by /App.jsx.
 * Interacts with /server.js.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update form data to always be up to date with the entries on the form.
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Transmit data to the server's API for sending email.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSubmitted(true);

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST", // Use POST for sending data
        headers: { "Content-Type": "application/json" }, // Set the content type
        body: JSON.stringify(formData), // Convert the JS object to JSON string
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div id="contact-section">
      <h1>Contact Me</h1>
      <div id="form-container"></div>
      {isSubmitted ? (
        <p>Thanks for reaching out! I'll get in touch shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              className="shadow"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="shadow"
              placeholder="example@email.com"
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <textarea
              className="shadow"
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <button type="submit" className="button shadow">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
