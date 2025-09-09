// src/components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <p>© {new Date().getFullYear()} Gokulnath K.M | Portfolio</p>
    </footer>
  );
}

export default Footer;
