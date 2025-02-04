import React from 'react';
import './AboutMe.css'; 

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe-container">
      <h1 className="aboutMe-title">About Me</h1>
      <p>This is the about me page.</p>

      <div className="WorkExperience">
      <h2>Work Experience</h2>
      <p>Temp</p>
      </div>
    </div>
  );
};

export default AboutMe;