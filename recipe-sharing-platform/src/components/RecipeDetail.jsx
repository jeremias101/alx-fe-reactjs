import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = new URL('../data.json', import.meta.url);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load recipes');
        return res.json();
      })
      .then((data) => {
        const found = data.find((r) => String(r.id) === String(id));
        setRecipe(found || null);
      })
      .catch((err) => {
        console.error(err);
        setRecipe(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="py-20 text-center text-gray-500">Loading recipe…</div>;
  }

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-md shadow p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          ← Back to Recipes
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow p-6 md:flex md:gap-6">
        {/* Image */}
        <div className="md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-56 md:h-64 object-cover rounded"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="md:flex-1">
          <header className="mb-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              {recipe.title}
            </h1>
            {recipe.summary && (
              <p className="mt-2 text-gray-600">{recipe.summary}</p>
            )}
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <section className="bg-gray-50 rounded-md p-4">
              <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
              {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i} className="py-1">
                      {ing}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No ingredients listed.</p>
              )}
            </section>

            {/* Instructions */}
            <section className="bg-gray-50 rounded-md p-4">
              <h2 className="text-lg font-semibold mb-2">Instructions</h2>
              {recipe.instructions ? (
                Array.isArray(recipe.instructions) ? (
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    {recipe.instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
                )
              ) : (
                <p className="text-gray-600">No instructions provided.</p>
              )}
            </section>
          </div>

          {/* Optional meta / actions */}
          <footer className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-500">Recipe ID: {recipe.id}</div>
            <div>
              <Link
                to="/add"
                className="text-sm px-3 py-1 border rounded hover:bg-gray-100 transition"
              >
                Add a Recipe
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
