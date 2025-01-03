import React from 'react';
import './Accomplishments.css';

const Accomplishments: React.FC = () => {
  return (
    <div className="accomplishments-container">
      <h1>Accomplishments & Certifications</h1>
      
      <div className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-scroll">
          {/* Example of certification images or Credly badge links */}
          <img src="certificate1.jpg" alt="Certificate 1" />
          <img src="certificate2.jpg" alt="Certificate 2" />
          <img src="certificate3.jpg" alt="Certificate 3" />
          {/* Add more certificates or Credly badges as needed */}
        </div>
      </div>

      <div className="projects-goals">
        <h2>Project Work & Goals</h2>
        <p>Describe your project work and goals here.</p>
      </div>

      <div className="future-goals">
        <h2>Future Goals</h2>
        <p>Describe your future goals here.</p>
      </div>
    </div>
  );
};

export default Accomplishments;