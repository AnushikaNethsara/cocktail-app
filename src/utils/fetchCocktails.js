export const fetchRandomCocktails = async () => {
  const promises = Array.from({ length: 5 }, () =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/random.php`)
      .then((res) => res.json())
      .then((data) => data.drinks[0])
  );

  return Promise.all(promises);
};

export const searchCocktails = async (query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search.php?s=${query}`
  );
  const data = await response.json();
  return data.drinks || [];
};
