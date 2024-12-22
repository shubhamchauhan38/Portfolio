// filepath: /d:/Programming/React/Project/Project/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume'; // Import the Resume component

const App = () => {
  return (
    <Router basename="/Portfolio">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
          <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} /> {/* Add the Resume route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;