import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Accomplishments from './Accomplishments';
import Statistics from './Statistics';

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;