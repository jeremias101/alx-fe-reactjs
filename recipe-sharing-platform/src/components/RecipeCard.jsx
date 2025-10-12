import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 sm:h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{recipe.summary}</p>
        </div>
      </Link>
    </article>
  );
}
