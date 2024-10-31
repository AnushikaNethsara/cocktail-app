import { useState } from "react";
import { searchCocktails } from "../../utils/fetchCocktails";

export default function Search({ onSearch, setLoading }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a cocktail name to search.");
      return;
    }

    setLoading(true);
    const drinks = await searchCocktails(query);
    onSearch(drinks);
    setLoading(false);
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a cocktail"
        className="max-w-[165px] md:max-w-none rounded-l-lg py-2 px-4 border-t border-l border-b border-gray-800 
                   active:border-gray-950 focus:outline-none focus:border-gray-950"
      />
      <button
        onClick={handleSearch}
        className="bg-gray-700 text-white rounded-r-lg py-2 border-2 border-b border-gray-700 px-4 font-medium cursor-pointer 
                   hover:bg-gray-900 active:bg-black active:font-semibold hover:border-gray-900 transition duration-200"
      >
        Search
      </button>
    </div>
  );
}
