// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 12, background: '#fff', borderRadius: 8, border: '1px solid #e0e0e0' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${recipe.id}`} style={{ marginRight: 10 }}>Edit</Link>
        <DeleteRecipeButton recipeId={recipe.id} onDeleted={() => navigate('/')} />
      </div>
    </div>
  );
};

export default RecipeDetails;
