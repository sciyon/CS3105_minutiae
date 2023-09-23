import React from "react";
import { Pomodoro } from "../squares/pomodoroSquare";
import { QuoteBox } from "../squares/quoteSquare";
import { TaskList } from "../squares/taskSquare";
import { ClockBox } from "../squares/timeSquare";
import "./style.css";

export default function ReactAct(){
  return (
    <div className="group">
      <Pomodoro
        className="pomodoro-instance"
        timeButtonsImg="line-3-4.svg"
        timeButtonsLine="line-3-3.svg"
        timeButtonsLine1="line-2-2.svg"
        timeStartPolygon="polygon-4-2.svg"
      />
      <TaskList
        className="task-list-instance"
        taskAreaAddTaskAreaAddTaskAreaClassName="task-list-3"
        taskAreaAddTaskAreaOverlapGroupClassName="task-list-4"
        taskAreaTaskDetailsAreaDoneTaskBtnDoneTaskBtnClassName="design-component-instance-node"
        taskAreaTaskDetailsAreaTaskDetailsAreaClassName="task-list-2"
      />
      <QuoteBox className="quote-box-instance" />
      <ClockBox className="clock-box-instance" />
    </div>
  );
};
