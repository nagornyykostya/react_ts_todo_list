import React from "react";
import Task from "./Task.jsx";

const TasksList = ({ tasks, updateTask, deleteTask }) => {

  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          {...task}
          key={task.id}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
