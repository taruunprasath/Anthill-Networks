import React from "react";
import "../About/about.css";
import Navbar from "../Navbar/Navbar";

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h2 className="contact-title">Contact Us 📞</h2>
      <p className="contact-description">
        Have questions or need assistance? Our team is here to help! 
        Reach out to us via the form below.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
    </>
  );
};

export default ContactPage;
