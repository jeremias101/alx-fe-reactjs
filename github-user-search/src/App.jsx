import React from 'react';
import Search from './components/Search';

export default function App() {
  return (
    <div className="app-root" style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e3e3e3', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ color: '#7f5af0' }}>GitHub User Search</h1>
        <p>Search GitHub users by username or use advanced filters (location, min repos).</p>
      </header>

      <main style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Search />
      </main>
    </div>
  );
}
