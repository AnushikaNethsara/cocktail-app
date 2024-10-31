import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Search from "../components/organisms/Search";
describe("Search Component", () => {
  test("renders input and button", () => {
    const onSearch = jest.fn();
    const setLoading = jest.fn();

    render(<Search onSearch={onSearch} setLoading={setLoading} />);

    // Check if the input field is rendered
    const inputElement = screen.getByPlaceholderText(/search for a cocktail/i);
    expect(inputElement).toBeInTheDocument();

    // Check if the button is rendered
    const buttonElement = screen.getByRole("button", { name: /search/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
