import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import '../styles/DestinationSlider.css';

// Import images
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

// We'll use these as placeholders for the destination cards
// In a real application, you would have actual images for each destination
const naganoImage = kitandra;
const marrakechImage = kitandra2;
const yosemiteImage = kitandra;
const losLancesImage = kitandra2;
const phiPhiImage = kitandra;
const dolomitesImage = kitandra2;
const milfordImage = kitandra;
const banffImage = kitandra2;

const destinations = [
  {
    id: 1,
    mainImage: kitandra,
    location: 'Switzerland Alps',
    title: 'SAINT ANTÖNIEN',
    description: 'Majestic mountainscapes await your adventurous spirit. Experience the breathtaking views as you journey through pristine alpine terrain.',
    cards: [
      {
        image: naganoImage,
        location: 'Japan',
        title: 'NAGANO PREFECTURE',
        subtitle: 'Snow Monkeys'
      },
      {
        image: marrakechImage,
        location: 'Morocco',
        title: 'MARRAKECH MERZOUGA',
        subtitle: 'Desert Adventure'
      },
      {
        image: yosemiteImage,
        location: 'USA',
        title: 'YOSEMITE NATIONAL PARK',
        subtitle: 'Climbing Paradise'
      },
      {
        image: losLancesImage,
        location: 'Spain',
        title: 'LOS LANCES BEACH',
        subtitle: 'Kitesurfing'
      }
    ]
  },
  {
    id: 2,
    mainImage: kitandra2,
    location: 'East Africa',
    title: 'MOUNT KILIMANJARO',
    description: 'Africa\'s highest peak offers a challenging trek through five distinct climate zones, from lush rainforest to arctic summit.',
    cards: [
      {
        image: phiPhiImage,
        location: 'Thailand',
        title: 'PHI PHI ISLANDS',
        subtitle: 'Crystal Waters'
      },
      {
        image: dolomitesImage,
        location: 'Italy',
        title: 'DOLOMITES',
        subtitle: 'Alpine Beauty'
      },
      {
        image: milfordImage,
        location: 'New Zealand',
        title: 'MILFORD SOUND',
        subtitle: 'Fjord Exploration'
      },
      {
        image: banffImage,
        location: 'Canada',
        title: 'BANFF NATIONAL PARK',
        subtitle: 'Mountain Lakes'
      }
    ]
  }
];

const DestinationSlider = ({
  customDestinations,
  autoPlayInterval = 8000,
  showControls = true,
  showPagination = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use custom destinations if provided, otherwise use default destinations
  const sliderDestinations = customDestinations || destinations;

  // Define nextSlide function before using it in useEffect
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % sliderDestinations.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? sliderDestinations.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  // Set up autoplay with useEffect
  useEffect(() => {
    // Create a function inside useEffect to avoid dependency issues
    const autoAdvance = () => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % sliderDestinations.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    };

    const interval = setInterval(autoAdvance, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, sliderDestinations.length]); // Only depend on interval time and number of slides

  const destination = sliderDestinations[currentSlide];

  return (
    <div className="destination-slider">
      {sliderDestinations.map((dest, index) => (
        <div
          key={dest.id}
          className={`slider-background ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${dest.mainImage})`,
            opacity: index === currentSlide ? 1 : 0
          }}
        />
      ))}
      <div className="slider-overlay"></div>

      <div className="slider-content">
        <div className="destination-info">
          <div className="destination-location">The Greatest</div>
          <h1 className="destination-title">in the World</h1>
          <p className="destination-description">Experience the most breathtaking destinations and adventures with our expert guides and carefully crafted itineraries.</p>
          <button className="discover-button">
            <span className="discover-icon"><i className="fas fa-arrow-right"></i></span>
            EXPLORE NOW
          </button>
        </div>

        <div className="destination-cards">
          {destination.cards.map((card, index) => (
            <DestinationCard
              key={index}
              image={card.image}
              location={card.location}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>

      {showControls && (
        <div className="slider-controls">
          <button className="control-button prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="control-button next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}

      {showPagination && (
        <div className="slider-pagination">
          <div className="current-slide">0{currentSlide + 1}</div>
        </div>
      )}
    </div>
  );
};

export default DestinationSlider;
