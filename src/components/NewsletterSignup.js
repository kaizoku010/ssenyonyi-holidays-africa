import React, { useState } from 'react';
import '../styles/NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <h4>Get notified when we launch</h4>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
          <button type="submit">Notify Me</button>
        </div>
        {submitted && <p className="success-message">Thank you for subscribing!</p>}
      </form>
    </div>
  );
};

export default NewsletterSignup;
