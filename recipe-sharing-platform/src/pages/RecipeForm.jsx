import React, { useState } from 'react';

export default function RecipeForm({onAdd}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;
    onAdd({
      id: Date.now(),
      title,
      description,
      ingredients: [],
      instructions: ''
    });
    setTitle(''); setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input className="w-full mb-2 p-2 border rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="w-full mb-2 p-2 border rounded" placeholder="Short description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Add Recipe</button>
    </form>
  );
}
