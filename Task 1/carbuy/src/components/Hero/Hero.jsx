import React from "react";
import { motion } from "framer-motion"; 
import "../Hero/hero.css";

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-overlay"></div>

      {/* Left Side: Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">Find Your Dream Car Today</h1>
        <p className="hero-subtitle">
          Explore the best deals on new and used cars. Drive home your dream ride now!
        </p>
        <motion.a
          href="/cars"
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Cars
        </motion.a>
      </motion.div>

      {/* Right Side: Car Inquiry Form */}
      <motion.div
        className="hero-form-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="form-title">Tell Us What You Need</h2>
        <motion.form
          className="hero-form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="form-group"
            whileFocus={{ scale: 1.05 }}
          >
            <label>Car Model</label>
            <input type="text" placeholder="Enter car model" />
          </motion.div>

          <motion.div
            className="form-group"
            whileFocus={{ scale: 1.05 }}
          >
            <label>Budget Range ($)</label>
            <input type="number" placeholder="Enter your budget" />
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.02 }}
          >
            <label>Preferred Car Type</label>
            <select>
              <option value="">Select Type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Truck">Truck</option>
            </select>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Find My Car
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
