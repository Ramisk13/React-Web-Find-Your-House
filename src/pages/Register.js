import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    navigate("/", { state: { user: { email: email, password: password } } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>

      <div style={styles.loginLinkContainer}>
        <p style={styles.loginText}>
          Already have an account?{' '}
          <Link to="/login" style={styles.loginLink}>Log in here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f8ff',
  },
  title: {
    color: '#007bff',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
    padding: '5rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #007bff',
    outline: 'none',
  },
  button: {
    padding: '10px 0',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
  loginLinkContainer: {
    marginTop: '10px',
    textAlign: 'center',
  },
  loginText: {
    color: '#333',
  },
  loginLink: {
    color: '#007bff', 
    textDecoration: 'none',
  },
};

export default Register;
