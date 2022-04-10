export interface ITask {
  name: string;
  time: string;
  selected: boolean;
  completed: boolean;
  id: string;
}

export type ITasks = ITask[];
