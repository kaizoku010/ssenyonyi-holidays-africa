import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/FeaturedExhibit.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

// Sample featured experiences data
const featuredExperiences = [
  {
    id: 1,
    title: 'Serengeti Safari Adventure',
    description: 'Embark on an unforgettable journey through the vast plains of the Serengeti. Witness the majestic wildlife in their natural habitat, from lions and elephants to giraffes and zebras.',
    additionalInfo: 'Our expert guides will ensure you experience the best of African wildlife while staying in luxurious safari lodges under the starlit sky.',
    features: [
      '7-day immersive safari experience',
      'Witness the Great Migration',
      'Luxury accommodations included',
      'Professional wildlife photography tips'
    ],
    image: kitandra2
  },
  {
    id: 2,
    title: 'Mountain Gorilla Expedition',
    description: 'Trek through the misty forests of Bwindi to encounter endangered mountain gorillas in their natural habitat. A once-in-a-lifetime wildlife experience.',
    additionalInfo: 'Our experienced trackers will guide you safely through the forest to observe these magnificent creatures up close in a responsible and sustainable way.',
    features: [
      'Official gorilla trekking permits',
      'Expert local guides and trackers',
      'Comfortable forest accommodations',
      'Conservation contribution included'
    ],
    image: kitandra
  },
  {
    id: 3,
    title: 'Cultural Immersion Tour',
    description: 'Experience the rich cultural heritage of East Africa through immersive village visits, traditional ceremonies, and authentic interactions with local communities.',
    additionalInfo: 'Learn traditional crafts, participate in dance ceremonies, and gain insights into the daily lives and customs of diverse ethnic groups across Uganda and Rwanda.',
    features: [
      'Village homestay experiences',
      'Traditional cooking lessons',
      'Craft workshops with local artisans',
      'Authentic cultural performances'
    ],
    image: kitandra2
  },
  {
    id: 4,
    title: 'Lake Victoria Adventure',
    description: 'Explore the shores and islands of Africa\'s largest lake with activities ranging from boat safaris to sport fishing and bird watching in this biodiverse ecosystem.',
    additionalInfo: 'Relax on pristine beaches, visit traditional fishing villages, and enjoy spectacular sunsets over the vast waters of this magnificent freshwater lake.',
    features: [
      'Island hopping boat tours',
      'Premium sport fishing excursions',
      'Lakeside luxury accommodations',
      'Bird watching with expert guides'
    ],
    image: kitandra
  }
];

const FeaturedExhibit = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create individual transform values for each experience at the top level
  const yProgress0 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yProgress1 = useTransform(scrollYProgress, [0, 1], [25, -75]);
  const yProgress2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yProgress3 = useTransform(scrollYProgress, [0, 1], [75, -25]);

  // Store them in an array for easy access
  const yProgressValues = [yProgress0, yProgress1, yProgress2, yProgress3];

  return (
    <section className="featured-exhibit" ref={containerRef}>
      <div className="exhibit-container">
        <motion.div
          className="section-header"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>FEATURED EXPERIENCES</h2>
          <p>Discover our most extraordinary travel adventures</p>
        </motion.div>

        <div className="exhibits-scroll-container">
          {featuredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="exhibit-content"
              style={{ y: yProgressValues[index] }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="exhibit-text">
                <h2>FEATURED EXPERIENCE</h2>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <p>{experience.additionalInfo}</p>
                <ul className="exhibit-features">
                  {experience.features.map((feature, i) => (
                    <li key={i}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
                <motion.button
                  className="book-now-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book This Adventure
                </motion.button>
              </div>
              <div className="exhibit-image">
                <img src={experience.image} alt={experience.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibit;
