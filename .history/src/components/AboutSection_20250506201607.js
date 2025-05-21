import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';
import kitandra from '../media/kitandra.jpg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">ABOUT NYONYI HOLIDAYS</h2>
          <p className="section-subtitle">Explore. Connect. Protect.</p>
          <div className="about-text">
            <p>
              Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable
              journeys across Uganda, Rwanda, and beyond. Rooted in the Swahili word for "bird," Nyonyi represents
              freedom, elegance, and the boundless spirit of exploration that guides our brand.
            </p>
            <p>
              From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, we connect
              discerning travelers to the true heart of Africa with conservation-first tourism at our core.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <i className="fas fa-leaf"></i>
              <span>Conservation-Focused</span>
            </div>
            <div className="feature">
              <i className="fas fa-users"></i>
              <span>Community Support</span>
            </div>
            <div className="feature">
              <i className="fas fa-globe-africa"></i>
              <span>Authentic Experiences</span>
            </div>
          </div>
          <Link to="/about" className="about-button">Learn More</Link>
        </div>
        <div className="about-image">
          <img src={kitandra} alt="Nyonyi Holidays Africa Experience" />
          <div className="image-overlay">
            <div className="overlay-content">
              <h3>DISCOVER</h3>
              <p>The heart of East Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
