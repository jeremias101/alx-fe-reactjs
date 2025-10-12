import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="font-semibold text-lg">{recipe.title}</h4>
      <p className="text-sm text-gray-500">{recipe.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
          View
        </Link>
      </div>
    </div>
  );
}
