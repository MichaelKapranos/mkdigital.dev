import React from 'react';
import './AboutMe.css'; 

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe-container">
      <h1 className="aboutMe-title">About Me</h1>
      <p>This is the about me page.</p>

      <div className="WorkExperience">
      <h2>Work Experience</h2>
      <p>- Software developer moving into cloud technologies
        <br/> - Working on certifications 
        <br/> - A little about personal projects 
        <br/> - A little about callisto, the move over to the new technologies 
        <br/> - A little about working in MDS on change
        <br/> - Briefly future plans work wise
      </p>
      </div>
    </div>
  );
};

export default AboutMe;