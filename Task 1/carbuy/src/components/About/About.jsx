import React from "react";
import "../About/about.css";
import Navbar from "../Navbar/Navbar";

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
      <h2 className="about-title">About Us 🚗</h2>
      <p className="about-description">
        Welcome to <strong>CarBuy</strong>, your one-stop destination for buying the best cars at unbeatable prices. 
        We are committed to providing a seamless car-buying experience with top-notch customer service.
      </p>

      <div className="about-content">
        <div className="about-card">
          <h3>🚀 Our Mission</h3>
          <p>We aim to make car buying simple, transparent, and hassle-free.</p>
        </div>
        <div className="about-card">
          <h3>🏆 Why Choose Us?</h3>
          <p>We offer competitive prices, verified sellers, and trusted quality.</p>
        </div>
        <div className="about-card">
          <h3>📍 Locations</h3>
          <p>We are available across multiple cities to serve you better.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
