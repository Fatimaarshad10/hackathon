// src/pages/PatientLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import your Firebase auth
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';

const PatientLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [error, setError] = useState(null); // To store error messages
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider(); // Initialize Google Auth provider

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Logging patient details (this can be replaced with an actual submission logic)
    console.log({ name, email, contactDetails, medicalHistory });

    navigate('/patient-dashboard'); 
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Firebase Google authentication
      navigate('/patient-dashboard'); // Redirect to Patient Dashboard
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Patient Sign Up</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactDetails">Contact Details</label>
          <input
            type="text"
            id="contactDetails"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            required
            placeholder="Enter your contact details"
          />
        </div>
        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History</label>
          <input
            type="text"
            id="medicalHistory"
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder="Enter your medical history"
          />
        </div>
        <button type="submit" className="login-button"onClick={handleGoogleLogin}>Login with Google</button>
      </form>
   
      <div className="login-footer">
        <p>Already have an account? <a href="/signup">Log In</a></p>
      </div>
    </div>
  );
};

export default PatientLogin;
