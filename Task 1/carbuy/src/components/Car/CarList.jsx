import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cars from "../../store/car.json";
import "../../index.css";
import Navbar from "../Navbar/Navbar";

const CarList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering cars based on user input
  const filteredCars = Cars.filter((car) =>
    `${car.make} ${car.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="car-list-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a car..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="car-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <Link to={`/cars/${car.id}`} key={car.id} className="car-card">
                <img src={car.image} alt={car.model} />
                <h3>{car.make} {car.model}</h3>
              </Link>
            ))
          ) : (
            <p className="no-results">No cars found! 🚗</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CarList;
