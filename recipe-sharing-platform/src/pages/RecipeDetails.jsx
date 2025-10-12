import React from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetail({recipes}) {
  const { id } = useParams();
  const recipe = recipes?.find(r => String(r.id) === id);

  if (!recipe) return <div className="p-6">Recipe not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4 text-gray-600">{recipe.description}</p>
      <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}
