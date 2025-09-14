// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate(); // ✅ now included

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // ✅ navigate back to home or recipe list after deleting
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red', padding: '6px 12px' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
