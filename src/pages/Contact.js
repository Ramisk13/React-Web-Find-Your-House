import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Contact Us</h1>
      </section>

      {/* Middle Section: Contact Details & Form */}
      <section style={styles.middleSection}>
        {/* Left: Contact Details */}
        <div style={styles.contactDetails}>
          <h2 style={styles.contactHeading}>Contact Details</h2>
          <p style={styles.contactDescription}>
            If you have any questions, just fill in the contact form, and we
            will answer you shortly. If you are living nearby, come visit our
            office.
          </p>
          <div style={styles.contactItem}>
            <h3 style={styles.contactItemTitle}>Client Support:</h3>
            <p style={styles.contactItemText}>1-800-1234-567</p>
          </div>
          <div style={styles.contactItem}>
            <h3 style={styles.contactItemTitle}>E-mail:</h3>
            <p style={styles.contactItemText}>info@demolink.org</p>
          </div>
          <div style={styles.contactItem}>
            <h3 style={styles.contactItemTitle}>Main Office:</h3>
            <p style={styles.contactItemText}>
              3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div style={styles.contactForm}>
          <h2 style={styles.formHeading}>Get in Touch</h2>
          <form style={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              style={styles.input}
            />
            <textarea
              placeholder="Message"
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509019!2d-122.41941548509222!3d37.77492967975851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581dcd705c7b1%3A0x7a045e8c59a5b9f1!2sCivic%20Center%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2s!4v1616599256984!5m2!1sen!2s"
          style={styles.map}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  heroSection: {
    backgroundImage: `url(${require('../assets/images/furniture1.jpg')})`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    padding: '80px 20px',
    color: '#fff',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color:'white',
  },
  middleSection: {
    display: 'flex',
    justifyContent: 'space-between', // Space evenly between the two blocks
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '50px 20px',
    backgroundColor: '#f4f4f4', // Light grey background
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto', // Center the section
  },
  contactDetails: {
    flex: '1',
    maxWidth: '480px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
  },
  contactHeading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  contactDescription: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '20px',
  },
  contactItem: {
    marginBottom: '20px',
  },
  contactItemTitle: {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
  contactItemText: {
    fontSize: '14px',
    color: '#555',
    marginLeft: '10px',
  },
  contactForm: {
    flex: '1',
    maxWidth: '480px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  formHeading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    width: '90%',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    width: '90%',
    height: '100px',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  mapSection: {
    padding: '30px 20px',
    backgroundColor: '#f4f4f4', // Match the background of the middle section
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '400px',
    border: 'none',
    borderRadius: '8px',
  },
};

export default ContactUs;
