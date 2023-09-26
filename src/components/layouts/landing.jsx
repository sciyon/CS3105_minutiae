import React from "react";
import "./style.css";
import yuji from '../../assets/yuji.png'

export default function Landing(){
  return (
    <div className="landing">
      <div className="div">
        <img className="img" alt="Img" src={yuji} />
        <div className="flexcontainer">
          <p className="text">
            <span className="text-wrapper">
              welcome to minutiae,
              <br />
            </span>
          </p>
          <p className="text">
            <span className="text-wrapper">a website for Erwin’s CS 3105 homeworks
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
