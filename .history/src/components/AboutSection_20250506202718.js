import React, { useState } from 'react';
import '../styles/AboutSection.css';
import kitandra from '../media/kitandra.jpg';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import AboutUsPage from './AboutUsPage';

const AboutSection = () => {
  const [showAboutUsPage, setShowAboutUsPage] = useState(false);

  const handleLearnMoreClick = () => {
    setShowAboutUsPage(true);
  };

  const handleCloseAboutUsPage = () => {
    setShowAboutUsPage(false);
  };

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
              From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives
              in Murchison Falls to Rwanda's golden savannahs of Akagera National Park, we connect discerning travelers
              to the true heart of Africa with conservation-first tourism at our core.
            </p>
          </div>
          <div className="about-features">
            <Card className="feature">
              <CardContent className="p-4 flex items-center">
                <i className="fas fa-leaf text-primary mr-3"></i>
                <span>Conservation-Focused</span>
              </CardContent>
            </Card>
            <Card className="feature">
              <CardContent className="p-4 flex items-center">
                <i className="fas fa-users text-primary mr-3"></i>
                <span>Community Support</span>
              </CardContent>
            </Card>
            <Card className="feature">
              <CardContent className="p-4 flex items-center">
                <i className="fas fa-globe-africa text-primary mr-3"></i>
                <span>Authentic Experiences</span>
              </CardContent>
            </Card>
          </div>
          <Button className="about-button" onClick={handleLearnMoreClick}>Learn More</Button>
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

      {showAboutUsPage && <AboutUsPage onClose={handleCloseAboutUsPage} />}
    </section>
  );
};

export default AboutSection;
