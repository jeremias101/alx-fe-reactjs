// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — be the first to add one!</p>;
  }

  return (
    <div>
      {recipes.map((r) => (
        <article
          key={r.id}
          style={{
            border: '1px solid #e0e0e0',
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
            background: '#fff',
          }}
        >
          <h3 style={{ margin: '0 0 6px' }}>{r.title}</h3>
          <p style={{ margin: 0 }}>{r.description}</p>
        </article>
      ))}
    </div>
  );
};

export default RecipeList;
