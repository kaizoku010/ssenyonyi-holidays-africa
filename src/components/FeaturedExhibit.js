import React from 'react';
import '../styles/FeaturedExhibit.css';
import kitandra2 from '../media/kitandra2.jpg';

const FeaturedExhibit = () => {
  return (
    <section className="featured-exhibit">
      <div className="exhibit-container">
        <div className="exhibit-content">
          <div className="exhibit-text">
            <h2>FEATURED EXPERIENCE</h2>
            <h3>Serengeti Safari Adventure</h3>
            <p>
              Embark on an unforgettable journey through the vast plains of the Serengeti. Witness the majestic wildlife in their natural habitat, from lions and elephants to giraffes and zebras.
            </p>
            <p>
              Our expert guides will ensure you experience the best of African wildlife while staying in luxurious safari lodges under the starlit sky.
            </p>
            <ul className="exhibit-features">
              <li><i className="fas fa-check"></i> 7-day immersive safari experience</li>
              <li><i className="fas fa-check"></i> Witness the Great Migration</li>
              <li><i className="fas fa-check"></i> Luxury accommodations included</li>
              <li><i className="fas fa-check"></i> Professional wildlife photography tips</li>
            </ul>
            <button className="book-now-button">Book This Adventure</button>
          </div>
          <div className="exhibit-image">
            <img src={kitandra2} alt="Serengeti Safari" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibit;
