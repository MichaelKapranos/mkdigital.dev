import React from 'react';
import '../css/projects.css'; 
import { Link } from 'react-router-dom'; 


const projects = [
  {
    id: 'magic-mirror',
    image: 'https://picsum.photos/150',
    title: 'Magic Mirror',
    summary: 'A smart mirror with a custom wooden frame, touchscreen, and modules for weather, calendar, YouTube, and more.'
  },
  {
    id: 'game-server',
    image: 'https://picsum.photos/150',
    title: 'Game Server Box',
    summary: 'A headless Ubuntu server running multiple Dockerized game servers with port forwarding for external access.'
  },
  {
    id: 'pi-hole',
    image: 'https://picsum.photos/150',
    title: 'Pi-Hole',
    summary: 'A Raspberry Pi 2W running Pi-hole and an ad blocker to filter network traffic and display real-time stats.'
  },
  {
    id: 'personalWebsite',
    image: 'https://picsum.photos/150',
    title: 'Personal Portfolio Website',
    summary: 'This site! Built with React and hosted on AWS Amplify with CI/CD via Git and custom DNS routing.'
  },
  {
    id: 'walking-table',
    image: 'https://picsum.photos/150',
    title: 'Walking Table (In Progress)',
    summary: 'temp.' // You mentioned not to write this one yet
  },
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