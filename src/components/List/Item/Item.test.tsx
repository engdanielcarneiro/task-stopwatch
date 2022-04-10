import { fireEvent, render } from "@testing-library/react";
import Item from ".";

describe("Item component", () => {
  const selectTaskFunction = jest.fn();

  const defaultItem = {
    name: "JavaScript",
    time: "00:00:05",
    id: "XXXXXX22221XXXXXX",
  };

  describe("When I click on a task", () => {
    test("and the task is not selected, the select function is triggered", () => {
      const item = {
        ...defaultItem,
        completed: false,
        selected: false,
      };

      let { getByTestId } = render(
        <Item selectTask={selectTaskFunction} {...item} />
      );

      const task = getByTestId("item");

      fireEvent.click(task);

      expect(selectTaskFunction).toHaveBeenCalled();
    });

    test("and the task is selected, the select function is not triggered", () => {
      const item = {
        ...defaultItem,
        completed: false,
        selected: true,
      };

      let { getByTestId } = render(
        <Item selectTask={selectTaskFunction} {...item} />
      );

      const task = getByTestId("item");

      fireEvent.click(task);

      expect(selectTaskFunction).not.toHaveBeenCalled();
    });

    test("and the task is completed, the select function is not triggered", () => {
      const item = {
        ...defaultItem,
        completed: true,
        selected: false,
      };

      let { getByTestId } = render(
        <Item selectTask={selectTaskFunction} {...item} />
      );

      const task = getByTestId("item");

      fireEvent.click(task);

      expect(selectTaskFunction).not.toHaveBeenCalled();
    });
  });
});
