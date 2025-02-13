import React, { useState } from "react";

import "../assets/styles/components/ContactForm.css";

const ContactForm = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://portfolio-backend-htjt.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message was sent successfully!");
        setUserName("");
        setUserEmail("");
        setUserMessage("");
      } else {
        console.error("Server response:", data);
        alert(`Error: ${data.message || "Failed to send message."}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was a problem sending your message.")
    }
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
