import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Data Science Enthusiast",
      
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Gokulnath K.M</span></h1>
        <h2>
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </h2>
        <p>
          Building modern, user-friendly web applications and solving real-world
          problems.
        </p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection("projects")}>View Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
