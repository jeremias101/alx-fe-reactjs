// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDesc = description.trim();
    if (!trimmedTitle || !trimmedDesc) {
      alert('Please provide both title and description');
      return;
    }
    addRecipe({ id: Date.now(), title: trimmedTitle, description: trimmedDesc });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        style={{ padding: 8, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description"
        rows={3}
        style={{ padding: 8, fontSize: 16, borderRadius: 6, border: '1px solid #ccc' }}
      />
      <div>
        <button type="submit" style={{ padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
