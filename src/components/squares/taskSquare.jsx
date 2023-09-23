import React from "react";
import { TaskArea } from "./TaskArea";
import "./style.css";

export const TaskList = () => {
  return (
    <div className="task-list">
      <div className="text-wrapper-4">Stay on track</div>
      <p className="p">Add tasks for focus sessions.</p>
      <TaskArea
        addTaskAreaAddTaskAreaClassName="design-component-instance-node"
        addTaskAreaOverlapGroupClassName="task-area-2"
        className="task-area-instance"
        taskDetailsAreaDoneTaskBtnDoneTaskBtnClassName="task-area-3"
        taskDetailsAreaTaskDetailsAreaClassName="task-area-4"
      />
    </div>
  );
};
