import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Pokemon search box", () => {
  render(<App />);
  const queryBox = screen.getByRole("searchbox");
  expect(queryBox).toBeInTheDocument();
});
