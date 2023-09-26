import React from "react";
import "./style.css";
import PomodoroClock from "../stuff/pomodoroBox.jsx"
import ClockBox from "../stuff/clockBox.jsx";

export default function ReactAct(){
  return (
    <div>
      <div className="row-items">
        <PomodoroClock/>
        <ClockBox/>
      </div>
    </div>
  );
};
