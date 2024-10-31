import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "../context/FavoritesContext";
import "@testing-library/jest-dom";

// Custom test component to use the context
const TestComponent = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useFavorites();

  // Simulated cocktail for testing
  const mockCocktail = { idDrink: "1", name: "Mojito" };

  return (
    <div>
      <button onClick={() => addToFavourites(mockCocktail)}>
        Add to Favourites
      </button>
      <button onClick={() => removeFromFavourites(mockCocktail.idDrink)}>
        Remove from Favourites
      </button>
      <div data-testid="favourites-list">
        {favourites.map((cocktail) => (
          <div key={cocktail.idDrink}>{cocktail.name}</div>
        ))}
      </div>
    </div>
  );
};

// Test for FavoritesProvider
describe("FavoritesContext", () => {
  test("allows adding and removing favourites", () => {
    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    // Initially, no favourites should be present
    expect(screen.queryByTestId("favourites-list")).toBeEmptyDOMElement(); // This should now work

    // Add a favourite
    fireEvent.click(screen.getByText(/Add to Favourites/i));

    // Check that the favourite has been added
    expect(screen.getByTestId("favourites-list").children.length).toBe(1);
    expect(screen.getByText(/Mojito/i)).toBeInTheDocument(); // This should now work

    // Remove the favourite
    fireEvent.click(screen.getByText(/Remove from Favourites/i));

    // Check that no favourites are present after removal
    expect(screen.queryByTestId("favourites-list")).toBeEmptyDOMElement(); // This should now work
  });
});
