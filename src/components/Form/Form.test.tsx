import { cleanup, fireEvent, render } from "@testing-library/react";
import Form from ".";

const renderFormComponent = () =>
  render(<Form setTasks={setTasksFunction} dataTestId="form" />);

const setTasksFunction = jest.fn();

var addbutton: HTMLElement,
  taskNameInput: HTMLElement,
  taskTimeInput: HTMLElement;

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  let { getByText, getByTestId } = renderFormComponent();
  addbutton = getByText("Add");
  taskNameInput = getByTestId("input-task-name");
  taskTimeInput = getByTestId("input-task-time");
});

function addATask() {
  fireEvent.input(taskNameInput, {
    target: { value: "React" },
  });

  fireEvent.input(taskTimeInput, {
    target: { value: "00:00:05" },
  });

  fireEvent.click(addbutton);
}

describe("Form component", () => {
  test("Add task button works", () => {
    addATask();

    expect(setTasksFunction).toHaveBeenCalled();
  });

  test("Form is cleaned after submit", () => {
    addATask();

    expect(taskNameInput).toHaveValue("");
    expect(taskTimeInput).toHaveValue("00:00");
  });
});
