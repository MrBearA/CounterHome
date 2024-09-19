import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
