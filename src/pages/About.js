import React from 'react';
import meetingRoom from '../assets/images/MeetingRoom.jpg';
import ceo from '../assets/images/CEO.jpg';
import manager from '../assets/images/manager.jpg';
import consultant from '../assets/images/consultant.jpg';
import agent from '../assets/images/agent.jpg'
import AboutUsFooter from '../components/AboutUsFooter';

const AboutUs = () => {
  return (
    <><div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Us</h1>
          <p style={styles.breadcrumb}>Home / About Us</p>
        </div>
      </section>

      {/* Welcome Section */}
      <section style={styles.welcomeSection}>
        <div style={styles.content}>
          {/* Left Text Section */}
          <div style={styles.textBlock}>
            <h2 style={styles.heading}>Welcome to Our Family!</h2>
            <p style={styles.description}>
              At our company, we don't just offer services – we create lifelong connections. Since 1999,
              we've been dedicated to helping individuals and families find their perfect homes.
              Think of us as your friendly guide on this exciting journey.
            </p>
            <p style={styles.description}>
              Let us take the stress out of the process and bring the joy of homeownership closer to you.
            </p>
            <button style={styles.button}>Let's Connect!</button>
          </div>

          {/* Right Image Section */}
          <div style={styles.imageBlock}>
            <img
              src={meetingRoom} 
              alt="Friendly team"
              style={styles.image} />
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section style={styles.valuesSection}>
        <div style={styles.valuesContent}>
          <div style={styles.value}>
            <h3 style={styles.valueTitle}>Integrity</h3>
            <p style={styles.valueDescription}>
              We uphold the highest standards of integrity in every project we undertake.
            </p>
          </div>
          <div style={styles.value}>
            <h3 style={styles.valueTitle}>Commitment</h3>
            <p style={styles.valueDescription}>
              We are committed to meeting our clients' goals with professionalism and excellence.
            </p>
          </div>
          <div style={styles.value}>
            <h3 style={styles.valueTitle}>Innovation</h3>
            <p style={styles.valueDescription}>
              We constantly innovate to provide solutions that make the real estate process seamless.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section style={styles.teamSection}>
        <h2 style={styles.teamHeading}>Meet the Team</h2>
        <div style={styles.teamContent}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <img src={member.image} alt={member.name} style={styles.teamImage} />
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div><AboutUsFooter /></>
    
  );
};


const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: ceo},
  { name: 'Jane Smith', role: 'Manager', image: manager },
  { name: 'Alice Brown', role: 'Agent', image: agent },
  { name: 'Michael White', role: 'Consultant', image: consultant },
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  heroSection: {
    backgroundImage: `url(${require('../assets/images/furniture3.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    color: 'white', 
  },
  
  heroContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '20px',
    borderRadius: '10px',
  },
  
  heroTitle: {
    fontSize: '36px',
    margin: '0 0 10px',
    fontWeight: 'bold',
    color:'white'
  },
  
  breadcrumb: {
    fontSize: '14px',
    margin: '0',
    color:'white'
  },
  welcomeSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    backgroundColor: '#ffffff',
  },
  
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    gap: '20px',
    alignItems: 'center',
  },
  
  textBlock: {
    flex: 1,
    padding: '20px',
  },
  
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2c3e50', 
    marginBottom: '15px',
  },
  
  description: {
    fontSize: '16px',
    color: '#4a4a4a', 
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
  },
  
  buttonHover: {
    backgroundColor: '#0056b3', 
  },
  
  
  imageBlock: {
    flex: 1,
    textAlign: 'center',
  },
  
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  
  welcomeContent: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },

  valuesSection: {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
  },
  valuesContent: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  value: {
    textAlign: 'center',
    maxWidth: '300px',
  },
  valueTitle: {
    fontSize: '20px',
    color: '#007bff',
    marginBottom: '10px',
  },
  valueDescription: {
    fontSize: '14px',
    color: '#666',
  },
  teamSection: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  teamHeading: {
    fontSize: '28px',
    textAlign: 'center',
    color: '#333',
    marginBottom: '40px',
  },
  teamContent: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
  },
  teamMember: {
    textAlign: 'center',
    maxWidth: '200px',
  },
  teamImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  teamName: {
    fontSize: '16px',
    color: '#333',
    margin: '10px 0 5px',
  },
  teamRole: {
    fontSize: '14px',
    color: '#666',
  },
};

export default AboutUs;
