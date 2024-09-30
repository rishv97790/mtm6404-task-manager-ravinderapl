// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Task Manager</h1>
      <p className="about-description">
        Task Manager is a web application designed to assist individuals and teams in managing their tasks efficiently. 
        Our goal is to provide a simple yet powerful tool that helps users stay organized and focused on what matters most.
      </p>
      
     
      
      <section className="features-section">
        <h2>Key Features</h2>
        <ul className="features-list">
          <li>✅ <strong>Task Prioritization</strong>: Easily prioritize tasks to focus on what’s most important.</li>
          <li>✅ <strong>Collaborative Workspaces</strong>: Share your tasks with teammates for smooth collaboration.</li>
          <li>✅ <strong>Progress Tracking</strong>: Track the progress of each task and stay on top of deadlines.</li>
          <li>✅ <strong>Custom Notifications</strong>: Set reminders and notifications to ensure no task is forgotten.</li>
          <li>✅ <strong>Cross-Platform Sync</strong>: Use Task Manager across devices with real-time synchronization.</li>
        </ul>
      </section>
      
      <p className="closing-remarks">
        Thank you for choosing Task Manager. We hope it boosts your productivity and helps you achieve your goals!
      </p>
    </div>
  );
};

export default About;
