import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>{t('callToAction.title')}</h2>
          <p>{t('callToAction.description')}</p>
          <button className="cta-button">{t('callToAction.button')}</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
