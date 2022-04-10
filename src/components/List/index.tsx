import React from "react";
import { ITask, ITasks } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITasks;
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Today studies</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
