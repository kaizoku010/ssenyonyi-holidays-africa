import React from 'react';
import '../styles/AboutSection.css';
import kitandra from '../media/kitandra.jpg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">ABOUT DERIQ</h2>
          <p className="section-subtitle">The Best Travel Experience Provider</p>
          <div className="about-text">
            <p>
              At Deriq Tours, we specialize in creating unforgettable travel experiences that connect you with the world's most breathtaking destinations. Our expert guides and carefully crafted itineraries ensure you'll discover the authentic heart of each location.
            </p>
            <p>
              Whether you're seeking adventure in the mountains, relaxation on pristine beaches, or cultural immersion in historic cities, we have the perfect journey waiting for you.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <i className="fas fa-map-marked-alt"></i>
              <span>Unique Destinations</span>
            </div>
            <div className="feature">
              <i className="fas fa-user-tie"></i>
              <span>Expert Guides</span>
            </div>
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <span>Safe Travel</span>
            </div>
          </div>
          <button className="about-button">Learn More</button>
        </div>
        <div className="about-image">
          <img src={kitandra} alt="Deriq Tours Experience" />
          <div className="image-overlay">
            <div className="overlay-content">
              <h3>DISCOVER</h3>
              <p>The world with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
