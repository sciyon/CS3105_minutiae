import React from "react";
import "./style.css";
import PomodoroClock from "../stuff/pomodoroBox.jsx"
import ClockBox from "../stuff/clockBox.jsx";
import QuoteBox from "../stuff/quoteBox.jsx";
import UnfinishedComponent from "../stuff/unfinishedBox.jsx";

export default function ReactAct(){
  return (
    <div className="col-main">
      <div className="column-items">
        <div className="pomodoro-container">
          <PomodoroClock/>
        </div>
        <div className="meme-container">
          <UnfinishedComponent/>
        </div>
      </div>
      <div className="column-items">
        <div className="clock-container">
          <ClockBox/>
        </div>
        <div className="quote-container">
          <QuoteBox/>
        </div>
      </div>
    </div>
  );
};
