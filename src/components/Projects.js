import React from "react";
import { GoLinkExternal } from "react-icons/go";
import "./Projects.css";

function Projects() {
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with HTML, CSS and JS.",
    link: process.env.REACT_APP_PROJECT1_LINK,
    externalLink: process.env.REACT_APP_PROJECT1_EXTERNAL
  },
  {
    title: "Todo App",
    description: "A simple todo list app with React hooks.",
    link: process.env.REACT_APP_PROJECT2_LINK,
    externalLink: process.env.REACT_APP_PROJECT2_EXTERNAL
  },
  {
    title: "Weather Dashboard",
    description: "Shows weather info using OpenWeather API in React.",
    link: process.env.REACT_APP_PROJECT3_LINK,
    externalLink: process.env.REACT_APP_PROJECT3_EXTERNAL
  },
  {
    title: "VS Code Clone",
    description: "Code editor with real-time output using HTML, CSS and JS.",
    link: process.env.REACT_APP_PROJECT4_LINK,
    externalLink: process.env.REACT_APP_PROJECT4_EXTERNAL
  },
  {
    title: "Calculator",
    description: "This is a simple calculator using HTML5, CSS3 and JavaScript.",
    link: process.env.REACT_APP_PROJECT5_LINK,
    externalLink: process.env.REACT_APP_PROJECT5_EXTERNAL
  },
  {
    title: "ATM Card",
    description: "Simple ATM card with HTML5 and CSS3.",
    link: process.env.REACT_APP_PROJECT6_LINK,
    externalLink: process.env.REACT_APP_PROJECT6_EXTERNAL
  }
];


  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p>Check out some of my latest work:</p>
      <div className="project-grid">
        {projects.map(({ title, description, link, externalLink }, index) => (
          <div key={index} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "auto",
                }}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External resource"
                  className="exaternal-icon-link"
                  style={{
                    color: "blue",
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  <GoLinkExternal />
                </a>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
