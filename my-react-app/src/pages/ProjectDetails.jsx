import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: "Smart Traffic System",
      description: "A MERN-based using SPF Algorithm.",
      link: "https://github.com/Ahtesham-Shah999/Smart-Traffic_System.git",
      techStack: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "G8 Builders",
      description: "Freelancer-client platform with bidding and messaging.",
      link: "https://github.com/Ahtesham-Shah999/Zevens_Builders.git",
      
      techStack: ["React", "Nodejs", "Socket.IO", "MongoDB"]
    }
  ];

  return (
    <div className="project-grid">
      {projectList.map((project) => (
        <ProjectCard  {...project} />
      ))}
    </div>
  );
};

export default Projects;
