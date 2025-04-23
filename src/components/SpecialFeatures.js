import React from 'react';
import '../styles/SpecialFeatures.css';

const features = [
  {
    id: 1,
    icon: 'fas fa-map-marked-alt',
    title: 'Guided Tours',
    description: 'Expert guides lead you through the most scenic routes and hidden gems of each destination.'
  },
  {
    id: 2,
    icon: 'fas fa-camera',
    title: 'Photo Opportunities',
    description: 'Capture stunning landscapes and memorable moments with perfect photo spots throughout your journey.'
  },
  {
    id: 3,
    icon: 'fas fa-utensils',
    title: 'Culinary Experiences',
    description: 'Taste authentic local cuisine and learn about traditional food preparation techniques.'
  },
  {
    id: 4,
    icon: 'fas fa-bed',
    title: 'Premium Accommodations',
    description: 'Stay in carefully selected hotels and resorts that offer comfort and authentic local atmosphere.'
  }
];

const SpecialFeatures = () => {
  return (
    <section className="special-features">
      <div className="features-container">
        <div className="features-header">
          <div className="header-content">
            <h2>SPECIAL FEATURES</h2>
            <p>What makes our travel experiences unique</p>
          </div>
          <div className="header-highlight">
            <div className="highlight-box">
              <i className="fas fa-star"></i>
              <span>Premium Service</span>
              <p>We go above and beyond to ensure your journey is perfect from start to finish.</p>
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
