import React, { useEffect } from "react";
import TasksList from "./TasksList.jsx";
import CreateTaskInput from "./CreateTaskInput.jsx";
import * as tasksActions from "../tasks.actions.js";
import { connect } from "react-redux";
import { sortedTasks } from "../tasks.selectors.js";

const ToDoList = ({
  fetchTasksList,
  tasks,
  createTask,
  updateTask,
  deleteTask,
}) => {
  useEffect(() => {
    fetchTasksList();
  }, []);
  return (
    <>
      <h1 className="title">To-Do List</h1>
      <main className="todo-list">
        <CreateTaskInput createTask={createTask} />
        <TasksList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </main>
    </>
  );
};

const mapState = (state) => {
  return {
    tasks: sortedTasks(state),
  };
};

const mapDisp = {
  fetchTasksList: tasksActions.fetchTasksList,
  createTask: tasksActions.createTask,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(mapState, mapDisp)(ToDoList);
