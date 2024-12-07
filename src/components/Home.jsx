// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Task Manager</h1>
      <p style={styles.paragraph}>Manage your tasks efficiently!</p>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>About the Task Manager</h2>
        <p style={styles.paragraph}>
          My name is RAVINDERPAL SHARMA and my application can help you keep track of your daily tasks 
          effortlessly. Whether you need to manage personal projects or work assignments, 
          our intuitive interface makes it easy to stay organized.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Key Features</h2>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>✔️ Add, edit, and delete tasks</li>
          <li style={styles.featureItem}>✔️ Set task priorities (normal, high, low)</li>
          <li style={styles.featureItem}>✔️ Toggle completion status for tasks</li>
          <li style={styles.featureItem}>✔️ Filter to view only active tasks</li>
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Get Started!</h2>
        <p style={styles.paragraph}>
          Start managing your tasks today. Navigate to the <strong>Tasks</strong> section 
          to add your first task and experience seamless task management!
        </p>
      </section>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: '800px', // Limit width for better readability
    margin: '20px auto', // Center the container
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  },
  heading: {
    fontSize: '2rem', // Font size for the heading
    textAlign: 'center', // Center the heading
    color: '#333', // Darker color for the heading
  },
  subHeading: {
    fontSize: '1.5rem', // Font size for subheadings
    color: '#007bff', // Blue color for subheadings
    margin: '15px 0', // Margin around subheadings
  },
  paragraph: {
    fontSize: '1.2rem', // Font size for the paragraph
    textAlign: 'center', // Center the paragraph
    color: '#666', // Lighter color for the paragraph
  },
  section: {
    margin: '20px 0', // Margin for sections
  },
  featureList: {
    listStyleType: 'none', // Remove default list styling
    padding: 0, // Remove padding
    textAlign: 'left', // Align list to the left
    margin: '0 auto', // Center the list
    maxWidth: '600px', // Limit width for better readability
  },
  featureItem: {
    fontSize: '1.1rem', // Font size for list items
    margin: '10px 0', // Margin for list items
    color: '#555', // Darker color for list items
  },
};

export default Home;
