"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/atoms/Hero";
import CocktailList from "@/components/organisms/CocktailList";
import { fetchRandomCocktails } from "../utils/fetchCocktails";
import { useFavorites } from "@/context/FavoritesContext";
import LoadingSkeletons from "@/components/molecules/LoadingSkeletons";

export default function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToFavourites } = useFavorites();

  const getRandomCocktails = async () => {
    setLoading(true);
    const fetchedCocktails = await fetchRandomCocktails();
    setCocktails(fetchedCocktails);
    setLoading(false);
  };

  useEffect(() => {
    getRandomCocktails();
  }, []);

  return (
    <div>
      <Hero />
      <div className="p-4">
        <h1 className="text-2xl sm:text-4xl uppercase font-sans mt-20 font-bold text-center ">
          Cocktails
        </h1>
        <div className="flex items-center justify-center py-4 ">
          <button
            className="mt-4 bg-[#d142f5] text-white text-center rounded-lg py-3 px-4 font-medium max-w-[200px] cursor-pointer hover:bg-purple-600 active:bg-purple-700"
            onClick={getRandomCocktails}
          >
            Refresh
          </button>
        </div>
        {loading ? (
          <LoadingSkeletons numberofCards={5} />
        ) : (
          <div className=" !max-w-[1000px] mx-auto">
            <CocktailList cocktails={cocktails} onAdd={addToFavourites} />
          </div>
        )}
      </div>
    </div>
  );
}
