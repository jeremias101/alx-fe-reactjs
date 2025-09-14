// src/stores/recipeStore.js
import create from 'zustand';

const PERSIST_KEY = 'recipes_v1';

export const useRecipeStore = create((set, get) => ({
  recipes: JSON.parse(localStorage.getItem(PERSIST_KEY) || '[]'),

  addRecipe: (newRecipe) =>
    set((state) => {
      const next = [...state.recipes, newRecipe];
      localStorage.setItem(PERSIST_KEY, JSON.stringify(next));
      return { recipes: next };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const next = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      );
      localStorage.setItem(PERSIST_KEY, JSON.stringify(next));
      return { recipes: next };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const next = state.recipes.filter((r) => r.id !== id);
      localStorage.setItem(PERSIST_KEY, JSON.stringify(next));
      return { recipes: next };
    }),

  setRecipes: (recipes) => {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(recipes));
    set({ recipes });
  },
}));
