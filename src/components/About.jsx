// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our Task Manager app! Our goal is to provide you with a powerful 
        tool to help you stay organized and manage your tasks effectively.
      </p>
      <section style={styles.section}>
       
      </section>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Key Features</h2>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>✔️ Intuitive task creation and management</li>
          <li style={styles.featureItem}>✔️ Priority setting for tasks</li>
          <li style={styles.featureItem}>✔️ User-friendly interface</li>
          <li style={styles.featureItem}>✔️ Responsive design for all devices</li>
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Meet My Team</h2>
        <p style={styles.paragraph}>
          Our dedicated team consists of developers, designers, and project managers 
          committed to providing the best user experience. We value your feedback 
          and are continually working to enhance our app.
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

export default About;
