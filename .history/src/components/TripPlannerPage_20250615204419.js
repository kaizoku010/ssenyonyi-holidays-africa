import React, { useState } from 'react';
import './TripPlannerPage.css';
import destinationsData from './_tripPlannerDestinations';
import packagesData from './_tripPlannerPackages';

const TripPlannerPage = () => {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [tripName, setTripName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDestinationChange = (id) => {
    setSelectedDestinations((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="inquiries-page">
      <header className="inquiries-header">
        <h1>Custom Trip Planner</h1>
        <p>Create your own adventure by selecting destinations and packages tailored to your interests.</p>
      </header>
      <main className="inquiries-main">
        {submitted ? (
          <div className="inquiries-confirmation">
            <h2>Trip Created!</h2>
            <p>Your custom trip "{tripName}" has been planned with {selectedDestinations.length} destination(s) and the "{selectedPackage}" package.</p>
          </div>
        ) : (
          <form className="inquiries-form" onSubmit={handleSubmit}>
            <label className="trip-label">
              Trip Name
              <input
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                required
                className="trip-input"
                placeholder="e.g. My Uganda Adventure"
              />
            </label>
            <div className="trip-section">
              <h3>Select Destinations</h3>
              <div className="trip-options">
                {destinationsData.map((dest) => (
                  <label key={dest.id} className="trip-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedDestinations.includes(dest.id)}
                      onChange={() => handleDestinationChange(dest.id)}
                    />
                    {dest.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="trip-section">
              <h3>Select Package</h3>
              <div className="trip-options">
                {packagesData.map((pkg) => (
                  <label key={pkg.id} className="trip-radio-label">
                    <input
                      type="radio"
                      name="package"
                      value={pkg.title}
                      checked={selectedPackage === pkg.title}
                      onChange={handlePackageChange}
                      required
                    />
                    {pkg.title}
                  </label>
                ))}
              </div>
            </div>
            <button className="trip-submit-btn" type="submit" disabled={!tripName || !selectedPackage || selectedDestinations.length === 0}>
              Create Trip
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default TripPlannerPage;
