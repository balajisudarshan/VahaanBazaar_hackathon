import React, { useState } from "react";
import "./styles/NavBar.css";

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
            <li>Features</li>
            <li>Bikes</li>
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
