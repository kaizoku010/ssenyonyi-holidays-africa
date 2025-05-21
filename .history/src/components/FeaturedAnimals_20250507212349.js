import React, { useState, useEffect } from 'react';
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
import Slide6 from '../media/slide6.jpg';
import Slide7 from '../media/slide7.jpg';

// Gallery items with both images and videos
const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: kitandra,
    width: 'wide', // wide item (spans 2 columns)
    height: 'medium'
  },
  {
    id: 2,
    type: 'image',
    src: Slide2,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 3,
    type: 'image',
    src: Slide3,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 4,
    type: 'image',
    src: kitandra2,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 5,
    type: 'image',
    src: Slide0,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 6,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0',
    thumbnail: Slide1,
    width: 'wide',
    height: 'medium'
  },
  {
    id: 7,
    type: 'image',
    src: Slide4,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 8,
    type: 'image',
    src: Slide5,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 9,
    type: 'image',
    src: Slide6,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 10,
    type: 'image',
    src: Slide7,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 11,
    type: 'image',
    src: kitandra,
    width: 'wide',
    height: 'medium'
  },
  {
    id: 12,
    type: 'image',
    src: kitandra2,
    width: 'wide',
    height: 'medium'
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
            <Link to="/gallery" style={{ textDecoration: 'none' }} key={item.id}>
              <motion.div
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
