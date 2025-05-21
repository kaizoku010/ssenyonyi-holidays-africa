import React from 'react';
import { motion } from 'framer-motion';
import '../styles/VisitorStats.css';

const stats = [
  {
    id: 1,
    number: '98%',
    label: 'Gorilla Trekking Success',
    description: 'Guests who see gorillas on first trek'
  },
  {
    id: 2,
    number: '4.9/5',
    label: 'Guest Satisfaction',
    description: 'Based on over 2,000 verified traveler reviews'
  },
 
  {
    id: 4,
    number: '631+',
    label: 'Wildlife Encounters',
    description: 'From Big Five to rare birds—every trip is packed with sightings'
  }

   {
    id: 3,
    number: '100%',
    label: 'On-Time Departures',
    description: 'Every safari starts and ends exactly as planned'
  },
];

const VisitorStats = () => {
  return (
    <section className="visitor-stats">
      <div className="stats-card">
        <div className="stats-header">
          <div>
            <h2 className="stats-title">We Deliver Wild Results.</h2>
            <p className="stats-subtitle">We don’t do excuses—only unforgettable safaris.</p>
          </div>
          <div className="stats-buttons">
            <button className="demo-btn">
              <span className="btn-icon">◎</span> Explore Our Adventures
            </button>
            <button className="get-started-btn">Start Here <span className="btn-arrow">→</span></button>
          </div>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index
              }}
            >
              <motion.div
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div
                className="stat-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
              <motion.div
                className="stat-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;
