import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to email via Formspree (or similar service)
    const response = await fetch('https://formspree.io/f/xwkgyyqg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        days: form.days,
        people: form.people,
        message: form.message,
        package: form.package
      })
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('There was an error sending your inquiry. Please try again later.');
    }
  };

  const isValid = form.name && form.email && form.days && form.people && form.message;

  return (
    <div className="trip-planner-page">
      <header className="trip-planner-header">
        <button className="trip-back-btn" onClick={() => navigate('/')}>{'< Back to Home'}</button>
        <h1>Trip Inq</h1>
        <p>Plan your adventure. Fill in your details and preferences below.</p>
      </header>
      <main className="trip-planner-main">
        {submitted ? (
          <div className="trip-planner-confirmation">
            <h2>Trip Inquiry Sent!</h2>
            <p>Thank you, {form.name}. We'll contact you at {form.email} soon.</p>
          </div>
        ) : (
          <form className="trip-planner-form" onSubmit={handleSubmit}>
            <label className="trip-label">
              Name <span className="required">*</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="trip-input"
                placeholder="Your Name"
                aria-required="true"
              />
            </label>
            <label className="trip-label">
              Email <span className="required">*</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="trip-input"
                placeholder="you@email.com"
                aria-required="true"
              />
            </label>
            <label className="trip-label">
              Number of Days <span className="required">*</span>
              <input
                type="number"
                name="days"
                value={form.days}
                onChange={handleChange}
                required
                min="1"
                className="trip-input"
                placeholder="e.g. 7"
                aria-required="true"
              />
            </label>
            <label className="trip-label">
              Number of People Travelling <span className="required">*</span>
              <input
                type="number"
                name="people"
                value={form.people}
                onChange={handleChange}
                required
                min="1"
                className="trip-input"
                placeholder="e.g. 2"
                aria-required="true"
              />
            </label>
            <label className="trip-label">
              Message <span className="required">*</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="trip-input"
                placeholder="Tell us about your trip, preferences, or questions..."
                rows={4}
                aria-required="true"
              />
            </label>
            <div className="trip-section">
              <h3>Choose a Package <span style={{fontWeight:400, color:'#64748b'}}>(optional)</span></h3>
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
