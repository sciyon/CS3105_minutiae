import React from "react";
import "./style.css";

export const TimeButtons = () => {
  return (
    <div className="time-buttons">
      <div className="plus-time">
        <div className="rectangle" />
        <img className="line" alt="Line" src="line-2.svg" />
        <img className="img" alt="Line" src="line-3.svg" />
      </div>
      <div className="minus-time">
        <div className="rectangle" />
        <img className="line-2" alt="Line" src="image.svg" />
      </div>
    </div>
  );
};
