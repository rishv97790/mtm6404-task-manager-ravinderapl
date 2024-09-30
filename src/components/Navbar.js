// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Navbar.css';  // Import Navbar-specific CSS

function Navbar() {
  return (
    <nav>
      <h2>Task Manager</h2>
      <ul>
        <li><Link to="/">Home</Link></li>   {/* Link to Home page */}
        <li><Link to="/tasks">Tasks</Link></li>  {/* Link to Tasks page */}
        <li><Link to="/about">About</Link></li>  {/* Link to About page */}
      </ul>
    </nav>
  );
}

export default Navbar;
