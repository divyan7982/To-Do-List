import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id} // Use task.id as the key
          index={index}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
