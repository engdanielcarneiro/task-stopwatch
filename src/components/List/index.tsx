import { ITask, ITasks } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITasks;
  selectTask: (selectedTask: ITask) => void;
  dataTestId: string;
}

function List({ tasks, selectTask, dataTestId }: Props) {
  return (
    <aside data-testid={dataTestId} className={style.taskList}>
      <h2>Today studies</h2>
      <ul data-testid="list">
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
