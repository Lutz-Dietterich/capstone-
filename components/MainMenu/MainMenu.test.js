import { render, screen } from "@testing-library/react";
import MainMenu from "../MainMenu";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Navigation have 3 listitems", () => {
  useRouter.mockImplementation(() => ({
    pathname: "/",
  }));

  render(<MainMenu />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
