import React, { useState } from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTasklist = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              assigned: task.assigned,
              time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updateTasklist);
      setTask({});
    } else {
      const date = new Date();
      console.log(date.getTime());
      const newTask = {
        id: date.getTime(),
        name: e.target.todo.value,
        assigned: e.target.assigned.value,
        time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask" key={task.id}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Add Task"
          maxLength="100"
          autoComplete="off"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <input
          type="text"
          name="assigned"
          placeholder="Assigned To"
          maxLength={100}
          autoComplete="off"
          value={task.assigned || ""}
          onChange={(e) => setTask({ ...task, assigned: e.target.value })}
        />

        <button type="submit">Add Task </button>
      </form>
    </section>
  );
};

export default AddTask;
