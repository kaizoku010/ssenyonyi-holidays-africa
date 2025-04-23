import React from 'react';
import '../styles/PopularDestinations.css';

// Import images
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

const destinations = [
  {
    id: 1,
    image: kitandra,
    name: 'Swiss Alps',
    description: 'Experience breathtaking mountain views and charming villages',
    rating: 4.8,
    price: 1299
  },
  {
    id: 2,
    image: kitandra2,
    name: 'Mount Kilimanjaro',
    description: 'Climb Africa\'s highest peak through diverse ecosystems',
    rating: 4.9,
    price: 2499
  },
  {
    id: 3,
    image: kitandra,
    name: 'Bali, Indonesia',
    description: 'Discover tropical paradise with stunning beaches and culture',
    rating: 4.7,
    price: 899
  },
  {
    id: 4,
    image: kitandra2,
    name: 'Santorini, Greece',
    description: 'Enjoy white-washed buildings and spectacular sunsets',
    rating: 4.9,
    price: 1599
  }
];

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">
      <div className="section-header">
        <h2>Popular Destinations</h2>
        <p>Explore our most sought-after travel experiences</p>
      </div>
      
      <div className="destinations-grid">
        {destinations.map(destination => (
          <div key={destination.id} className="destination-item">
            <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}>
              <div className="destination-price">${destination.price}</div>
            </div>
            <div className="destination-details">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <div className="destination-meta">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <span>{destination.rating}</span>
                </div>
                <button className="book-button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <button className="view-all-button">View All Destinations</button>
      </div>
    </section>
  );
};

export default PopularDestinations;
