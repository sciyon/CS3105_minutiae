import React from "react";
import { TimeButtons } from "../buttons/time-buttons";
import { TimeStart } from "../buttons/time-start";
import "./style.css";

export const Pomodoro = () => {
  return (
    <div className="pomodoro">
      <div className="div">Pomodoro clock</div>
      <p className="p">
        A Pomodoro clock, often referred to as a Pomodoro timer, is a time management technique and tool that helps
        individuals improve their productivity and focus.
      </p>
      <div className="text-wrapper-2">25:00</div>
      <TimeButtons className="time-buttons-instance" img="line-3-2.svg" line="line-2-2.svg" line1="line-3-3.svg" />
      <TimeStart className="time-start-instance" polygon="polygon-4-2.svg" />
    </div>
  );
};
