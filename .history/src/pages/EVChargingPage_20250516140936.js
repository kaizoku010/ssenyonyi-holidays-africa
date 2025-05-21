import React from 'react';
import { motion } from 'framer-motion';
import '../styles/EVChargingPage.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TestImage from "../media/slide1.jpg"
import Partner from "../media/test.png"
import Footer from '../components/Footer';

const EVChargingPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      image: TestImage,
      name: 'John Doe',
      role: 'Charging Specialist'
    },
    {
      id: 2,
      image: TestImage,
      name: 'Jane Smith',
      role: 'EV Consultant'
    },
    {
      id: 3,
      image: TestImage,
      name: 'Mike Johnson',
      role: 'Technical Director'
    }
  ];

  // Partner logos
  const partners = [
    { id: 1, logo: Partner, name: 'Partner 1' },
    { id: 2, logo: Partner, name: 'Partner 2' },
    { id: 3, logo: Partner, name: 'Partner 3' },
    { id: 4, logo: Partner, name: 'Partner 4' },
    { id: 5, logo: Partner, name: 'Partner 5' }
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
            <h2 className="ev-mission-title">About us.</h2>
            <p className="ev-mission-description">
            Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable journeys across Uganda,
             Rwanda, and beyond. Rooted in the Swahili word for “bird,” Nyonyi represents freedom, elegance, and the boundless spirit of exploration 
             that guides our brand. We believe travel is not just about discovery—it’s about stewardship.</br>
From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives in Murchison Falls to Rwanda’s golden savannahs
of Akagera National Park, we connect discerning travelers to the true heart of Africa. Every itinerary we design prioritizes conservation-first tourism,
ensuring that your journey supports the protection of endangered species, preserves fragile ecosystems, and empowers communities safeguarding these wild spaces.
            </p>
          </div>
          <div className="ev-mission-image">
            <img src={TestImage}
             alt="nyoni holidays africa" />
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="ev-solution-container">
        <div className="ev-solution-content">
          <div className="ev-solution-image">
            <img src={TestImage}
             alt="nyoni holidays africa" />    
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
      <Footer />
    </div>
  );
};

export default EVChargingPage;
