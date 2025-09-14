// src/App.jsx
import React, { useEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './stores/recipeStore';

export default function App() {
  // get the setRecipes action from the store
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  // initialize with some sample recipes on first render
  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Spaghetti Bolognese', description: 'Classic pasta with rich meat sauce.' },
      { id: 2, title: 'Fluffy Pancakes', description: 'Sweet breakfast pancakes with syrup.' },
    ]);
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}
