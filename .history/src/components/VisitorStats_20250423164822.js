import React from 'react';
import '../styles/VisitorStats.css';

const stats = [
  {
    id: 1,
    number: '250+',
    label: 'DESTINATIONS',
    icon: 'fas fa-map-marker-alt'
  },
  {
    id: 2,
    number: '10K+',
    label: 'TRAVELERS',
    icon: 'fas fa-users'
  },
  {
    id: 3,
    number: '15+',
    label: 'YEARS',
    icon: 'fas fa-calendar-alt'
  },
  {
    id: 4,
    number: '98%',
    label: 'SATISFACTION',
    icon: 'fas fa-heart'
  },
  {
    id: 5,
    number: '24/7',
    label: 'SUPPORT',
    icon: 'fas fa-headset'
  }
];

const VisitorStats = () => {
  return (
    <section className="visitor-stats">
      <div className="stats-container">
        {stats.map(stat => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisitorStats;
