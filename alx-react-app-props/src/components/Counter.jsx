import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '300px',
        textAlign: 'center',
        borderRadius: '8px',
        backgroundColor: '#f0f8ff',
      }}
    >
      <h2 style={{ marginBottom: '15px', color: '#1e90ff' }}>Counter App</h2>
      <p style={{ fontSize: '20px', marginBottom: '15px' }}>Current Count: {count}</p>
      <button
        style={{ marginRight: '10px', padding: '10px 15px' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ marginRight: '10px', padding: '10px 15px' }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button style={{ padding: '10px 15px' }} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
