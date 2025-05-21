import React from 'react';
import { motion } from 'framer-motion';
import '../styles/EVChargingPage.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TestImage from "../media/slide1.jpg"
import Partner from "../media/test.png"
import Footer from '../components/Footer';
import Swril from "../media/deriq.png"
import Nyoni from "../media/bird.png"
import B1 from "../media/b1.jpg"
import B2 from "../media/b2.jpg"
import B3 from "../media/b3.jpg"
import { Bird } from 'lucide-react';

const EVChargingPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      image: B1,
      name: 'John Doe',
      role: 'Charging Specialist'
    },
    {
      id: 2,
      image: B2,
      name: 'Jane Smith',
      role: ''
    },
    {
      id: 3,
      image: B3,
      name: '',
      role: ''
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
            <h1 className="ev-title">
Murchison Falls National Park sits on the shore of Lake Albert, in northwest Uganda.
               </h1>
            <div className="ev-author-info">
              <p className="ev-author">Image by Deriq Sennoyni</p>
              <p className="ev-date">January 15, 2023</p>
            </div>
          </div>
    
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="ev-mission-container">
        <div className="ev-mission-content">
          <div className="ev-mission-text">
            <div>
            <h2 className="ev-mission-title">Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable journeys across Africa.</h2>
            <p className="ev-mission-description">
             Rooted in the Swahili word for “bird,” Nyonyi represents freedom, elegance, and the boundless spirit of exploration 
             that guides our brand. We believe travel is not just about discovery—it’s about stewardship.
            </p>
            </div>
      

            <p className="ev-mission-description">
From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives in Murchison Falls to Rwanda’s golden savannahs
of Akagera National Park, we connect discerning travelers to the true heart of Africa. <br/><br/>Every itinerary we design prioritizes conservation-first tourism,
ensuring that your journey supports the protection of endangered species, preserves fragile ecosystems, and empowers communities safeguarding these wild spaces.</p>
          </div>
          <div className="ev-mission-image">
            <img src={Swril}
             alt="nyoni holidays africa" />
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="ev-solution-container">
        <div className="ev-solution-content">
          <div className="ev-solution-image">
            <img src={Nyoni}
             alt="nyoni holidays africa" />    
                   </div>
          <div className="ev-solution-text">
            <p>To become Africa’s most trusted and innovative travel partner, 
              known globally for curating exceptional, meaningful, 
              and sustainable journeys that leave a lasting legacy for people,
               wildlife, and the planet.
            </p>

            <div>
          <h2 className="ev-solution-title">Our Mission</h2>
            <p className="ev-solution-description">
            To design and deliver authentic African travel experiences that inspire, educate, and uplift—while fostering responsible tourism that directly 
            contributes to wildlife conservation, habitat restoration, and sustainable livelihoods for local communities.
            </p>
            <h2 className="ev-solution-title">Our Vision</h2>
            <p className="ev-solution-description">
         To become Africa’s most trusted and innovative travel partner, known globally for curating
          exceptional, meaningful, and sustainable journeys that leave a lasting legacy for people, wildlife, and the planet.
            </p>
            </div>
  
         
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="ev-team-container">
        <h2 className="ev-team-title">African Adventures</h2>
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
          <h2 className="ev-partners-title">Our adventures are all made possible by our partners</h2>
          <div className="ev-partners-logos">
            {partners.map(partner => (
              <div key={partner.id} className="ev-partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

<div className='why-us'>
  <div className='smaller-side'>

    <div className='spacer'></div>
    <div className='why-us-content'></div>  
          
  </div>
  <div className='bigger-side'>

    <div className='spacer'></div>
    <div className='why-us-content'></div>      

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
