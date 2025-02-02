import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user;

  const handleLogout = () => {
    navigate("/", { state: null });
  };

  if (!user) {
    return <p>No user data available. Please log in.</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <div style={styles.profileHeader}>
          <div style={styles.iconContainer}>
            <span style={styles.userIcon}>👤</span>
          </div>
          <h2 style={styles.userName}>{user.email.split("@")[0]}</h2>
          <p style={styles.userEmail}>{user.email}</p>
        </div>

        <div style={styles.profileBody}>
          <p style={styles.detailTitle}>Additional Details</p>
          <ul style={styles.detailList}>
            <li style={styles.detailItem}>
              <strong>Account Type:</strong> Standard User
            </li>
            <li style={styles.detailItem}>
              <strong>Joined:</strong> January 2024
            </li>
            <li style={styles.detailItem}>
              <strong>Favorite Properties:</strong> {user.favoriteCount || 0}
            </li>
          </ul>
        </div>

        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
  },
  profileCard: {
    width: "400px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
  },
  profileHeader: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "30px 20px",
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    margin: "0 auto 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userIcon: {
    fontSize: "40px",
    color: "#007bff",
  },
  userName: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  userEmail: {
    fontSize: "16px",
    color: "#dfe4ea",
  },
  profileBody: {
    padding: "20px",
  },
  detailTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  detailList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  detailItem: {
    fontSize: "16px",
    margin: "10px 0",
    color: "#555",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
    fontWeight: "bold",
    width: "100%",
    transition: "background-color 0.3s",
  },
  logoutButtonHover: {
    backgroundColor: "#b31b1b",
  },
};

export default UserProfile;
