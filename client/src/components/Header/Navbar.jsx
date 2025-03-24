import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="menu-btn">☰</button>
    </nav>
  );
};

export default Navbar;
