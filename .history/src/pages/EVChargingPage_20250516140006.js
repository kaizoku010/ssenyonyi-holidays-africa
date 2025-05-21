import React from 'react';
import { motion } from 'framer-motion';
import '../styles/EVChargingPage.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TestImage from "../media/slide1.jpg"

const EVChargingPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      image: '/images/team-member-1.jpg',
      name: 'John Doe',
      role: 'Charging Specialist'
    },
    {
      id: 2,
      image: '/images/team-member-2.jpg',
      name: 'Jane Smith',
      role: 'EV Consultant'
    },
    {
      id: 3,
      image: '/images/team-member-3.jpg',
      name: 'Mike Johnson',
      role: 'Technical Director'
    }
  ];

  // Partner logos
  const partners = [
    { id: 1, logo: '/images/partner-1.png', name: 'Partner 1' },
    { id: 2, logo: '/images/partner-2.png', name: 'Partner 2' },
    { id: 3, logo: '/images/partner-3.png', name: 'Partner 3' },
    { id: 4, logo: '/images/partner-4.png', name: 'Partner 4' },
    { id: 5, logo: '/images/partner-5.png', name: 'Partner 5' }
  ];

  return (
    <div className="ev-charging-page">
      {/* Header Section */}
           <Navbar />
      <div className="ev-header-container">
        
                  <div className='spacer'></div>
        <div className="ev-header-content">
          <div className="ev-header-text">
            <h1 className="ev-title">Facilitating fairer, more accessible EV charging</h1>
            <div className="ev-author-info">
              <p className="ev-author">By Tim Johnson</p>
              <p className="ev-date">January 15, 2023 • 5 min read</p>
            </div>
          </div>
    
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="ev-mission-container">
        <div className="ev-mission-content">
          <div className="ev-mission-text">
            <h2 className="ev-mission-title">We want to make EV ownership an option for everyone.</h2>
            <p className="ev-mission-description">
              Our mission is to create accessible charging solutions that make electric vehicle ownership 
              possible for all communities, regardless of location or income level.
            </p>
          </div>
          <div className="ev-mission-image">
            <img src="/images/ev-charging-people.jpg"
             alt="se" />
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="ev-solution-container">
        <div className="ev-solution-content">
          <div className="ev-solution-image">
            <img src="/images/ev-charging-car.jpg" alt="EV charging" />
          </div>
          <div className="ev-solution-text">
            <h2 className="ev-solution-title">We'll help you find the best solution for your site.</h2>
            <p className="ev-solution-description">
              Our team of experts will work with you to determine the optimal charging infrastructure 
              for your specific needs, considering factors like location, usage patterns, and budget.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="ev-team-container">
        <h2 className="ev-team-title">Meet the team</h2>
        <div className="ev-team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="ev-team-member">
              <div className="ev-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="ev-member-name">{member.name}</h3>
              <p className="ev-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="ev-partners-container">
        <div className="ev-partners-content">
          <h2 className="ev-partners-title">Our charging solutions are all made possible by our partners</h2>
          <div className="ev-partners-logos">
            {partners.map(partner => (
              <div key={partner.id} className="ev-partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ev-cta-container">
        <div className="ev-cta-content">
          <h2 className="ev-cta-title">Ready to get started?</h2>
          <button className="ev-cta-button">Contact us <span className="ev-cta-dot">•</span></button>
          <p className="ev-cta-description">
            Let us help you implement the perfect EV charging solution for your needs.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="ev-footer">
        <div className="ev-footer-content">
          <div className="ev-footer-logo">
            <img src="/images/logo-small.png" alt="Logo" />
          </div>
          <div className="ev-footer-links">
            <div className="ev-footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </div>
            <div className="ev-footer-column">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Support</Link></li>
              </ul>
            </div>
            <div className="ev-footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/">Privacy</Link></li>
                <li><Link to="/">Terms</Link></li>
                <li><Link to="/">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ev-footer-bottom">
          <p>© 2023 EV Charging Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EVChargingPage;
