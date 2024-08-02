import React, { useState } from 'react';

const TaskItem = ({ index, task, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleEdit = () => {
    if (updatedTask.trim() !== '') {
      editTask(index, updatedTask);
      setIsEditing(false);
    }
  };

  const handleComplete = () => {
    toggleComplete(index);
    setIsCompleted(!isCompleted);
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
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
          <span>{task.task}</span> {/* Ensure you are rendering task.task */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={handleComplete}>
            {isCompleted ? 'Undo' : 'Done'}
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
