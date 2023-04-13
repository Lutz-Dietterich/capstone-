import { render, fireEvent } from "@testing-library/react";
import FilterButton from "../FilterButton";

describe("FilterButton", () => {
  it("should call setActive function when clicked", () => {
    const setActiveMock = jest.fn();
    const { getByRole } = render(
      <FilterButton
        id={1}
        text="Test"
        isactive={false}
        setActive={setActiveMock}
      />
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(setActiveMock).toHaveBeenCalledWith(1);
  });

  it("should have correct background color based on isactive prop", () => {
    const { getByRole, rerender } = render(
      <FilterButton id={1} text="Test" isactive={false} setActive={() => {}} />
    );
    const button = getByRole("button");
    expect(button).toHaveStyle("background-color: #fff");
    rerender(
      <FilterButton id={1} text="Test" isactive={true} setActive={() => {}} />
    );
    expect(button).toHaveStyle("background-color: #3742fa");
  });
});
