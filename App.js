// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';  // Ensure this component exists
import Footer from './components/Footer';  // Ensure this component exists
import Home from './components/Home';  // Updated to uppercase Home
import About from './components/About';  // Updated to uppercase About
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />  {/* Render the Home component */}
            <Route path="/tasks" element={<TaskList />} />  {/* Render the TaskList component */}
            <Route path="/about" element={<About />} />  {/* Render the About component */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
