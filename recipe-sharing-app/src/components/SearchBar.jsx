// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default SearchBar;
