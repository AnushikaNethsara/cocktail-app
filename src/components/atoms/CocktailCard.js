import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CocktailCard = ({
  cocktail,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
}) => {
  const handleFavouriteClick = () => {
    if (isFavourite) {
      removeFromFavourites(cocktail.idDrink);
    } else {
      addToFavourites(cocktail);
    }
  };

  return (
    <div key={cocktail.idDrink} className="border p-4 rounded">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full h-64 object-cover mb-2"
      />
      <div className="flex justify-between items-center px-1">
        <div>
          <h2 className="text-lg font-semibold">{cocktail.strDrink}</h2>
          <p className="text-sm">{cocktail.strCategory}</p>
        </div>
        <div onClick={handleFavouriteClick} className="cursor-pointer">
          {isFavourite ? (
            <FaHeart className="text-red-500 text-3xl" />
          ) : (
            <FaRegHeart className="text-red-500 text-3xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
