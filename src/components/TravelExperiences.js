import React from 'react';
import '../styles/TravelExperiences.css';

const experiences = [
  {
    id: 1,
    icon: 'fas fa-mountain',
    title: 'Adventure',
    description: 'Thrilling experiences for the bold traveler, from mountain climbing to white water rafting.'
  },
  {
    id: 2,
    icon: 'fas fa-umbrella-beach',
    title: 'Beach Getaways',
    description: 'Relax on pristine beaches with crystal clear waters and golden sands.'
  },
  {
    id: 3,
    icon: 'fas fa-utensils',
    title: 'Culinary Tours',
    description: 'Taste authentic local cuisines and learn cooking techniques from master chefs.'
  },
  {
    id: 4,
    icon: 'fas fa-landmark',
    title: 'Cultural Immersion',
    description: 'Dive deep into local traditions, festivals, and historical landmarks.'
  }
];

const TravelExperiences = () => {
  return (
    <section className="travel-experiences">
      <div className="section-header">
        <h2>Unforgettable Experiences</h2>
        <p>Choose your perfect travel style</p>
      </div>
      
      <div className="experiences-container">
        {experiences.map(experience => (
          <div key={experience.id} className="experience-card">
            <div className="experience-icon">
              <i className={experience.icon}></i>
            </div>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
            <a href="#" className="experience-link">Explore <i className="fas fa-arrow-right"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelExperiences;
