import React from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (taskid) => {
    const seltaskList = taskList.filter((taskList) => taskList.id !== taskid);
    console.log(seltaskList);
    setTaskList(seltaskList);
  };

  const handleEdit = (taskid) => {
    console.log(taskid);
    task = taskList.find((taskList) => taskList.id === taskid);

    setTask(task);
    //setTaskList(ediTaskList, ...taskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">To Do</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button
          className="clearAll"
          type="button"
          onClick={() => setTaskList([])}
        >
          Clear ALL
        </button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="id">{task.id}</span>
              <span className="name">{task.name}</span>
              <span className="assigned">{task.assigned}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
