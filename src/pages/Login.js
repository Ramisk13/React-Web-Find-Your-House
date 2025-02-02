import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
 
      navigate("/", { state: { user: { email: email, password: password } } });
    
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Log In</h2>
      <form onSubmit={handleLogin} style={styles.form}>
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
        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            id="rememberMe"
            style={styles.checkbox}
          />
          <label htmlFor="rememberMe" style={styles.checkboxLabel}>
            Remember Me
          </label>
        </div>
        <button type="submit" style={styles.button}>Log In</button>
      </form>


      <div style={styles.registerLinkContainer}>
        <p style={styles.registerText}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.registerLink}>Register here</Link>
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
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    color: '#333',
  },
  button: {
    padding: '10px 0',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  registerLinkContainer: {
    marginTop: '10px',
    textAlign: 'center',
  },
  registerText: {
    color: '#333',
  },
  registerLink: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Login;
