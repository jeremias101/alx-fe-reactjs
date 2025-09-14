// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    const ok = window.confirm('Delete this recipe?');
    if (!ok) return;
    deleteRecipe(recipeId);
    if (typeof onDeleted === 'function') onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: '#d9534f', border: 'none', padding: '6px 10px', borderRadius: 4, cursor: 'pointer' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
