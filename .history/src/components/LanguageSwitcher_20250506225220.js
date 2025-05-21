import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <div className="language-options">
        <button 
          className={`language-option ${i18n.language === 'en' ? 'active' : ''}`} 
          onClick={() => changeLanguage('en')}
        >
          {t('languageSwitcher.english')}
        </button>
        <button 
          className={`language-option ${i18n.language === 'zh' ? 'active' : ''}`} 
          onClick={() => changeLanguage('zh')}
        >
          {t('languageSwitcher.chinese')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
