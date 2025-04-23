import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>DERIQ TRAVELS</h3>
          <p>
            We specialize in creating unforgettable travel experiences around the world.
            Our expert team crafts personalized itineraries to match your travel style.
          </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 123 Travel Street, Adventure City</li>
            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
            <li><i className="fas fa-envelope"></i> info@deriqtravels.com</li>
          </ul>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for travel tips and exclusive offers.</p>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DERIQ TRAVELS. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
