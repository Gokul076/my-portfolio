import React from "react";
import "./Skills.css";

function Skills() {
  const skills = {
    Languages: ["Python", "Java", "C", "SQL", "JavaScript", "HTML"],
    Databases: ["MySQL", "Oracle"],
    Tools: ["VS Code", "Jupyter Notebook"]
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
