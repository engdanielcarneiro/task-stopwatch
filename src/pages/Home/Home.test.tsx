import { render } from "@testing-library/react";
import Home from ".";

const renderHomePage = () => render(<Home />);

describe("When Home page is rendered", () => {
  let { getByText, getByTestId } = renderHomePage();
  const form = getByTestId("form");
  const taskList = getByTestId("task-list");
  const stopwatch = getByTestId("stopwatch");

  test("The app name is shown", () => {
    expect(getByText("Alura Studying Guide")).toBeInTheDocument();
  });

  test("Form, List and Stopwatch were rendered correctly", () => {
    expect(form).toHaveTextContent("Add a task");
    expect(taskList).toHaveTextContent("Today studies");
    expect(stopwatch).toHaveTextContent("Choose a card");
  });
});
