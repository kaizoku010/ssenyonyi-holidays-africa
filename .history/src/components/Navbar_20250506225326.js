import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">DERIQ <span className="highlight">TRAVELS</span></span>
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">{t('navbar.home')}</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/packages' ? 'active' : ''}`}>
            <Link to="/packages">{t('navbar.packages')}</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/destinations' ? 'active' : ''}`}>
            <Link to="/destinations">{t('navbar.destinations')}</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
            <Link to="/gallery">{t('navbar.gallery')}</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">{t('navbar.contact')}</Link>
          </li>
          <li className="nav-item"><a href="#tours">{t('navbar.tours')}</a></li>
          <li className="nav-item"><a href="#offers">{t('navbar.offers')}</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <LanguageSwitcher />
        <div className="nav-button yellow">
          <i className="fas fa-search"></i>
        </div>
        <div className="nav-button dark">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
