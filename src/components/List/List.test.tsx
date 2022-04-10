import { cleanup, render } from "@testing-library/react";
import List from ".";

const renderListComponent = () =>
  render(
    <List
      tasks={tasks}
      selectTask={selectTaskFunction}
      dataTestId="task-list"
    />
  );

const tasks = [
  {
    name: "React",
    time: "00:00:10",
    completed: false,
    selected: false,
    id: "XXXXXX456454XXXXXX",
  },
  {
    name: "Typescript",
    time: "00:00:05",
    completed: false,
    selected: false,
    id: "XXXXXX11111XXXXXX",
  },
  {
    name: "JavaScript",
    time: "00:00:05",
    completed: false,
    selected: false,
    id: "XXXXXX22221XXXXXX",
  },
];

const selectTaskFunction = jest.fn();

var list: HTMLElement;

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  const { getByTestId } = renderListComponent();
  list = getByTestId("list");
});

describe("Task List component", () => {
  test("Tasks were rendered", () => {
    expect(list.children).toHaveLength(3);
  });
});
