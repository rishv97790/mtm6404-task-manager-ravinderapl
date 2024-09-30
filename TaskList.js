import React from 'react';
import Task from './Task';
import './TaskList.css';  // Import CSS for TaskList component

function TaskList() {
  const tasks = [
    { id: 1, title: 'Complete UI design' },
    { id: 2, title: 'Implement React components' },
    { id: 3, title: 'Ensure site responsiveness' },
    { id: 4, title: 'Submit assignment' },
    { id: 5, title: 'Review feedback' }
  ];

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
