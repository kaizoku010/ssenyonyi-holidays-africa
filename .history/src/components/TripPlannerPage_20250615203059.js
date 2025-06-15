import React from 'react';
import './TripPlannerPage.css';

const TripPlannerPage = () => {
  return (
    <div className="trip-planner-page">
      <header className="trip-planner-header">
        <h1>Custom Trip Planner</h1>
        <p>Create your own adventure by selecting destinations and packages tailored to your interests.</p>
      </header>
      <main className="trip-planner-main">
        {/* TODO: Add trip planning form and logic here */}
        <div className="trip-planner-form-placeholder">
          <p>Start by choosing your destinations and preferred packages.</p>
        </div>
      </main>
    </div>
  );
};

export default TripPlannerPage;
