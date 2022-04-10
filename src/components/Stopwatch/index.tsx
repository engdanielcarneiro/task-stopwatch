import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  selected?: ITask;
  endTask: () => void;
  dataTestId: string;
}

export default function Stopwatch({ selected, endTask, dataTestId }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    // Testing function call via log with Jest. Is it a good practice? Probably not...
    console.log("");

    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div data-testid={dataTestId} className={style.stopwatch}>
      <p className={style.title}> Choose a card and start the stopwatch</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Start!</Button>
    </div>
  );
}
