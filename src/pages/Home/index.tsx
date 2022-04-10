import { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import Stopwatch from "../../components/Stopwatch";
import { ITask, ITasks } from "../../types/task";
import style from "./Home.module.scss";

export default function Home() {
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
    <>
      <h1 className={style.title}> Alura Studying Guide</h1>
      <Form dataTestId="form" setTasks={setTasks} />
      <List dataTestId="task-list" selectTask={selectTask} tasks={tasks} />
      <Stopwatch dataTestId="stopwatch" endTask={endTask} selected={selected} />
    </>
  );
}
