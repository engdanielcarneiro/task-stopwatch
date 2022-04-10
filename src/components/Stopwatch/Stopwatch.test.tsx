import { cleanup, fireEvent, render } from "@testing-library/react";
import Stopwatch from ".";

let startButton: HTMLElement;
const endTaskFunction = jest.fn();

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  const { getByText } = render(
    <Stopwatch dataTestId="stopwatch" endTask={endTaskFunction} />
  );
  startButton = getByText("Start!");
});

describe("Stopwatch component", () => {
  test("Start button triggers countdown function", () => {
    const spy = jest.spyOn(console, "log");

    fireEvent.click(startButton);

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
