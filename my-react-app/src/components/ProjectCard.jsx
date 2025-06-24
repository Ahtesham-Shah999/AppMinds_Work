import React from 'react';
import '../styles/ProjectCard.css'; 

const ProjectCard = ({ title, description, link, techStack, image }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-item">{tech}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
