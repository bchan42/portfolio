import React, { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  return (
    <main className="about-container">
      <div className="about-header">
        <h1>about me</h1>
        <p className="about-subtitle">what I do + why</p>
      </div>

      <div className="about-content">
        <p>
          i love using data and tech to understand real-world problems and build tools that are genuinely useful. 
          i'm especially interested in finding meaningful patterns, creating clear visualizations, and appling ml to projects with impact.
        </p>

        <h2>my work</h2>
        <p>
          i’m an <strong>analyst</strong>, but
          outside of work, i build{" "}
          <a href="/projects" style={{ color: "#A20000", textDecoration: "none" }}>
            projects
          </a>{" "}
          that mix data science, visualization, and machine learning.
        </p>

        <h2>current interests</h2>
        <p>
          right now, i’m especially interested in:
        </p>
        <ul>
          <li>using data to solve real world problems</li>
          <li>data visualization & storytelling</li>
          <li>making tech tools safer and more accessible</li>
        </ul>

        <h2>outside of data science</h2>
        <p>
          i enjoy going to the gym, solving puzzles, listening to music, and watching good tv shows!
        </p>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="https://www.linkedin.com/in/bernette/" target="_blank" rel="noopener noreferrer" style={{ color: "#A20000", textDecoration: "none" }}>
            feel free to reach out on linkedin!
          </a>
        </div>
      </div>
    </main>
  );
}

