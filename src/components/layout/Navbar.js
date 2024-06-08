import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode} className="btn btn-light">
        Dark/Light
      </button>
    </nav>
  );
};

export default Navbar;
