// src/pages/Login.js
import React from 'react';
import './Login.css'; // Ensure to import the CSS for styling

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Patient Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-footer">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
