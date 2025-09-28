import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-sky-600 mb-3">Tailwind + Vite + React</h1>
        <p className="text-sm text-gray-700">If you see this styled box, Tailwind is working.</p>
        <button className="mt-6 inline-block bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700">
          Success
        </button>
      </div>
    </div>
  );
}
