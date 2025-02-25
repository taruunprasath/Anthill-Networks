import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "../Home/home.css";
import Hero from "../Hero/Hero";
import CarSlider from "../Slide/CarSlider";
import Reviews from "../Reviews/Review";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="home-container">
      <Hero />
      <CarSlider />
      <Reviews/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
