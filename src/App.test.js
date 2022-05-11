import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders app logo", () => {
  render(<App />);
  const appLogo = screen.getByAltText("logo");
  expect(appLogo).toBeVisible();
});

test("Renders app title", () => {
  render(<App />);
  const appTitle = screen.getByText("pokédex-js");
  expect(appTitle).toBeVisible();
});

test("Renders search box", () => {
  render(<App />);
  const queryBox = screen.getByRole("searchbox");
  expect(queryBox).toBeInTheDocument();
});
