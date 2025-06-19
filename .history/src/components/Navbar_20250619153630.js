import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LogoWhite from "../media/logo_white.png";
import LogoGreen from "../media/new_logo.png";
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Determine if on home page
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar${isHome ? ' navbar--transparent' : ' navbar--black'}`}>
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <img
              className={`logo-img${isHome ? '' : ' logo-img--small'}`}
              src={isHome ? LogoWhite : LogoGreen}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">{t('navbar.home')}</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">{t('navbar.about')}</Link>
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
          <li className={`nav-item ${location.pathname === '/inquire-now' ? 'active' : ''}`}>
            <Link to="/inquire-now">{t('navbar.contact')}</Link>
          </li>

          {/* <li className="nav-item"><a href="#tours">{t('navbar.tours')}</a></li> */}
          {/* <li className="nav-item"><a href="#offers">{t('navbar.offers')}</a></li> */}
        </ul>
      </div>
      <div className="navbar-right">
        <LanguageSwitcher />
        {/* <div className="nav-button yellow">
          <i className="fas fa-search"></i>
        </div> */}
        <div
          className="nav-button dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </div>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">{t('navbar.home')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about">{t('navbar.about')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/packages' ? 'active' : ''}`}>
              <Link to="/packages">{t('navbar.packages')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/destinations' ? 'active' : ''}`}>
              <Link to="/destinations">{t('navbar.destinations')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
              <Link to="/gallery">{t('navbar.gallery')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/inquire-now' ? 'active' : ''}`}>
              <Link to="/inquire-now">{t('navbar.contact')}</Link>
            </li>
            {/* <li className="mobile-nav-item">
              <a href="#tours">{t('navbar.tours')}</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#offers">{t('navbar.offers')}</a>
            </li> */}
          </ul>
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
