import React from 'react';
import './Statistics.css'; 

const Statistics: React.FC = () => {
  return (
    <div className="Statistics-container">
      <h1 className="Statistics-title">Statistics</h1>
      <p>This is the statistics page.</p>

      <div className="Statistics">
      <h2>Stats</h2>
      <p>Temp</p>
      </div>
    </div>
  );
};

export default Statistics;