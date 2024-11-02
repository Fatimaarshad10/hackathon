// src/pages/DoctorDashboard.js
import React from 'react';
import './DoctorDashboard.css'; // CSS file for styling

const DoctorDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Doctor Dashboard</h1>
      <p className="dashboard-description">
        Welcome to your dashboard! Here you can manage your appointments and view patient details.
      </p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>View Appointments</h3>
          <p>Check your upcoming and past appointments.</p>
          <button className="dashboard-button">View</button>
        </div>
        <div className="dashboard-card">
          <h3>Manage Patients</h3>
          <p>View and manage patient information.</p>
          <button className="dashboard-button">Manage</button>
        </div>
        <div className="dashboard-card">
          <h3>Update Profile</h3>
          <p>Update your personal and professional details.</p>
          <button className="dashboard-button">Update</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
