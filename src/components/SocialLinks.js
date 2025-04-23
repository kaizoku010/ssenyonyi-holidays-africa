import React from 'react';
import '../styles/SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
