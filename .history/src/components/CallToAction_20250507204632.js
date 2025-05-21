import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>{t('callToAction.title')}</h2>
            <p>{t('callToAction.description')}</p>
          </div>
          <div className="cta-glass-card">
            <div className="location-info">
              <div className="location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="location-details">
                <h3>{t('callToAction.locationTitle')}</h3>
                <p>{t('callToAction.locationDescription')}</p>
              </div>
            </div>
            <button className="cta-action-button">
              {t('callToAction.actionButton')}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="arrow-icon">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
