import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>PLAN YOUR ADVENTURE TODAY</h2>
          <p>Join thousands of travelers who have experienced the world with us</p>
          <button className="cta-button">Start Planning</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
