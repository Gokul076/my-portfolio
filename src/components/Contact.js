import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Let's connect! You can reach me via email or check out my profiles below.</p>

      <div className="contact-info">
        <p>Email: <a href="mailto:gokuln0077@gmail.com">gokuln0077@gmail.com</a></p>
        <p>Phone: <a href="tel:+916382153689">+91 63821 53689</a></p>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/gokulnath-k-m-80b9a429a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Gokul076"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
