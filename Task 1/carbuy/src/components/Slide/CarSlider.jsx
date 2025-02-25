import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slide/slide.css";
import Cars from "../../store/car.json";

const CarSlider = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    lazyLoad: "progressive",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <motion.div
      ref={ref}
      className="car-slider-container"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="slider-title">Featured Cars</h2>
      <Slider {...settings}>
        {Cars.map((car) => (
          <motion.div
            key={car.id}
            className="car-slide"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="car-image"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="car-details">
              <h3 className="car-name">{car.make} {car.model}</h3>
              <p className="car-year">{car.year} - {car.origin}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default CarSlider;
