// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill title and description');
      return;
    }
    updateRecipe({ id: recipeId, title: title.trim(), description: description.trim() });
    navigate(`/recipes/${recipeId}`);
  };

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ padding: 8 }} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Description" style={{ padding: 8 }} />
      <div>
        <button type="submit" style={{ marginRight: 8 }}>Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
