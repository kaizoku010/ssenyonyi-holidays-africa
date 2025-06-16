import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import packagesData from './_tripPlannerPackages';
import './TripPlannerPage.css';

const TripPlannerPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    days: '',
    people: '',
    date: '',
    message: '',
    package: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mldnnwgv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        days: form.days,
        people: form.people,
        message: form.message,
        package: form.package,
        date: form.date
      })
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('There was an error sending your inquiry. Please try again later.');
    }
  };

  const isValid = form.name && form.email && form.days && form.people && form.date && form.message;

  return (
    <div className="destinations-page">
      <header className="destinations-hero">
        <Navbar />
        <div className="hero-content dest-header">
          <div className="dest-header-content">
            <h1>Trip Inquiry</h1>
            <p>Write to us about your adventure. Fill in your details and preferences below.</p>
          </div>
        </div>
      </header>
      <main className="destinations-content">
        <div className="featured-destinations">
          {submitted ? (
            <div className="trip-planner-confirmation">
              <h2>Trip Inquiry Sent!</h2>
              <p>Thank you, {form.name}. We'll contact you at {form.email} soon.</p>
            </div>
          ) : (
            <form className="trip-planner-form" onSubmit={handleSubmit}>
   <div>
    
   </div>
   <div className='group-one'>
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
                  placeholder="username@email.com"
                  aria-required="true"
                />
              </label>
   </div>
           
<div className='group-two'>
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
                Trip Date/Travel Date <span className="required">*</span>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="trip-input"
                  aria-required="true"
                />
              </label>
</div>
         

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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TripPlannerPage;
