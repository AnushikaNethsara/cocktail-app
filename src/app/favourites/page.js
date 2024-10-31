"use client";
import CocktailList from "../../components/organisms/CocktailList";
import { useFavorites } from "../../context/FavoritesContext";

export default function Favorites() {
  const { favourites, removeFromFavourites } = useFavorites();

  return (
    <div>
      <div
        className="relative h-[40vh] bg-cover bg-center "
        style={{ backgroundImage: "url('cocktail-frame-image.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center pl-8 h-full">
          <h1 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-4xl md:text-6xl font-bold max-w-[800px]">
            Favorites
          </h1>
          <p className="text-white text-lg md:text-xl mt-7">
            Shake up your night with the perfect cocktail!
          </p>
        </div>
      </div>

      <div className="mb-20">
        {favourites.length > 0 ? (
          <div className=" p-4 py-20 !max-w-[1000px] mx-auto">
            <CocktailList
              cocktails={favourites}
              onRemove={removeFromFavourites}
            />
          </div>
        ) : (
          <p className=" text-center mt-20 mb-[50vh]">
            No favourites added yet.
          </p>
        )}
      </div>
    </div>
  );
}
