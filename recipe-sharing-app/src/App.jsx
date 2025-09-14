// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { useRecipeStore } from './stores/recipeStore';

export default function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    // seed sample data only if none exist
    setRecipes((prev) => {
      // if localStorage already had recipes, don't overwrite
      // Because our store reads localStorage on init, check current value:
      const existing = JSON.parse(localStorage.getItem('recipes_v1') || '[]');
      if (existing.length > 0) return existing;
      const seed = [
        { id: Date.now(), title: 'Spaghetti Bolognese', description: 'Classic pasta with rich meat sauce.' },
        { id: Date.now() + 1, title: 'Fluffy Pancakes', description: 'Sweet breakfast pancakes with syrup.' },
      ];
      localStorage.setItem('recipes_v1', JSON.stringify(seed));
      return seed;
    });
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1 style={{ margin: 0 }}>Recipe Sharing</h1>
        <nav>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <hr />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}
