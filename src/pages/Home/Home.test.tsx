import { cleanup, render } from "@testing-library/react";
import Home from ".";

const renderHomePage = () => render(<Home />);

var title: HTMLElement,
  form: HTMLElement,
  taskList: HTMLElement,
  stopwatch: HTMLElement;

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  let { getByText, getByTestId } = renderHomePage();
  title = getByText("Alura Studying Guide");
  form = getByTestId("form");
  taskList = getByTestId("task-list");
  stopwatch = getByTestId("stopwatch");
});

describe("When Home page is rendered", () => {
  test("The app name is shown", () => {
    expect(title).toBeInTheDocument();
  });

  test("Form, List and Stopwatch were rendered correctly", () => {
    expect(form).toHaveTextContent("Add a task");
    expect(taskList).toHaveTextContent("Today studies");
    expect(stopwatch).toHaveTextContent("Choose a card");
  });
});
