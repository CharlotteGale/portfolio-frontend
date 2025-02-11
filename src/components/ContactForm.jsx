import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "../assets/styles/components/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Failed...", error);
        alert("Failed to send message :[ ");
      });
  };

  return (
    <>
      <h2 id="contact">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={formData.message}
            name="message"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ContactForm;
