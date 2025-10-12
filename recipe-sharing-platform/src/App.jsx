export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-600">
        Tailwind is working ✅ — Recipe Sharing Platform
      </h1>
    </div>
  )
}


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import RecipeForm from './components/RecipeForm';

const seed = [
  { id: 1, title: 'Pancakes', description: 'Fluffy pancakes', ingredients: ['Flour','Milk','Eggs'], instructions: 'Mix and fry.' },
  { id: 2, title: 'Tomato Pasta', description: 'Easy pasta', ingredients: ['Pasta','Tomato'], instructions: 'Cook pasta and add sauce.'}
];

export default function App() {
  const [recipes, setRecipes] = useState(seed);

  function addRecipe(r) {
    setRecipes(prev => [r, ...prev]);
  }

  return (
    <BrowserRouter>
      <header className="p-4 bg-white shadow">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">RecipeShare</Link>
          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/add">Add</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="/add" element={<RecipeForm onAdd={addRecipe} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
