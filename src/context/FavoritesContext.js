"use client";
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (cocktail) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.some((c) => c.idDrink === cocktail.idDrink)) {
        return [...prevFavourites, cocktail];
      }
      return prevFavourites;
    });
  };

  const removeFromFavourites = (cocktailId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((c) => c.idDrink !== cocktailId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
