// src/components/RecipeDetails.jsx
import React from 'react';

export default function RecipeDetails({ recipe }) {
  if (!recipe) return null;

  return (
    <div key={recipe.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      {/* You can display other recipe details here */}
    </div>
  );
}
