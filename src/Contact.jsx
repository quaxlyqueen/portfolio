import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * TODO: Add email validation function.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div id="contact-section">
      <h1>Contact Me</h1>
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
            id="email"
            name="email"
            value={formData.email}
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
    </div>
  );
}
