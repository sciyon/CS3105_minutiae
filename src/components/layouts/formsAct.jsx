import React from "react";
import "./style.css";
import FormsBox from "../stuff/formBox";

export default function FormsAct(){
  return (
  <div className="forms-container">
    <div className="left-col">
      <h2>Submitted info:</h2>
      <div className="show-name">
        <div className="image"></div>
        <h3>Your name is</h3>
        <div className="fname"></div>
        <div className="lname"></div>
        <h3>You described yourself as: </h3>
        <div className="about"></div>
        <h3>More details include: </h3>
        <div className="gender"></div>
        <div className="civilStatus"></div>
        <h3>You are</h3>
        <div className="age"></div>
        <div className="birthDate"></div>
        <h3>Contact info:</h3>
        <div className="email"></div>
        <div className="phoneNumber"></div> 
      </div>
    </div>
    <div className="right-col">
      <FormsBox/>
    </div>
  </div>
  );
};
