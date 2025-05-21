import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
        <motion.div 
          className="about-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('homePage.about.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('homePage.about.subtitle')}
          </motion.p>
          <motion.div 
            className="about-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              {t('homePage.about.description1')}
            </p>
            <p>
              {t('homePage.about.description2')}
            </p>
          </motion.div>
          <div className="about-features">
            <motion.div 
              className="feature"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <i className="fas fa-leaf"></i>
              <span>{t('homePage.about.features.conservation')}</span>
            </motion.div>
            <motion.div 
              className="feature"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <i className="fas fa-users"></i>
              <span>{t('homePage.about.features.community')}</span>
            </motion.div>
            <motion.div 
              className="feature"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <i className="fas fa-globe-africa"></i>
              <span>{t('homePage.about.features.authentic')}</span>
            </motion.div>
          </div>
          <motion.button 
            className="about-button" 
            onClick={handleLearnMoreClick}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('homePage.callToAction')}
          </motion.button>
        </motion.div>
        <motion.div 
          className="about-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.img 
            src={kitandra} 
            alt="Nyonyi Holidays Africa Experience"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t('homePage.about.discover.title')}
              </motion.h3>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t('homePage.about.discover.subtitle')}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

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
            <div className="modal-content">
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About Nyonyi Holidays Africa
              </motion.h2>
              <div className="about-section-modal">
                <h3>Company Profile</h3>
                <p>
                  Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable
                  journeys across Uganda, Rwanda, and beyond.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;
