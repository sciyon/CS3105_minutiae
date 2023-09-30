import React from "react";
import "./style.css";

export default function FormsAct(){
  return (
  <div className="forms-container">
    <div className="left-col">
      <h1>i am the left col</h1>
    </div>
    <div className="right-col">
      <div>
        <div className="form">
          <h3>Accomplish the form.</h3>
          <div className="field-1">
            <div className="form-field">
              <label for='firstname'>First name:<span class='required'>*</span></label>
              <input
                type="text" 
                name='firstname'
              />
            </div>
            <div className="form-field">
              <label for='lastname'>Last name:<span class='required'>*</span></label>
              <input
                type="text" 
                name='lastname'
              />
            </div>
            <div className="form-field">
              <label for='middlename'>Middle name:</label>
              <input
                type="text" 
                name='lastname'
              />
            </div>
          </div>
          <div className="field-2">
            <div className="form-field">
              <label for='birthdate'>Date of Birth:<span class='required'>*</span></label>
              <select>
                <option value="option1">JAN</option>
                <option value="option1">FEB</option>
                <option value="option1">MAR</option>
                <option value="option1">APR</option>
                <option value="option1">MAY</option>
                <option value="option1">JUN</option>
                <option value="option1">JUL</option>
                <option value="option1">AUG</option>
                <option value="option1">SEP</option>
                <option value="option1">OCT</option>
                <option value="option1">NOV</option>
                <option value="option1">DEC</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
