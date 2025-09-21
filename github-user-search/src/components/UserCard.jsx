import React from 'react';

export default function UserCard({ user }) {
  if (!user) return null;
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      background: '#111122',
      padding: '1rem',
      borderRadius: '12px',
      marginBottom: '1rem'
    }}>
      <img src={user.avatar_url} alt={`${user.login} avatar`} style={{ width: 72, height: 72, borderRadius: 8 }} />
      <div>
        <h3 style={{ margin: 0, color: '#00ffe1' }}>{user.name || user.login}</h3>
        <p style={{ margin: '0.25rem 0' }}>{user.location ? user.location : ''}</p>
        <p style={{ margin: 0 }}>
          <a href={user.html_url} target="_blank" rel="noreferrer" style={{ color: '#7f5af0' }}>
            View on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
