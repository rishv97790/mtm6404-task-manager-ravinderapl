import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  // Update isDesktop state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inline styles
  const styles = {
    container: {
      maxWidth: isDesktop ? '600px' : '90%', // Max width for larger screens
      margin: '0 auto',
      padding: isDesktop ? '20px' : '15px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: isDesktop ? '32px' : '24px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    input: {
      padding: isDesktop ? '10px' : '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      padding: isDesktop ? '10px' : '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      height: '100px',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: isDesktop ? '16px' : '14px',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
