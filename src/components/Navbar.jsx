// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.navLink}>
        Home
      </Link>
      <Link to="/about" style={styles.navLink}>
        About
      </Link>
      <Link to="/tasks" style={styles.navLink}>
        Tasks
      </Link>
      <Link to="/contact" style={styles.navLink}>
        Contact
      </Link>
    </nav>
  );
};

// Inline CSS styles for Navbar
const styles = {
  navbar: {
    backgroundColor: '#007bff',
    padding: '15px',
    textAlign: 'center',
    position: 'sticky', // Keeps navbar at the top on scroll
    top: 0,
    zIndex: 1000, // Ensures it stays above other content
  },
  navLink: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

// Adding hover effect to links
styles.navLink[':hover'] = {
  backgroundColor: '#0056b3', // Darker blue on hover
};

export default Navbar;
