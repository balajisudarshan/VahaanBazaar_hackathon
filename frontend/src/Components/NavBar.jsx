import React, { useState } from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          Vahan<span>Bazar</span>
        </div>
        <div className={`links ${open ? "active" : ""}`}>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <li>Features</li>
            <Link to='/allVehicles'><li>Bikes</li></Link>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
