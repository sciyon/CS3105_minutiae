import React from "react";
import "./style.css";

export const TaskArea = () => {
  return (
    <div className="task-list">
      <div className="text-wrapper">Stay on track</div>
      <p className="div">Add tasks for focus sessions.</p>
      <div className="task-area">
        <div className="add-task-area">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">ADD</div>
            </div>
          </div>
          <div className="text-wrapper-3">Input task here.</div>
        </div>
        <div className="task-details-area">
          <div className="text-wrapper-4">Do discrete math homework</div>
          <div className="done-task-btn">
            <div className="text-wrapper-5">DONE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

