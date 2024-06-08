import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark-mode' : 'App'}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Home />
      </div>
    </Router>
  );
};

export default App;
