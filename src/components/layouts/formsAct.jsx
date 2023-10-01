import React from "react";
import "./style.css";
import FormsBox from "../stuff/formBox";

export default function FormsAct(){
  return (
  <div className="forms-container">
    <div className="left-col">
      <h1>i am the left col</h1>
    </div>
    <div className="right-col">
      <FormsBox/>
    </div>
  </div>
  );
};
