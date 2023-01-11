import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Modal from "./index";

describe("Modal", () => {
  test("calls useEffect with the correct arguments when openModal changes", () => {
    /* Spying on the useEffect hook. */
    const spy = jest.spyOn(React, "useEffect");
    /* Destructuring the `rerender` function from the `render` function. */
    const { rerender } = render(<Modal openModal={false} />);
    /* Re-rendering the component with the new props. */
    rerender(<Modal openModal={true} />);
    /* Checking that the useEffect hook was called with the correct arguments. */
    expect(spy).toHaveBeenCalledWith(expect.any(Function), [true]);
    /* It restores the original function. */
    spy.mockRestore();
  });

  test("returns null if openModal is false", () => {
    const { container } = render(<Modal openModal={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("renders the correct HTML content when openModal is true", () => {
    render(<Modal openModal={true} />);
    expect(screen.getByTestId("closeModal")).toBeInTheDocument();
    expect(screen.getByTestId("modalWrapper")).toBeInTheDocument();
    expect(screen.getByTestId("closeModalBnt")).toBeInTheDocument();
  });

  test("calls closeModal when the user clicks the Close button or the modal background area", () => {
    const closeModal = jest.fn();
    render(<Modal openModal={true} closeModal={closeModal} />);
    fireEvent.click(screen.getByTestId("closeModalBnt"));
    expect(closeModal).toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("closeModal"));
    expect(closeModal).toHaveBeenCalled();
  });

  test("correctly displays the message", () => {
    const message = "This is a test message";
    render(<Modal openModal={true} children={message} />);
    expect(screen.getByTestId("message")).toHaveTextContent(message);
  });
});
