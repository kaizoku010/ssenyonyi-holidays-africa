import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DestinationCard from './DestinationCard';
import '../styles/DestinationSlider.css';
import { fadeIn, slideIn, textVariant } from '../utils/animations';

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
        <motion.div
          key={dest.id}
          className={`slider-background ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${dest.mainImage})`,
            opacity: index === currentSlide ? 1 : 0
          }}
          animate={{
            scale: index === currentSlide ? [1, 1.05] : 1
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      <div className="slider-overlay"></div>

      <div className="slider-content">

        <motion.div
          className="destination-info"
          variants={slideIn("left", "tween", 0.2, 0.8)}
        >
          <motion.div
            className="destination-location"
            variants={textVariant(0.4)}
          >
            The Greatest
          </motion.div>
          <motion.h1
            className="destination-title"
            variants={textVariant(0.5)}
          >
            in the World
          </motion.h1>
          <motion.p
            className="destination-description"
            variants={fadeIn("up", 0.6)}
          >
            Experience the most breathtaking destinations and adventures with our expert guides and carefully crafted itineraries.
          </motion.p>
          <motion.button
            className="discover-button"
            variants={fadeIn("up", 0.7)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="discover-icon"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-arrow-right"></i>
            </motion.span>
            EXPLORE NOW
          </motion.button>
        </motion.div>

        <motion.div
          className="destination-cards"
          variants={slideIn("right", "tween", 0.3, 0.8)}
        >
          <AnimatePresence mode="wait">
            {destination.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DestinationCard
                  image={card.image}
                  location={card.location}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {showControls && (
        <motion.div
          className="slider-controls"
          variants={fadeIn("up", 0.8)}
        >
          <motion.button
            className="control-button prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          <motion.button
            className="control-button next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>
        </motion.div>
      )}

      {showPagination && (
        <motion.div
          className="slider-pagination"
          variants={fadeIn("up", 0.9)}
        >
          <motion.div
            className="current-slide"
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            0{currentSlide + 1}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DestinationSlider;
