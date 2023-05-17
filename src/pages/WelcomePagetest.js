import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("Page render in english", () => {
  render(<WelcomePage language="en" />);

  const page = screen.getByText("Welcome");
  expect(page).toBeInTheDocument();
});

test("page render in swedish", () => {
  render(<WelcomePage language="sv" />);

  const page = screen.getByText("Välkommen");
  expect(page).toBeInTheDocument();
});

test("Page render in english if no selected language", () => {
  render(<WelcomePage />);

  const page = screen.getByText("Welcome");
  expect(page).toBeInTheDocument();
});
