import React from 'react';
import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
    >
      {isFavorite ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
