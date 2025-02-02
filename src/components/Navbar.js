import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {

  const location = useLocation();
  const user = location.state?.user;

  const navigate = useNavigate();

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>
          Real Estate
        </Link>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Sign In Button */}
      <div style={styles.userSection}>
        {user ? (
          <div style={styles.userInfo} onClick={() => navigate("/profile", { state: { user: user } })}>
            <span style={styles.userIcon}>👤</span>
            <span style={styles.userName}>{user.email.split("@")[0]}</span>
          </div>
        ) : (
          <button
            style={styles.signInButton}
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  logoText: {
    color: '#333',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '40px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: 'relative',
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    cursor: 'pointer'
  },
  userIcon: {
    marginRight: "10px",
    fontSize: "18px",
  },
  userName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  signInButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;
