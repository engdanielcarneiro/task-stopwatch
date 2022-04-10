import { fireEvent, render } from "@testing-library/react";
import Stopwatch from ".";

describe("Stopwatch component", () => {
  test("Start button triggers countdown function", () => {
    const spy = jest.spyOn(console, "log");

    const endTaskFunction = jest.fn();
    const { getByText } = render(
      <Stopwatch dataTestId="stopwatch" endTask={endTaskFunction} />
    );
    const startButton = getByText("Start!");
    fireEvent.click(startButton);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
