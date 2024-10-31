import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useFavorites } from "../../context/FavoritesContext";
import CocktailCard from "../atoms/CocktailCard";

export default function CocktailList({ cocktails }) {
  const { favourites, addToFavourites, removeFromFavourites } = useFavorites();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {cocktails.map((cocktail) => {
        const isFavourite = favourites.some(
          (fav) => fav.idDrink === cocktail.idDrink
        );

        return (
          <CocktailCard
            cocktail={cocktail}
            isFavourite={isFavourite}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        );
      })}
    </div>
  );
}
