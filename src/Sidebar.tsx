import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleSidebar}>About Me</Link></li>
          <li><Link to="/accomplishments" onClick={toggleSidebar}>Accomplishments</Link></li>
          <li><Link to="/projects" onClick={toggleSidebar}>Projects</Link></li>
          <li><Link to="/statistics" onClick={toggleSidebar}>Statistics</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;