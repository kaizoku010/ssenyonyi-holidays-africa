import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">NYONYI <span className="highlight">HOLIDAYS AFRICA</span></span>
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
            <Link to="/services">SERVICES</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/destinations' ? 'active' : ''}`}>
            <Link to="/destinations">DESTINATIONS</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/conservation' ? 'active' : ''}`}>
            <Link to="/conservation">CONSERVATION</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
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
