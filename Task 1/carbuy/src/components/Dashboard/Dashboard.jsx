import React, { useState, useEffect } from "react";
import "../Dashboard/dashboard.css"; 

const Dashboard = () => {
  const [carsAvailable, setCarsAvailable] = useState(50);
  const [carsSold, setCarsSold] = useState(30);

  useEffect(() => {
    if (carsAvailable === 0) return; 

    const interval = setInterval(() => {
      setCarsAvailable((prev) => (prev > 0 ? prev - 1 : 0));
      setCarsSold((prev) => (carsAvailable > 0 ? prev + 1 : prev));
    }, 5000);

    return () => clearInterval(interval); 
  }, [carsAvailable]); 

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Car Sales Dashboard 🚗</h2>
      <div className="dashboard-stats">
        <div className="stat-card available">
          <h3>Cars Available</h3>
          <p className="stat-number">{carsAvailable}</p>
        </div>
        <div className="stat-card sold">
          <h3>Cars Sold</h3>
          <p className="stat-number">{carsSold}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
