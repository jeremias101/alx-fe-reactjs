import React from 'react';

function UserProfile(props) {
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
        {props.name}
      </h2>
      <p
        style={{
          fontSize: '18px',
          marginBottom: '8px',
        }}
      >
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p
        style={{
          fontSize: '16px',
          color: '#333',
          lineHeight: '1.5',
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
