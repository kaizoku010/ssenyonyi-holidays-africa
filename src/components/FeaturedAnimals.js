import React from 'react';
import '../styles/FeaturedAnimals.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

const animals = [
  {
    id: 1,
    name: 'African Lion',
    image: kitandra,
    category: 'Safari'
  },
  {
    id: 2,
    name: 'Colorful Macaw',
    image: kitandra2,
    category: 'Tropical'
  },
  {
    id: 3,
    name: 'Giraffe',
    image: kitandra,
    category: 'Safari'
  },
  {
    id: 4,
    name: 'Chameleon',
    image: kitandra2,
    category: 'Reptile'
  },
  {
    id: 5,
    name: 'Meerkat',
    image: kitandra,
    category: 'Desert'
  },
  {
    id: 6,
    name: 'Tiger',
    image: kitandra2,
    category: 'Jungle'
  }
];

const FeaturedAnimals = () => {
  return (
    <section className="featured-animals">
      <div className="animals-container">
        <div className="section-header">
          <h2>FEATURED DESTINATIONS</h2>
          <p>Explore our most popular travel experiences</p>
        </div>
        
        <div className="animals-grid">
          {animals.map(animal => (
            <div key={animal.id} className="animal-card">
              <div className="animal-image" style={{ backgroundImage: `url(${animal.image})` }}>
                <div className="animal-overlay">
                  <span className="animal-category">{animal.category}</span>
                </div>
              </div>
              <div className="animal-name">{animal.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
