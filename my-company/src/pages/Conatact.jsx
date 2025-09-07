import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo behavior: show a success message and log the data
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    maxWidth: '480px',
    padding: '8px 10px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>

      {submitted && <div style={{ color: 'green', marginBottom: '10px' }}>Thanks! Your message was received.</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '120px' }}
        />
        <button type="submit" style={{
          padding: '10px 16px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          background: '#0b3d91',
          color: '#fff',
          fontWeight: 600
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
