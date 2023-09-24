import React from "react";
import "./style.css";

import PomodoroClock from '../stuff/pomodoroBox.jsx';

export default function ReactAct(){
  return (
    <div>
      <div className="pomodoro-clock">
        <h1>Pomodoro Clock</h1>
        <p>A Pomodoro clock, often referred to as a Pomodoro timer, is a time management technique and tool that helps individuals improve their productivity and focus.</p>
        <div className="time-box">
          <h1>25:00</h1>
          <div className="time-buttons">
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <button>Start</button>
      </div>
    </div>
  );
};
