import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/AboutSection.css';
import kitandra from '../media/kitandra.jpg';

const AboutSection = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const { t } = useTranslation();

  const handleLearnMoreClick = () => {
    setShowAboutModal(true);
  };

  const handleCloseModal = () => {
    setShowAboutModal(false);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">{t('homePage.about.title')}</h2>
          <p className="section-subtitle">{t('homePage.about.subtitle')}</p>
          <div className="about-text">
            <p>
              {t('homePage.about.description1')}
            </p>
            <p>
              {t('homePage.about.description2')}
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
          <button className="about-button" onClick={handleLearnMoreClick}>Learn More</button>
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

      {showAboutModal && (
        <div className="about-modal-overlay">
          <div className="about-modal">
            <button className="close-button" onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-content">
              <h2>About Nyonyi Holidays Africa</h2>

              <div className="about-section-modal">
                <h3>Company Profile</h3>
                <p>
                  Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable
                  journeys across Uganda, Rwanda, and beyond. Rooted in the Swahili word for "bird," Nyonyi represents
                  freedom, elegance, and the boundless spirit of exploration that guides our brand. We believe travel
                  is not just about discovery—it's about stewardship.
                </p>
                <p>
                  From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives
                  in Murchison Falls to Rwanda's golden savannahs of Akagera National Park, we connect discerning travelers
                  to the true heart of Africa. Every itinerary we design prioritizes conservation-first tourism, ensuring
                  that your journey supports the protection of endangered species, preserves fragile ecosystems, and
                  empowers communities safeguarding these wild spaces.
                </p>
              </div>

              <div className="about-section-modal">
                <h3>Our Mission</h3>
                <p>
                  To design and deliver authentic African travel experiences that inspire, educate, and uplift—while
                  fostering responsible tourism that directly contributes to wildlife conservation, habitat restoration,
                  and sustainable livelihoods for local communities.
                </p>
              </div>

              <div className="about-section-modal">
                <h3>Our Vision</h3>
                <p>
                  To become Africa's most trusted and innovative travel partner, known globally for curating exceptional,
                  meaningful, and sustainable journeys that leave a lasting legacy for people, wildlife, and the planet.
                </p>
              </div>

              <div className="about-section-modal">
                <h3>Conservation Commitment</h3>
                <div className="conservation-grid">
                  <div className="conservation-item">
                    <h4><i className="fas fa-paw"></i> Wildlife Guardianship</h4>
                    <p>
                      A portion of every safari is donated to gorilla and chimpanzee conservation programs
                      in Bwindi, Kibale, and Volcanoes National Park.
                    </p>
                  </div>

                  <div className="conservation-item">
                    <h4><i className="fas fa-hands-helping"></i> Community Partnerships</h4>
                    <p>
                      We collaborate with local villages and NGOs to fund anti-poaching initiatives,
                      reforestation projects, and wildlife corridors.
                    </p>
                  </div>

                  <div className="conservation-item">
                    <h4><i className="fas fa-leaf"></i> Eco-Certified Lodges</h4>
                    <p>
                      We prioritize accommodations with proven sustainability practices, from
                      solar-powered lodges to zero-waste policies.
                    </p>
                  </div>

                  <div className="conservation-item">
                    <h4><i className="fas fa-book-open"></i> Traveler Education</h4>
                    <p>
                      Our expert guides share insights on conservation challenges and victories,
                      turning every safari into a lesson in preservation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-section-modal">
                <h3>Why Travel with Us?</h3>
                <ul className="travel-reasons">
                  <li>
                    <i className="fas fa-globe-africa"></i>
                    <div>
                      <h4>Conservation-Driven Safaris</h4>
                      <p>Your journey directly funds wildlife protection and community upliftment.</p>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-binoculars"></i>
                    <div>
                      <h4>Ethical Wildlife Encounters</h4>
                      <p>We adhere to strict guidelines to minimize ecological impact during gorilla treks,
                      game drives, and forest walks.</p>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-seedling"></i>
                    <div>
                      <h4>Legacy Travel</h4>
                      <p>Leave footprints of hope - every booking plants indigenous trees in degraded habitats.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
