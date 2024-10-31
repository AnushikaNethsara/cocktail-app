"use client";
import { useState } from "react";
import CocktailList from "@/components/organisms/CocktailList";
import Search from "@/components/organisms/Search";
import { useFavorites } from "@/context/FavoritesContext";
import LoadingSkeletons from "@/components/molecules/LoadingSkeletons";

export default function SearchPage() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const { addToFavourites } = useFavorites();

  return (
    <div>
      <div
        className="relative h-[40vh] bg-cover bg-center "
        style={{ backgroundImage: "url('cocktail-frame-image.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center pl-8 h-full">
          <h1 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-4xl md:text-6xl font-bold max-w-[800px]">
            Search
          </h1>
          <p className="text-white text-lg md:text-xl mt-7">
            Shake up your night with the perfect cocktail!
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <Search
          onSearch={setCocktails}
          setLoading={setLoading}
          setNoResult={setNoResult}
        />{" "}
        {loading ? (
          <LoadingSkeletons numberofCards={6} />
        ) : cocktails.length === 0 && noResult ? (
          <p className="text-gray-500 text-center mt-4">
            Oops! No cocktails matched your search. Try a different name
          </p>
        ) : (
          <CocktailList cocktails={cocktails} onAdd={addToFavourites} />
        )}
      </div>
      <div className="min-h-20"></div>
    </div>
  );
}
