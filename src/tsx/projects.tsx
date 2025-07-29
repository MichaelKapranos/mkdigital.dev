import React from 'react';
import '../css/projects.css'; 
import { Link } from 'react-router-dom'; 

const projects = [
  {
    id: 'magic-mirror',
    image: 'https://picsum.photos/150', // New placeholder image URL
    title:'test1',
    summary: 'This is the summary of project 1. '
  },
  {
    id: 2,
    image: 'https://picsum.photos/150', // New placeholder image URL
    summary: 'This is the summary of project 2.'
  },
  {
    id: 3,
    image: 'https://picsum.photos/150', // New placeholder image URL
    summary: 'This is the summary of project 2.'
  },
  {
    id: 4,
    image: 'https://picsum.photos/150', // New placeholder image URL
    summary: 'This is the summary of project 2.'
  },
  {
    id: 5,
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
          <Link to={`/projects/${project.id}`}>
            <img src={project.image} alt={`Project ${project.id}`} />
          </Link>
          <div className="project-text">
          <Link to={`/projects/${project.id}`} className="project-title-link">
            <h5 className="project-title">{project.title || `Project ${project.id}`}</h5>
          </Link>
            <p>{project.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Projects;