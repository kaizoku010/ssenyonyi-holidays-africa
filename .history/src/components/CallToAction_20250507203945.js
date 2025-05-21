import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const { t } = useTranslation();
  const [country, setCountry] = useState('');

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>{t('callToAction.title')}</h2>
            <p>{t('callToAction.description')}</p>
          </div>
          <div className="cta-form">
            <div className="input-group">
              <div className="input-label">{t('callToAction.passport')}</div>
              <div className="input-container">
                <input
                  type="text"
                  placeholder={t('callToAction.countryPlaceholder')}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="country-input"
                />
                <span className="dropdown-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
