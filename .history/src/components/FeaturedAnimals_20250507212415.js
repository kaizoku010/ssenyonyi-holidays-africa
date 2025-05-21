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
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter items based on category
  const filteredItems = galleryItems;

  return (
    <section className="featured-animals">
      <div className="animals-container">
        <div className="gallery-header">
          <h1>HELLO! WELCOME TO SUNZINE PHOTO GALLERY</h1>
          <p>WITH CREATIVE & UNIQUE STYLE</p>
        </div>

        <div className="gallery-filters">
          <div className="filter-item active">
            <span className="dot"></span>
            <span>PHOTOGRAPHY</span>
          </div>
          <div className="filter-item">
            <span>DESIGN</span>
          </div>
          <div className="filter-item">
            <span>NATURE</span>
          </div>
          <div className="filter-item">
            <span>FASHION</span>
          </div>
          <div className="filter-item">
            <span>LIFE STYLE</span>
          </div>
        </div>

        <div className="masonry-gallery">
          {filteredItems.map((item, index) => (
            <Link
              to="/gallery"
              key={item.id}
              className={`masonry-item ${item.width}`}
            >
              <div className="masonry-content">
                {item.type === 'image' ? (
                  <img src={item.src} alt="" />
                ) : (
                  <iframe
                    src={item.src}
                    title="Gallery video"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
