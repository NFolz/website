// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><strong>Nicolas Folz</strong></li> {/* Display your name */}
        <li><Link to="/">Home</Link></li>      {/* Home Link */}
        <li><Link to="/about">About</Link></li>  {/* About Link */}
        <li><Link to="/projects">Projects</Link></li>  {/* Projects Link */}
        <li><Link to="/experiences">Experiences</Link></li>  {/* Experiences Link */}
      </ul>
    </nav>
  );
}

export default NavBar;
