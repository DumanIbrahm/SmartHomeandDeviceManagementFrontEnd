// src/components/customDevices/CustomDevices.jsx
import React from "react";
import { useLocation } from 'react-router-dom';
import Recent from "./recent/Recent";
import "./customDevices.css"; // Import the CSS file

const CustomDevices = () => {
  const location = useLocation();
  const roomId = location.state?.roomId;
  
  return (
    <div className="custom-devices-container">
      <Recent roomId={roomId} />
    </div>
  );
};

export default CustomDevices;
