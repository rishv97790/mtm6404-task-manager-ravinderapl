import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      onAddTask(taskInput, priority);
      setTaskInput('');
      setPriority('normal');
    }
  };

  // Inline CSS styles
  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '600px', // Maximum width for the form
      width: '100%', // Ensure it takes full width of the container
      margin: '20px auto', // Center the form horizontally
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%', // Full width for input
      marginBottom: '10px',
      boxSizing: 'border-box', // Ensures padding doesn't affect width
    },
    select: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%', // Full width for select
      marginBottom: '10px',
      boxSizing: 'border-box', // Ensures padding doesn't affect width
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease', // Smooth transition for hover
      width: '100%', // Make button full width
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        style={styles.input}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} style={styles.select}>
        <option value="normal">Normal</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
      <button 
        type="submit" 
        style={styles.button} 
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)} 
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
