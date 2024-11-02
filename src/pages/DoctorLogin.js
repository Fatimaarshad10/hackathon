// src/pages/DoctorLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import your Firebase auth
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To store error messages
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider(); // Initialize Google Auth provider

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Firebase authentication
      navigate('/doctor-dashboard'); // Redirect to Doctor Dashboard
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Firebase Google authentication
      navigate('/doctor-dashboard'); // Redirect to Doctor Dashboard
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Doctor Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button"onClick={handleGoogleLogin}>sign up with Google</button>
      </form>
     
      <div className="login-footer">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default DoctorLogin;
