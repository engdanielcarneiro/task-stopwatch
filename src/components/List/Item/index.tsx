import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  name,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      onClick={() => {
        !completed && selectTask({ name, time, selected, completed, id });
      }}
      className={`${style.item} ${selected ? style.selectedItem : ""} ${
        completed ? style.completedItem : ""
      }`}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.completed} aria-label="completed-task"></span>
      )}
    </li>
  );
}
