import React from "react";
import { useParams } from "react-router-dom";
import Cars from "../../store/car.json";
import "../../index.css";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const CarDetails = () => {
  const { id } = useParams();
  const car = Cars.find(car => car.id.toString() === id);

  if (!car) {
    return <h2 className="error-message">Car not found</h2>;
  }

  const handleBuyNow = () => {
    alert(`Thank you for choosing the ${car.make} ${car.model}! Our team will contact you soon.`);
  };

  return (
    <>
    <Navbar />
    <div className="car-details-container">
      <div className="car-image-container">
        <img src={car.image} alt={car.model} className="car-details-image" />
      </div>
      <div className="car-info">
        <h2 className="car-title">{car.make} {car.model} ({car.year})</h2>
        <p className="car-origin">Origin: {car.origin}</p>
        <p className="car-price"><strong>Price:</strong> ${car.price.toLocaleString()}</p>
        
        <ul className="car-features">
          <li><strong>Engine:</strong> {car.engine}</li>
          <li><strong>Mileage:</strong> {car.mileage} MPG</li>
          <li><strong>Transmission:</strong> {car.transmission}</li>
          <li><strong>Fuel Type:</strong> {car.fuelType}</li>
        </ul>

        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
      <Dashboard />
    </div>
    </>
  );
};

export default CarDetails;
