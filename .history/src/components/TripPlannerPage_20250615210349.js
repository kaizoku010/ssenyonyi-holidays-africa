import React, { useState } from 'react';
import './TripPlannerPage.css';
import packagesData from './_tripPlannerPackages';

const TripPlannerPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    days: '',
    people: '',
    message: '',
    package: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isValid = form.name && form.email && form.days && form.people && form.message;

  return (
    <div className="inquiries-page">
      <header className="inquiries-header">
        <h1>Custom Trip Planner</h1>
        <p>Plan your adventure. Fill in your details and preferences below.</p>
      </header>
      <main className="inquiries-main">
        {submitted ? (
          <div className="inquiries-confirmation">
            <h2>Trip Inquiry Sent!</h2>
            <p>Thank you, {form.name}. We'll contact you at {form.email} soon.</p>
          </div>
        ) : (
          <form className="inquiries-form" onSubmit={handleSubmit}>
            <label className="trip-label">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="trip-input"
                placeholder="Your Name"
              />
            </label>
            <label className="trip-label">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="trip-input"
                placeholder="you@email.com"
              />
            </label>
            <label className="trip-label">
              Number of Days
              <input
                type="number"
                name="days"
                value={form.days}
                onChange={handleChange}
                required
                min="1"
                className="trip-input"
                placeholder="e.g. 7"
              />
            </label>
            <label className="trip-label">
              Number of People Travelling
              <input
                type="number"
                name="people"
                value={form.people}
                onChange={handleChange}
                required
                min="1"
                className="trip-input"
                placeholder="e.g. 2"
              />
            </label>
            <label className="trip-label">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="trip-input"
                placeholder="Tell us about your dream trip, preferences, or questions..."
                rows={4}
              />
            </label>
            <div className="trip-section">
              <h3>Choose a Package (optional)</h3>
              <div className="trip-options">
                {packagesData.map((pkg) => (
                  <label key={pkg.id} className="trip-radio-label">
                    <input
                      type="radio"
                      name="package"
                      value={pkg.title}
                      checked={form.package === pkg.title}
                      onChange={handleChange}
                    />
                    {pkg.title}
                  </label>
                ))}
              </div>
            </div>
            <button className="trip-submit-btn" type="submit" disabled={!isValid}>
              Send Inquiry
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default TripPlannerPage;
