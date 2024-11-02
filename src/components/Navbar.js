// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import your Firebase auth
import { signOut } from 'firebase/auth'; // Import the signOut function
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate('/'); // Redirect to Home after signing out
    } catch (error) {
      console.error('Error signing out: ', error); // Log any errors
    }
  };

  return (
    <div className="navbar">
      <h1>Doctor's Appointment System</h1>
      <div>
        <Link to="/" className="navbar-button">Home</Link>
        <Link to="/doctor-login" className="navbar-button">Sign up with Doctor</Link>
        <Link to="/patient-login" className="navbar-button">Sign up with Patient</Link>
        <button className="navbar-button " onClick={handleSignOut}>Sign Out</button> {/* Sign Out button */}
      </div>
    </div>
  );
};

export default Navbar;
