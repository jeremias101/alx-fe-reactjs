import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = new URL('../data.json', import.meta.url);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load recipes');
        return res.json();
      })
      .then((data) => setRecipes(data))
      .catch((err) => {
        console.error(err);
        setRecipes([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Recipes
        </h1>
        <p className="text-sm text-gray-600">
          Browse, discover and share your favorite recipes.
        </p>
      </header>

      {loading ? (
        <div className="py-20 text-center text-gray-500">Loading recipes…</div>
      ) : recipes.length === 0 ? (
        <div className="py-20 text-center text-gray-500">No recipes found.</div>
      ) : (
        // ✅ Added container div below that includes hover, rounded, shadow
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-6">
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
