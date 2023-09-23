import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="frame">
        <ul>
          <CustomLink to="/reactAct" className="text-wrapper">React Act</CustomLink>
        </ul>
      </div>
      <div className="div-wrapper">
        <Link to="/" className="div">minutiae</Link>
      </div>
    </nav>
  );
};

function CustomLink({to, childen, ...props}){
  const path = window.location.pathname
  
  return (
    <li className={(path === to)? "active":""}>
      <Link to={to}{...props}>{childen}</Link>
    </li>
  )
}