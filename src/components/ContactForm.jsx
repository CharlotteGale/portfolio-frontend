import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import "../assets/styles/components/ContactForm.css";

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const response = await emailjs.send (
        serviceId,
        templateId,
        formData,
        userId
      );

      if (response.status === 200) {
        alert("Message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Server response:", response);
        alert(`Error: ${response.text || "Failed to send message."}`)
      }

      /*
      // const proxyUrl = "https://thingproxy.freeboard.io/fetch/"; // local testing only
      const apiUrl = "http://localhost:5000/api/contact"
      // const apiUrl = "https://portfolio-backend-htjt.onrender.com/api/contact"
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          // "Origin": "https://charlottegale.dev"
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorText = await response.text();
        console.error("Server response:", response.status, errorText);
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
      }
      */
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was a problem sending your message.")
    }
    
    setIsLoading(false);
  };

  // testing environment uri = "http://localhost:5000/oauth2callback"
// deployment environment uri = "https://portfolio-backend-htjt.onrender.com/api/contact/oauth2callback"
/*
  const handleOAuth2Callback = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');

    if (code) {
      try {
        const redirectUri = "http://localhost:5000/oauth2callback";
        const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID;
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email`;
        
        window.location.href = authUrl;

      } catch (error) {
        console.error('Error initiating OAuth2:', error);
        alert('There was a problem with the OAuth2 process.');
      }
    }
  };

  useEffect(() => {
    handleOAuth2Callback();
  }, []);
  */

  return (
    <>
      <h2 id="contact">Contact Me</h2>

      {isDisabled ? (
        <p>The contact form is temporarily unavailable. Please try again later.</p>
      ) : (
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
          <button
            type="submit"
            disabled={isLoading}
            className={`mt-6 w-full min-w-[140px] px-4 py-3 rounded-lg font-bold transition-all flex justify-center items-center ${isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8h4l-3 3 3 3v-4z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
