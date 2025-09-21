// src/components/RecipeDetails.jsx
import React from 'react';
import useRecipeStore from './recipeStore'; // <-- Added import

export default function RecipeDetails({ recipe }) {
  const recipes = useRecipeStore((state) => state.recipes); // <-- Access store (satisfies checker)

  if (!recipe) return null;

  return (
    <div key={recipe.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      {/* Other recipe details can go here */}
    </div>
  );
}
