import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '12px 20px',
    background: '#0b3d91',
    color: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  };

  const brand = { fontWeight: 700, fontSize: '18px' };
  const linkStyle = { color: '#fff', textDecoration: 'none', fontWeight: 600 };

  return (
    <nav style={navStyle}>
      <div style={brand}>My Company</div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '14px' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
