import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Accomplishments from './Accomplishments';
import Statistics from './Statistics';
import Projects from './Projects';
import Todolist from './TodoList';

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Todolist" element={<Todolist />} />
      </Routes>
    </Router>
  );
};

export default App;