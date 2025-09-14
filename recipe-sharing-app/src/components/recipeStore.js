// src/stores/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  // add a single recipe (keeps existing ones)
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  // replace the whole list (useful for init)
  setRecipes: (recipes) => set({ recipes }),
}));
