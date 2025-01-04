import React, { useState } from "react";

/**
 * TODO: Add email validation function.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
