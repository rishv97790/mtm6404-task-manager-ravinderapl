import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Complete React project", priority: "High" },
    { id: 2, task: "Prepare for meeting", priority: "Medium" },
    { id: 3, task: "Buy groceries", priority: "Low" },
    { id: 4, task: "Schedule doctor's appointment", priority: "Medium" },
    { id: 5, task: "Exercise", priority: "High" },
  ]);

  return (
    <div className="tasklist">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - <strong>{task.priority} Priority</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
