import React from 'react';
import furniture from '../assets/images/furniture2.jpg'

const AboutUsFooter = () => {
  return (
    <footer style={styles.footer}>
      {/* Subscribe Section */}
      <div style={styles.subscribeSection}>
        <div style={styles.subscribeContent}>
          <h2 style={styles.subscribeHeading}>Join Our Family!</h2>
          <p style={styles.subscribeText}>
            Stay connected! Subscribe to get updates on the latest properties, events, and special offers.
          </p>
          <form style={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button type="submit" style={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Separator */}
      <div style={styles.separator}>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          style={styles.separatorSvg}
        >
          <path
            fill="#f4f4f4"
            d="M0,192L48,170.7C96,149,192,107,288,85.3C384,64,480,64,576,74.7C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer Links Section */}
      <div style={styles.footerLinks}>
        <div style={styles.footerColumn}>
          <h3 style={styles.columnHeading}>Latest Properties</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Retail Store Southwest</strong>
              <br />
              <span style={styles.propertyPrice}>From $120/month</span>
            </li>
            <li style={styles.listItem}>
              <strong>Apartment Building with Subunits</strong>
              <br />
              <span style={styles.propertyPrice}>From $150/month</span>
            </li>
          </ul>
        </div>
        <div style={styles.footerColumn}>
          <h3 style={styles.columnHeading}>Contact Us</h3>
          <p style={styles.contactText}>
            <strong>Phone:</strong> 1-800-700-6200
            <br />
            <strong>Email:</strong> info@demolink.org
            <br />
            <strong>Address:</strong> 3015 Grand Ave, FL 12345
          </p>
        </div>
        <div style={styles.footerColumn}>
          <h3 style={styles.columnHeading}>Newsletter Signup</h3>
          <form style={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your Email"
              style={styles.input}
            />
            <button type="submit" style={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyright}>
        <p>© 2024 Real Estate. All Rights Reserved. <a href="#" style={styles.privacyLink}>Privacy Policy</a></p>
      </div>
    </footer>
  );
};

const styles = {
    footer: {
      fontFamily: 'Arial, sans-serif',
    },
    subscribeSection: {
      backgroundImage: `url(${furniture})`, // Replace with your background image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      padding: '50px 20px',
      textAlign: 'center',
    },
    subscribeContent: {
      maxWidth: '600px',
      margin: '0 auto',
    },
    subscribeHeading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subscribeText: {
      fontSize: '16px',
      marginBottom: '30px',
    },
    subscribeForm: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      width: '70%',
    },
    subscribeButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
    separator: {
      overflow: 'hidden',
    },
    separatorSvg: {
      width: '100%',
      height: 'auto',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#f4f4f4',
      padding: '30px 20px',
      textAlign: 'left',
      flexWrap: 'wrap',
    },
    footerColumn: {
      flex: 1,
      minWidth: '250px',
      margin: '10px',
    },
    columnHeading: {
      fontSize: '18px',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      fontSize: '14px',
      marginBottom: '10px',
    },
    propertyPrice: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    contactText: {
      fontSize: '14px',
      lineHeight: '1.8',
    },
    copyright: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 20px',
    },
    privacyLink: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };
  

export default AboutUsFooter;
