import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DestinationCard from './Mdx';
import '../styles/DestinationSlider.css';
import { fadeIn, slideIn, textVariant } from '../utils/animations';

// Import images
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import kitandra4 from '../media/swril.jpg';
import kitandra5 from '../media/slide5.jpg';
import kitandra6 from '../media/people.jpg';
import kitandra7 from '../media/vibes.jpg';

// We'll use these as placeholders for the destination cards
// In a real application, you would have actual images for each destination
const naganoImage = kitandra;
const marrakechImage = kitandra5;
const yosemiteImage = kitandra6;
const losLancesImage = kitandra2;
const phiPhiImage = kitandra7;
const dolomitesImage = kitandra2;
const milfordImage = kitandra;
const banffImage = kitandra2;

const destinations = [
  {
    id: 1,
    mainImage: kitandra4,
    location: 'Uganda',
    title: 'CLASSIC GORILLAS',
    description: 'Majestic mountainscapes await your adventurous spirit. Experience the breathtaking views as you journey through pristine alpine terrain.',
    cards: [
      {
        image: naganoImage,
        location: 'Kenya',
        title: 'LANCES BEACH',
        subtitle: 'Snow Monkeys'
      },
      {
        image: marrakechImage,
        location: 'Rwanda',
        title: 'LANCES BEACH',
        subtitle: 'Desert Adventure'
      },
      {
        image: yosemiteImage,
        location: 'Uganda',
        title: 'NATIONAL PARK',
        subtitle: 'Climbing Paradise'
      },
      {
        image: losLancesImage,
        location: 'Uganda',
        title: 'LANCES BEACH',
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
        location: 'Tanzania',
        title: 'PHI ISLANDS',
        subtitle: 'Crystal Waters'
      },
      {
        image: dolomitesImage,
        location: 'Kenya',
        title: 'DOLOMITES',
        subtitle: 'Alpine Beauty'
      },
      {
        image: milfordImage,
        location: 'Burundi',
        title: 'LANCES BEACH',
        subtitle: 'Fjord Exploration'
      },
      {
        image: banffImage,
        location: 'Uganda',
        title: 'NATIONAL PARK',
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
    <motion.div
      className="destination-slider"
      initial="hidden"
      animate="show"
    >
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
      <motion.div
        className="slider-overlay"
        variants={fadeIn("left", 0.2)}
      ></motion.div>

      <motion.div
        className="slider-content"
        variants={fadeIn(0.3)}
      >
        <motion.div
          className="destination-info"
          variants={slideIn("left", "tween", 0.2, 0.8)}
        >
          <motion.div
            className="destination-location"
            variants={textVariant(0.4)}
          >
              Welcome to
           </motion.div>
          <motion.h1
            className="destination-title"
            variants={textVariant(0.5)}
          >
            Nyoni Holidays Africa
            </motion.h1>
          <motion.p
            className="destination-description"
            variants={fadeIn("up", 0.6)}
          >
We are a premier East African travel company dedicated to crafting unforgettable journeys across Uganda, Rwanda, and beyond. Rooted in the Swahili word for “bird,” Nyonyi represents freedom, elegance, and the boundless spirit of exploration that guides our brand.           </motion.p>
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
