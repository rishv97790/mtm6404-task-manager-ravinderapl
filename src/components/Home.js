// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Boost Your Productivity with Task Pro</h1>
      <p className="home-description">
        Welcome to Task Pro! Our application is your ultimate tool for managing daily tasks, ongoing projects, and long-term goals. 
        With powerful features and a seamless interface, Task Pro is designed to help you stay on top of your responsibilities effortlessly.
      </p>
      
      <h2>Why Choose Task Pro?</h2>
      <p>
        Task Pro isn't just another task manager—it's your productivity partner. Whether you’re an individual aiming for better time management 
        or part of a team collaborating on projects, Task Pro is tailored to meet your needs.
      </p>
      
      <h2>Key Benefits:</h2>
      <ul className="benefits-list">
        <li>⚡ <strong>Smart Task Management</strong>: Prioritize tasks based on urgency and importance.</li>
        <li>📈 <strong>Progress Monitoring</strong>: Visualize your progress with dynamic charts and stats.</li>
        <li>👥 <strong>Team Collaboration</strong>: Share tasks and track project milestones with team members in real-time.</li>
        <li>🔄 <strong>Auto-Sync Across Devices</strong>: Access your tasks on any device, anywhere, at any time.</li>
        <li>🛡️ <strong>Secure & Private</strong>: Keep your data safe with end-to-end encryption.</li>
      </ul>

      <p className="cta">
        Start managing your tasks like a pro today with Task Pro! Get organized, stay focused, and achieve more.
      </p>
    </div>
  );
};

export default Home;

