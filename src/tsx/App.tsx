import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../global/tsx/sidebar';
import AboutMe from './aboutMe';
import Accomplishments from './accomplishments';
import MagicMirror from '../individualProjectPages/tsx/magicMirror';
import GameServer from '../individualProjectPages/tsx/gameServer';
import WalkingTable from '../individualProjectPages/tsx/walkingTable';
import PiHole from '../individualProjectPages/tsx/piHole';
import WebsiteProject from '../individualProjectPages/tsx/websiteProject';

//import Statistics from './Depricated/Statistics';
import Projects from './projects';

const App: React.FC = () => {
  return (
     <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        {/* <Route path="/statistics" element={<Statistics />} /> */}
        <Route path="/projects" element={<Projects />} />        
        <Route path="/projects/magic-mirror" element={<MagicMirror />} />       
        <Route path="/projects/game-server" element={<GameServer />} />
        <Route path="/projects/walking-table" element={<WalkingTable />} />
        <Route path="/projects/pi-hole" element={<PiHole />} />
        <Route path="/projects/website" element={<WebsiteProject />} />

      </Routes>
    </Router> 
  );
};

export default App;