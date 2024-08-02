import React, { useState } from 'react';

const TaskItem = ({ task, index, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isExpanded, setIsExpanded] = useState(false); // New state for expandable list

  const handleEdit = () => {
    if (updatedTask.trim() !== '') {
      editTask(index, { ...task, task: updatedTask, lastUpdate: new Date().toISOString() });
      setIsEditing(false);
    }
  };

  const handleComplete = () => {
    toggleComplete(index);
    setIsCompleted(!isCompleted);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
            <button onClick={handleEdit}>Save</button>
          </>
        ) : (
          <>
            <span onClick={toggleExpand} style={{ cursor: 'pointer' }}>
              {task.task}
            </span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={handleComplete}>
              {isCompleted ? 'Undo' : 'Done'}
            </button>
          </>
        )}
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <p>Last Updated: {new Date(task.lastUpdate).toLocaleString()}</p>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
