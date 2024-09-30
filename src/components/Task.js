import React, { useState } from 'react';
import './Task.css';  // Import the CSS for Task component

function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(task.completed || false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  // Toggle the completed status of the task
  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  // Handle task editing
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save the edited task
  const handleSaveEdit = () => {
    task.title = editedTask;
    setIsEditing(false);
  };

  // A placeholder function for confirming task deletion
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the task "${task.title}"?`)) {
      alert(`Task "${task.title}" deleted!`);
    }
  };

  return (
    <li className={`task ${isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}
      
      <div className="task-actions">
        {isEditing ? (
          <button className="save" onClick={handleSaveEdit}>Save</button>
        ) : (
          <>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="complete" onClick={handleComplete}>
              {isCompleted ? 'Undo' : 'Complete'}
            </button>
          </>
        )}
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Task;
