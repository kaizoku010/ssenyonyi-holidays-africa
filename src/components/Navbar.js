import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-text">DERIQ <span className="highlight">TRAVELS</span></span>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li className="nav-item active"><a href="#home">HOME</a></li>
          <li className="nav-item"><a href="#packages">PACKAGES</a></li>
          <li className="nav-item"><a href="#destinations">DESTINATIONS</a></li>
          <li className="nav-item"><a href="#tours">TOURS</a></li>
          <li className="nav-item"><a href="#offers">OFFERS</a></li>
          <li className="nav-item"><a href="#contacts">CONTACTS</a></li>
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
