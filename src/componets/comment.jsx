import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import "./comment.css";

function ContactMeSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID 
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          setStatusMessage("Failed to send the message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="comment">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me. You can use the form below:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default ContactMeSection;
