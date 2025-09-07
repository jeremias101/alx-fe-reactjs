import React from 'react';

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '14px 8px',
      background: '#f3f4f6',
      marginTop: '30px'
    }}>
      <small>© {new Date().getFullYear()} My Company. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
