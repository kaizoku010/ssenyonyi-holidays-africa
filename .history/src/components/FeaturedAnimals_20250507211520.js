import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/FeaturedAnimals.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import Slide0 from '../media/slide.jpg';
import Slide1 from '../media/slide1.jpg';
import Slide2 from '../media/slide2.jpg';
import Slide3 from '../media/slide3.jpg';
import Slide4 from '../media/slide4.jpg';
import Slide5 from '../media/slide5.jpg';

// Gallery items with both images and videos
const galleryItems = [
  {
    id: 1,
    title: 'Wildlife Safari',
    type: 'image',
    src: kitandra,
    category: 'wildlife'
  },
  {
    id: 2,
    title: 'Mountain Gorillas',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0',
    thumbnail: kitandra2,
    category: 'wildlife'
  },
  {
    id: 3,
    title: 'Savanna Landscapes',
    type: 'image',
    src: Slide0,
    category: 'landscape'
  },
  {
    id: 4,
    title: 'Cultural Experiences',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0',
    thumbnail: Slide1,
    category: 'culture'
  },
  {
    id: 5,
    title: 'Luxury Accommodations',
    type: 'image',
    src: Slide2,
    category: 'accommodation'
  },
  {
    id: 6,
    title: 'Adventure Activities',
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0',
    thumbnail: Slide3,
    category: 'adventure'
  },
  {
    id: 7,
    title: 'Local Cuisine',
    type: 'image',
    src: Slide4,
    category: 'culture'
  },
  {
    id: 8,
    title: 'Sunset Views',
    type: 'image',
    src: Slide5,
    category: 'landscape'
  }
];

const FeaturedAnimals = () => {
  return (
    <section className="featured-animals">
      <div className="animals-container">
        <motion.div
          className="section-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FEATURED DESTINATIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our most popular travel experiences
          </motion.p>
        </motion.div>

        <div className="animals-grid">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.id}
              className="animal-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="animal-image"
                style={{ backgroundImage: `url(${animal.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="animal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.span
                    className="animal-category"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {animal.category}
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div
                className="animal-name"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {animal.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
