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
            PHOTO GALLERY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            WITH CREATIVE & UNIQUE STYLE
          </motion.p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
              onClick={() => window.location.href = '/gallery'}
            >
              {item.type === 'image' ? (
                <div className="gallery-image">
                  <img src={item.src} alt={item.title} />
                  <div className="gallery-overlay">
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </div>
              ) : (
                <div className="gallery-video">
                  <iframe
                    src={item.src}
                    title={item.title}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="gallery-overlay">
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </div>
              )}
              <div className="gallery-title">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
