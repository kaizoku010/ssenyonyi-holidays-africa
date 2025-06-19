import React from 'react';
import './TripPlannerPage.css';

const TripPlannerPage = () => {
  return (
    <div className="inquiries-page">
      <header className="inquiries-header">
        <h1>Custom Trip Planner</h1>
        <p>Create your own adventure by selecting destinations and packages tailored to your interests.</p>
      </header>
      <main className="inquiries-main">
        {/* TODO: Add trip planning form and logic here */}
        <div className="inquiries-form-placeholder">
          <p>Start by choosing your destinations and preferred packages.</p>
        </div>
      </main>
    </div>
  );
};

export default TripPlannerPage;
