import React from 'react';
import '../css/projects.css'; 
import magicmirror from '../assets/magicmirror.jpg';
import PiHole from '../assets/PiHole.png';
import ServerBox from '../assets/ServerBox.jpg';
import walkingtable from '../assets/walkingtable.jpg';
import websiteimage from '../assets/WebsiteImage.png';
import { Link } from 'react-router-dom'; 

const projects = [
  {
    id: 'magic-mirror',
    image: magicmirror,
    title: 'Magic Mirror',
    summary: 'A touchscreen smart mirror built with a Raspberry Pi, custom wood frame, and MagicMirror² software. Displays weather, calendar, YouTube, and more with interactive dimming.'
  },
  {
    id: 'game-server',
    image: ServerBox,
    title: 'Game Server Box',
    summary: 'A headless Ubuntu server running multiple Dockerized game servers. Built to practice Linux CLI and Docker, with port forwarding for external access and efficient resource isolation.'
  },
  {
    id: 'pi-hole',
    image: PiHole,
    title: 'Pi-Hole',
    summary: 'A Raspberry Pi 2W configured to route all Wi-Fi traffic through Pi-hole and an ad blocker. Includes a dashboard for real-time network stats and DNS filtering across all devices.'
  },
  {
    id: 'personalWebsite',
    image: websiteimage,
    title: 'Personal Portfolio Website',
    summary: 'This site! Built with React (.tsx), hosted on AWS Amplify, secured with ACM, and integrated with Git for CI/CD. Fully custom DNS routing via Route 53.'
  },
  {
    id: 'walking-table',
    image: walkingtable,
    title: 'Walking Table (In Progress)',
    summary: 'temp.' // Placeholder as requested
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