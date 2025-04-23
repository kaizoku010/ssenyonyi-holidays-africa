import React from 'react';
import '../styles/DestinationCard.css';

const DestinationCard = ({ image, location, title, subtitle }) => {
  return (
    <div className="destination-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <div className="card-location">{location}</div>
        <div className="card-title">{title}</div>
        <div className="card-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default DestinationCard;
