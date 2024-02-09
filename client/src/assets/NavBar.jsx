import React from "react";
import logo from "../images/logo.png";

import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { COURSE, DASHBOARD } from "../Routes";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Logo" />
      <div className="nav-menu">
        <ul>
          <Link to={COURSE} className="link">
            <li>Course</li>
          </Link>
          <Link to={DASHBOARD} className="link">
            <li>Dashboard</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
