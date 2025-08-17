import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/manbzelj", {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch(() => alert("Failed to send message. Please try again."));
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      ) : (
        <p className="contact-cta">Thanks for your message! I will get back to you soon.</p>
      )}
    </section>
  );
}
