import React from 'react';

function UserProfile(props) {
  return (
    <div
      style={{
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '400px',
        backgroundColor: '#f0f8ff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        style={{
          color: '#1e90ff',
          fontSize: '26px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        {props.name}
      </h2>
      <p
        style={{
          fontSize: '18px',
          color: '#333',
          marginBottom: '8px',
        }}
      >
        Age: <span style={{ fontWeight: 'bold', color: '#000' }}>{props.age}</span>
      </p>
      <p
        style={{
          fontSize: '16px',
          color: '#555',
          lineHeight: '1.5',
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
