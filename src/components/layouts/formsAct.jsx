import React from "react";
import "./style.css";
import FormsBox from "../stuff/formBox";

export default function FormsAct(){
  return (
  <div className="forms-container">
    <div className="left-col">
      <h1>Submitted Profile:</h1>
      <div className="left-col-row1">
        <div className="lcr1-col1">
          <h1>Photo</h1>
          <div className="photo"></div>
        </div>
        <div className="lcr1-col2">
          <div className="lcr1-col2-rows">
            <h1>names</h1>
            <div className="fname"></div>
            <div className="lname"></div>
          </div>
          <div className="lcr1-col2-rows">
            <h1>gender, civilstatus</h1>
            <div className="gender"></div>
            <div className="civilStatus"></div>
          </div>
          <div className="lcr1-col2-rows">
            <h1>age, bdate</h1>
            <div className="age"></div>
            <div className="birthdate"></div>
          </div>
        </div>
      </div>
      <div className="left-col-row2">
        <div className="lcr2-col1">
            <h1>about</h1>
          <div className="about"></div>
        </div>
        <div className="lcr2-col2">
          <h1>phone email address</h1>
          <div className="phone"></div>
          <div className="email"></div>
        </div>
      </div>
    </div>
    <div className="right-col">
      <FormsBox/>
    </div>
  </div>
  );
};
