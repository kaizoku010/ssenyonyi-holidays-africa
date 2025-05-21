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

  return (
    <div className="language-switcher">
      <div className="language-options">
        <button
          className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          className={`language-option ${currentLanguage === 'zh' ? 'active' : ''}`}
          onClick={() => changeLanguage('zh')}
        >
          中文
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
