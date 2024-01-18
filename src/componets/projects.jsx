import React, { useState } from "react";
import Project1 from '../img/project1.jpeg';
import Project2 from '../img/project2.jpeg';
import Project3 from '../img/project3.jpeg';

import './projects.css';

function ProjectSection() {
  const projects = [
    { id: 1, name: "Project 1", details: "Details for Project 1", image: Project1, link: "https://example.com/project1" },
    { id: 2, name: "Project 2", details: "Details for Project 2", image: Project2, link: "https://example.com/project2" },
    { id: 3, name: "Project 3", details: "Details for Project 3", image: Project3, link: "https://example.com/project3" },
    
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div id="project">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img src={project.image} alt={project.name} />
            <div className="custom-progress" style={{ transform: `rotate(${Math.random() * 360}deg)`, transitionDuration: `${Math.random() * 1 + 1}s` }} />
            {hoveredProject === project.id && (
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.details}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
