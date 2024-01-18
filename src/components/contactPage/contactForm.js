import React, { useState } from "react";
import "./contactForm.css";
import "resize-observer-polyfill";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("your_submission_api_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred during form submission", error);
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Please enter first name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            required
            name="email"
            placeholder="Please enter email... "
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">WHAT DO YOU HAVE IN MIND?</label>
          <textarea
            id="message"
            style={{ height: "30px" }}
            required
            name="message"
            placeholder="Enter your message ..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
