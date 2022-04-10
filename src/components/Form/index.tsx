import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITasks } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>;
  dataTestId: string;
}

function Form({ setTasks, dataTestId }: Props) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { name, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setName("");
    setTime("00:00");
  }

  return (
    <form data-testid={dataTestId} onSubmit={addTask} className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a task</label>
        <input
          type="text"
          name="task"
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="task"
          data-testid="input-task-name"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          data-testid="input-task-time"
          min="00:00:00"
          max="05:00:00"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}
class Form1 extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITasks>>;
}> {
  state = {
    name: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({
      name: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form onSubmit={this.addTask.bind(this)} className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a task</label>
          <input
            type="text"
            name="task"
            value={this.state.name}
            onChange={(event) =>
              this.setState({ ...this.state, name: event.target.value })
            }
            id="task"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id="time"
            min="00:00:00"
            max="05:00:00"
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

export default Form;
