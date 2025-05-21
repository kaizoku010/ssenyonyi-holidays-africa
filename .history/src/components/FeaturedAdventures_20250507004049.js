import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/FeaturedAdventures.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

// Sample adventure data
const adventures = [
  {
    id: 1,
    title: 'Uganda Wildlife Safari',
    location: 'Murchison Falls, Uganda',
    duration: '7 Days',
    price: '$1,800',
    image: kitandra,
    description: 'Experience the incredible wildlife of Uganda, including lions, elephants, and hippos in their natural habitat.',
    highlights: ['Game drives', 'Boat safari', 'Waterfall views', 'Cultural encounters']
  },
  {
    id: 2,
    title: 'Gorilla Trekking Experience',
    location: 'Bwindi Forest, Uganda',
    duration: '5 Days',
    price: '$2,500',
    image: kitandra2,
    description: 'Trek through the misty forests of Bwindi to encounter endangered mountain gorillas in their natural habitat.',
    highlights: ['Gorilla permits', 'Forest hiking', 'Local community visit', 'Wildlife viewing']
  },
  {
    id: 3,
    title: 'Rwanda Cultural Tour',
    location: 'Kigali, Rwanda',
    duration: '6 Days',
    price: '$1,950',
    image: kitandra,
    description: 'Immerse yourself in the rich culture and history of Rwanda while exploring its beautiful landscapes.',
    highlights: ['Genocide memorial', 'Traditional dance', 'Local cuisine', 'Craft workshops']
  },
  {
    id: 4,
    title: 'Lake Kivu Relaxation',
    location: 'Lake Kivu, Rwanda',
    duration: '4 Days',
    price: '$1,200',
    image: kitandra2,
    description: 'Unwind on the shores of one of Africa\'s most beautiful lakes with stunning mountain views.',
    highlights: ['Boat cruise', 'Swimming', 'Island visits', 'Beach relaxation']
  }
];

const FeaturedAdventures = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="featured-adventures" ref={containerRef}>
      <div className="adventures-container">
        <motion.div
          className="section-header"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>FEATURED ADVENTURES</h2>
          <p>Discover our most popular travel experiences</p>
        </motion.div>

        <div className="adventures-scroll-container">
          {adventures.map((adventure, index) => {
            // Calculate the progress for each card
            const yProgress = useTransform(
              scrollYProgress,
              [0, 1],
              [index * 100, -100 + index * 50]
            );

            return (
              <motion.div
                key={adventure.id}
                className="adventure-card"
                style={{ y: yProgress }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="adventure-image">
                  <img src={adventure.image} alt={adventure.title} />
                  <div className="adventure-overlay">
                    <span className="adventure-price">{adventure.price}</span>
                    <span className="adventure-duration">{adventure.duration}</span>
                  </div>
                </div>
                <div className="adventure-content">
                  <h3>{adventure.title}</h3>
                  <div className="adventure-location">
                    <i className="fas fa-map-marker-alt"></i> {adventure.location}
                  </div>
                  <p>{adventure.description}</p>
                  <div className="adventure-highlights">
                    {adventure.highlights.map((highlight, i) => (
                      <span key={i} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                  <motion.button 
                    className="book-now-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('booking-modal').showModal()}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAdventures;
