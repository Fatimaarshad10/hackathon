// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Doctor's Appointment System</h1>
      <p className="home-intro">
        Our platform simplifies the process of scheduling and managing doctor's appointments, enhancing your healthcare experience.
      </p>
      <div className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Easy appointment booking and management</li>
          <li>View available doctors and their schedules</li>
          <li>Receive reminders for upcoming appointments</li>
        </ul>
      </div>
      <div className="cta">
        <h2>Get Started Today!</h2>
        <p>Sign up now to experience hassle-free appointments.</p>
        <button className="cta-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
