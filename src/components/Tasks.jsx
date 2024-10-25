// src/components/Tasks.jsx
import React, { useState } from 'react';
import TaskForm from './TaskForm';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(false);

  const addTask = (task, priority) => {
    setTasks([...tasks, { text: task, completed: false, priority }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const toggleHideCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  const filteredTasks = hideCompleted ? tasks.filter(task => !task.completed) : tasks;

  return (
    <div className="task-container" style={styles.container}>
      <h1 style={styles.heading}>Task List</h1>
      <TaskForm onAddTask={addTask} />
      <button onClick={toggleHideCompleted} style={styles.toggleButton}>
        {hideCompleted ? 'Show Completed Tasks' : 'Hide Completed Tasks'}
      </button>
      <ul style={styles.taskList}>
        {filteredTasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <span 
              onClick={() => toggleTaskCompletion(index)} 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              [{task.priority}] {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
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
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  toggleButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  toggleButtonHover: {
    backgroundColor: '#0056b3',
  },
  taskList: {
    listStyleType: 'none', // Remove default list styles
    padding: 0, // Remove default padding
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Tasks;
