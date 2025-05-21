import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/SpecialFeatures.css';

const SpecialFeatures = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      icon: 'fas fa-map-marked-alt',
      title: t('homePage.features.guidedTours.title'),
      description: t('homePage.features.guidedTours.description')
    },
    {
      id: 2,
      icon: 'fas fa-camera',
      title: t('homePage.features.photoOpportunities.title'),
      description: t('homePage.features.photoOpportunities.description')
    },
    {
      id: 3,
      icon: 'fas fa-utensils',
      title: t('homePage.features.culinaryExperiences.title'),
      description: t('homePage.features.culinaryExperiences.description')
    },
    {
      id: 4,
      icon: 'fas fa-bed',
      title: t('homePage.features.premiumAccommodations.title'),
      description: t('homePage.features.premiumAccommodations.description')
    }
  ];

  return (
    <section className="special-features">
      <div className="features-container">
        <div className="features-header">
          <div className="header-content">
            <h2>{t('homePage.features.title')}</h2>
            <p>{t('homePage.features.subtitle')}</p>
          </div>
          <div className="header-highlight">
            <div className="highlight-box">
              <i className="fas fa-star"></i>
              <span>{t('homePage.features.premiumService.title')}</span>
              <p>{t('homePage.features.premiumService.description')}</p>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
