import React from 'react';
import './Projects.css'; // Make sure to create this CSS file

const projects = [
  {
    id: 1,
    image: 'https://picsum.photos/150', // New placeholder image URL
    summary: 'This is the summary of project 1.'
  },
  {
    id: 2,
    image: 'https://picsum.photos/150', // New placeholder image URL
    summary: 'This is the summary of project 2.'
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      {projects.map((project, index) => (
        <div key={project.id} className={`project ${index % 2 === 0 ? 'left' : 'right'}`}>
          <img src={project.image} alt={`Project ${project.id}`} />
          <p>{project.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;