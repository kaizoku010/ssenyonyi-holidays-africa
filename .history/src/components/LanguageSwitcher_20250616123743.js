import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFlag as faFlagRegular } from '@fortawesome/free-regular-svg-icons';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const [hasDetectedLocation, setHasDetectedLocation] = useState(false);

  useEffect(() => {
    // Set the initial language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    if (savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
    setCurrentLanguage(savedLanguage);

    // Only detect location if it hasn't been done before
    if (!hasDetectedLocation && !localStorage.getItem('locationDetected')) {
      detectUserLocation();
    }
  }, [i18n, hasDetectedLocation]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    // Remove the reload - it's not necessary and causes issues
  };

  const detectUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            const countryCode = data.address.country_code.toUpperCase();
            
            // If user is in China (CN), set language to Chinese
            if (countryCode === 'CN') {
              changeLanguage('zh');
            }
            // Mark location as detected to prevent future checks
            localStorage.setItem('locationDetected', 'true');
            setHasDetectedLocation(true);
          } catch (error) {
            console.error('Error detecting location:', error);
            localStorage.setItem('locationDetected', 'true');
            setHasDetectedLocation(true);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          localStorage.setItem('locationDetected', 'true');
          setHasDetectedLocation(true);
        }
      );
    } else {
      localStorage.setItem('locationDetected', 'true');
      setHasDetectedLocation(true);
    }
  };

  return (
    <div className="language-switcher">
      <div className="language-options">
        <button
          className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
          title="English"
        >
          <img 
            src="https://flagcdn.com/w40/gb.png"
            srcSet="https://flagcdn.com/w80/gb.png 2x"
            width="20"
            height="15"
            alt="UK Flag"
            className="flag-icon"
          />
        </button>
             <button
          className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
          title="English"
        >
          <img 
            src="https://flagcdn.com/w40/nl.png"
            srcSet="https://flagcdn.com/w80/nl.png 2x"
            width="20"
            height="15"
            alt="UK Flag"
            className="flag-icon"
          />
        </button>
        <button
          className={`language-option ${currentLanguage === 'zh' ? 'active' : ''}`}
          onClick={() => changeLanguage('zh')}
          title="中文"
        >
          <img 
            src="https://flagcdn.com/w40/cn.png"
            srcSet="https://flagcdn.com/w80/cn.png 2x"
            width="20"
            height="15"
            alt="China Flag"
            className="flag-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
