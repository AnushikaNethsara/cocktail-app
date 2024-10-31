import { fetchRandomCocktails, searchCocktails } from "../utils/fetchCocktails";

// Mock the fetch function
global.fetch = jest.fn();

describe("Cocktail API Functions", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear any mock calls after each test
  });

  test("fetchRandomCocktails fetches 5 random cocktails", async () => {
    const mockCocktail = {
      idDrink: "11000",
      strDrink: "Margarita",
      strDrinkThumb: "https://example.com/margarita.jpg",
    };

    // Mock the response for each fetch call
    fetch
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ drinks: [mockCocktail] }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ drinks: [mockCocktail] }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ drinks: [mockCocktail] }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ drinks: [mockCocktail] }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ drinks: [mockCocktail] }),
      });

    const cocktails = await fetchRandomCocktails();

    // Check that fetch was called 5 times
    expect(fetch).toHaveBeenCalledTimes(5);
    // Check that the result is an array of 5 cocktails
    expect(cocktails).toHaveLength(5);
    // Check that each cocktail matches the mock cocktail structure
    cocktails.forEach((cocktail) => {
      expect(cocktail).toHaveProperty("idDrink");
      expect(cocktail).toHaveProperty("strDrink");
      expect(cocktail).toHaveProperty("strDrinkThumb");
    });
  });

  test("searchCocktails returns cocktails based on search query", async () => {
    const mockCocktails = [
      {
        idDrink: "11000",
        strDrink: "Margarita",
      },
      {
        idDrink: "11001",
        strDrink: "Daiquiri",
      },
    ];

    // Mock the response for the search function
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ drinks: mockCocktails }),
    });

    const cocktails = await searchCocktails("margarita");

    // Check that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    // Check that the result is the mock cocktails
    expect(cocktails).toEqual(mockCocktails);
  });

  test("searchCocktails returns an empty array if no drinks are found", async () => {
    // Mock the response for no drinks found
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ drinks: null }),
    });

    const cocktails = await searchCocktails("nonexistentcocktail");

    // Check that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=nonexistentcocktail"
    );
    // Check that the result is an empty array
    expect(cocktails).toEqual([]);
  });
});
