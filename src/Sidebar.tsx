import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaProjectDiagram, FaTrophy } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/" className="sidebar-icon">
        <FaHome />
        {isExpanded && <span>Home</span>}
      </Link>
      <Link to="./statistics" className="sidebar-icon">
        <FaChartBar />
        {isExpanded && <span>Statistics</span>}
      </Link>
      <Link to="./projects" className="sidebar-icon">
        <FaProjectDiagram />
        {isExpanded && <span>Projects</span>}
      </Link>
      <Link to="./accomplishments" className="sidebar-icon">
        <FaTrophy />
        {isExpanded && <span>Accomplishments</span>}
      </Link>
    </div>
  );
};

export default Sidebar;