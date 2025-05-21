import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/AboutSection.css';
import kitandra from '../media/kitandra.jpg';
import { fadeIn, staggerContainer, textVariant, scaleAnimation } from '../utils/animations';

const AboutSection = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const { t } = useTranslation();

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Start animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const handleLearnMoreClick = () => {
    setShowAboutModal(true);
  };

  const handleCloseModal = () => {
    setShowAboutModal(false);
  };

  return (
    <motion.section
      className="about-section"
      ref={ref}
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="about-container">
        <motion.div
          className="about-content"
          variants={fadeIn("right", 0.2)}
        >
          <motion.h2
            className="section-title"
            variants={textVariant(0.3)}
          >
            {t('homePage.about.title')}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={textVariant(0.4)}
          >
            {t('homePage.about.subtitle')}
          </motion.p>
          <motion.div
            className="about-text"
            variants={fadeIn("up", 0.5)}
          >
            <p>
              {t('homePage.about.description1')}
            </p>
            <p>
              {t('homePage.about.description2')}
            </p>
          </motion.div>
          <motion.div
            className="about-features"
            variants={staggerContainer(0.1, 0.6)}
          >
            <motion.div className="feature" variants={fadeIn("up", 0.1)}>
              <i className="fas fa-leaf"></i>
              <span>{t('homePage.about.features.conservation')}</span>
            </motion.div>
            <motion.div className="feature" variants={fadeIn("up", 0.2)}>
              <i className="fas fa-users"></i>
              <span>{t('homePage.about.features.community')}</span>
            </motion.div>
            <motion.div className="feature" variants={fadeIn("up", 0.3)}>
              <i className="fas fa-globe-africa"></i>
              <span>{t('homePage.about.features.authentic')}</span>
            </motion.div>
          </motion.div>
          <motion.button
            className="about-button"
            onClick={handleLearnMoreClick}
            variants={scaleAnimation(0.8)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('homePage.callToAction')}
          </motion.button>
        </motion.div>
        <motion.div
          className="about-image"
          variants={fadeIn("left", 0.3)}
        >
          <motion.img
            src={kitandra}
            alt="Nyonyi Holidays Africa Experience"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="image-overlay"
            variants={fadeIn("up", 0.4)}
          >
            <div className="overlay-content">
              <motion.h3 variants={textVariant(0.5)}>
                {t('homePage.about.discover.title')}
              </motion.h3>
              <motion.p variants={textVariant(0.6)}>
                {t('homePage.about.discover.subtitle')}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {showAboutModal && (
        <motion.div
          className="about-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="about-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <motion.button
              className="close-button"
              onClick={handleCloseModal}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times"></i>
            </motion.button>
            <motion.div
              className="modal-content"
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              animate="show"
            >
              <motion.h2 variants={fadeIn("down", 0.1)}>About Nyonyi Holidays Africa</motion.h2>

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
