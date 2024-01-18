import React from "react";
import './comment.css';

function ContactMeSection() {
  return (
    <div id="comment">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me. You can use the form below:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMeSection;
