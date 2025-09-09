import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo" My ></h1>
        <ul className="nav-links">
          <li><Link to="hero" smooth duration={500}>Home</Link></li>
          <li><Link to="about" smooth duration={500}>About</Link></li>
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          <li><Link to="skills" smooth duration={500}>Skills</Link></li>
          <li><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
