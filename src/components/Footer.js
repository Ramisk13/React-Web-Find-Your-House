import React from 'react';

const FooterBottom = () => {
  return (
    <footer style={styles.footer}>
      {/* Contact Information */}
      <div style={styles.footerContent}>
        {/* Contact Details */}
        <div style={styles.contactDetails}>
          <p>
            <strong>Phone:</strong> 1-800-700-6200
          </p>
          <p>
            <strong>Email:</strong> info@demolink.org
          </p>
          <p>
            <strong>Address:</strong> 3015 Grand Ave, Coconut Grove, Merrick
            Way, FL 12345
          </p>
        </div>
      </div>

      {/* Separator */}
      <div style={styles.separator}></div>

      {/* Copyright Section */}
      <div style={styles.copyright}>
        <p>
          © 2024 Real Estate. All Rights Reserved.{' '}
          <a href="#" style={styles.privacyLink}>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#333', // Dark footer background
    color: '#fff', // White text color
    padding: '30px 20px',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px', // Space below the contact details
  },
  contactDetails: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#ddd', // Slightly lighter text color for contrast
  },
  separator: {
    height: '1px',
    width: '80%',
    backgroundColor: '#555', // Subtle separator line
    margin: '20px auto', // Centered with vertical spacing
  },
  copyright: {
    fontSize: '14px',
    color: '#fff',
  },
  privacyLink: {
    color: '#007bff', // Blue link color
    textDecoration: 'none',
  },
};

export default FooterBottom;
