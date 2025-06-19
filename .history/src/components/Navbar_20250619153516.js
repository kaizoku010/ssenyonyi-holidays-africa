import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LogoWhite from "../media/logo_white.png";
import LogoGreen from "../media/new_logo.png";
import '../styles/Navbar.css';
import DrawerMenu from 'nyx-drawer-menu';

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
        </ul>
      </div>
      <div className="navbar-right">
        <LanguageSwitcher />
        <div
          className="nav-button dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Drawer Menu for Mobile */}
      <DrawerMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        position="left"
        width={300}
        overlayColor="rgba(0,0,0,0.95)"
        zIndex={99999}
      >
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>{t('navbar.home')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>{t('navbar.about')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/packages' ? 'active' : ''}`}>
              <Link to="/packages" onClick={() => setMobileMenuOpen(false)}>{t('navbar.packages')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/destinations' ? 'active' : ''}`}>
              <Link to="/destinations" onClick={() => setMobileMenuOpen(false)}>{t('navbar.destinations')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
              <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>{t('navbar.gallery')}</Link>
            </li>
            <li className={`mobile-nav-item ${location.pathname === '/inquire-now' ? 'active' : ''}`}>
              <Link to="/inquire-now" onClick={() => setMobileMenuOpen(false)}>{t('navbar.contact')}</Link>
            </li>
          </ul>
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </DrawerMenu>
    </nav>
  );
};

export default Navbar;
