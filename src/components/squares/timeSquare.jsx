import React from "react";
import "./style.css";

export const ClockBox = () => {
  return (
    <div className="clock-box">
      <div className="overlap-group">
        <div className="text-wrapper">12:00 PM</div>
        <div className="div">Philippine Standard Time</div>
      </div>
    </div>
  );
};
