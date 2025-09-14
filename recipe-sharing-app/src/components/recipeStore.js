import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Search
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (mock logic: recommend recipes with same word in title)
  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) return { recommendations: [] };

      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );

      const keywords = favoriteRecipes
        .map((r) => r.title.split(' ')[0].toLowerCase())
        .filter(Boolean);

      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          keywords.some((kw) =>
            recipe.title.toLowerCase().includes(kw.toLowerCase())
          )
      );

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
