import React from 'react';
import './ContactUs.css';
import './style.css';

const ContactForm = () => {
  return (
    <div className="form-container">
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required></textarea>

        <button type="submit">Get In Touch</button>
      </form>
    </div>
  );
};

export default ContactForm;
