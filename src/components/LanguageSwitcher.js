import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  useEffect(() => {
    // Set the initial language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    if (savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
    setCurrentLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    // Force reload to ensure all components get the new language
    window.location.reload();
  };

  useEffect(() => {
    const detectUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              // Use reverse geocoding to get country information
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
              );
              const data = await response.json();
              const countryCode = data.address.country_code.toUpperCase();
              
              // If user is in China (CN), set language to Chinese
              if (countryCode === 'CN') {
                changeLanguage('zh');
              } else {
                // For all other countries, set to English
                changeLanguage('en');
              }
            } catch (error) {
              console.error('Error detecting location:', error);
              // Default to English if there's an error
              changeLanguage('en');
            }
          },
          (error) => {
            console.error('Geolocation error:', error);
            // Default to English if geolocation is denied or fails
            changeLanguage('en');
          }
        );
      } else {
        // Default to English if geolocation is not supported
        changeLanguage('en');
      }
    };

    detectUserLocation();
  }, [changeLanguage]);

  return (
    <div className="language-switcher">
      <div className="language-options">
        <button
          className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          🇬🇧 English
        </button>
        <button
          className={`language-option ${currentLanguage === 'zh' ? 'active' : ''}`}
          onClick={() => changeLanguage('zh')}
        >
          🇨🇳 中文
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
