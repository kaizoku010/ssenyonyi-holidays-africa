import React from 'react';
import './TripPlannerModal.css';

const TripPlannerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="inquiries-modal-overlay">
      <div className="inquiries-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Custom Trip Planner</h2>
        {/* TODO: Add trip planning form here */}
        <div className="inquiries-content">
          <p>Select destinations, dates, and packages to create your custom trip.</p>
          {/* Placeholder for dynamic form */}
        </div>
      </div>
    </div>
  );
};

export default TripPlannerModal;
