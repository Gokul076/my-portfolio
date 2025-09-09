import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      tools: "Python, SQLite, Pandas, Matplotlib, Heapq, Collections",
      description:
        "Developed a modular hospital management system with patient records, emergency triage (heapq), and appointment scheduling (topological sort). Integrated SQLite for secure storage and visualized hospital metrics."
    },
    {
      title: "Examination & Attendance Management System",
      tools: "Java Swing, MySQL, JDBC",
      description:
        "Built an exam & attendance system with tutor and student login. Tutors can manage profiles, mark attendance, and conduct tests. Students can attend tests, view reports, and track performance."
    },
    {
      title: "House Price Analysis & Forecasting",
      tools: "Python, Pandas, NumPy, Scikit-learn, ARIMA, PCA, KMeans",
      description:
        "Analyzed house price dataset, applied ARIMA for time series forecasting, PCA for dimensionality reduction, and clustering with KMeans. Used Random Forest for classification and validated results statistically."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p><strong>Tools:</strong> {proj.tools}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
