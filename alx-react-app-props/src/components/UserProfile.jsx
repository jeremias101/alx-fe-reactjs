import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'; // adjust the path if needed

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        backgroundColor: '#f0f8ff',
        maxWidth: '400px',
      }}
    >
      <h2
        style={{
          color: '#1e90ff',
          fontSize: '24px',
          marginBottom: '10px',
        }}
      >
        {user.name}
      </h2>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '8px',
        }}
      >
        Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span>
      </p>
      <p
        style={{
          fontSize: '
