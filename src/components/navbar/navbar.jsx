import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./style.css";

export default function Navbar(){
  return (
    <nav className="navbar">
      <a to="/" className="div">minutiae</a>
      <div className="frame">
        <ul>
          <CustomLink to="/" className="text-wrapper">home</CustomLink>
          <CustomLink to="/reactAct" className="text-wrapper">react</CustomLink>
          <CustomLink to="/formsAct" className="text-wrapper">forms</CustomLink>
        </ul>
      </div>
    </nav>
  );
};

function CustomLink({to, children, ...props}){
  const path = window.location.pathname
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return (
    <li className={(path === to)? "active":""}>
      <Link to={to}{...props}>{children}</Link>
    </li>
  )
}