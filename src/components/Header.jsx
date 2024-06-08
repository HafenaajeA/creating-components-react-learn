import React from "react";
import ReactDOM from "react-dom";

import react_logo from "../assets/reactlogo.png";
function Header() {
  return (
    <nav>
      <img src={react_logo} className="logo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
