import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITask, ITasks } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITasks>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) => ({
        ...oldTask,
        selected: selectedTask.id === oldTask.id ? true : false,
      }))
    );
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((oldTask) => {
          if (oldTask.id === selected.id) {
            return {
              ...oldTask,
              selected: false,
              completed: true,
            };
          }
          return oldTask;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List selectTask={selectTask} tasks={tasks} />
      <Stopwatch endTask={endTask} selected={selected} />
    </div>
  );
}

export default App;
