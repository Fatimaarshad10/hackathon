// src/pages/PatientDashboard.js
import React from 'react';
import './PatientDashboard.css'; // CSS file for styling

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard-container">
      <h1 className="patient-dashboard-title">Patient Dashboard</h1>
      <p className="patient-dashboard-description">
        Welcome to your dashboard! Here you can manage your appointments and view your medical history.
      </p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <p>No upcoming appointments scheduled.</p>
          <button className="dashboard-button">Book Appointment</button>
        </div>
        <div className="dashboard-card">
          <h3>Medical History</h3>
          <p>Your past medical history is available here.</p>
          <button className="dashboard-button">View History</button>
        </div>
        <div className="dashboard-card">
          <h3>Profile Settings</h3>
          <p>Manage your profile and account settings.</p>
          <button className="dashboard-button">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
