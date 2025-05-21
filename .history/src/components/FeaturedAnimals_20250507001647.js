import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/FeaturedAnimals.css';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

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
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Start animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="featured-animals"
      ref={ref}
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="animals-container"
        variants={fadeIn("up", 0.2)}
      >
        <motion.div
          className="section-header"
          variants={fadeIn("down", 0.3)}
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FEATURED DESTINATIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our most popular travel experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="animals-grid"
          variants={staggerContainer(0.1, 0.5)}
        >
          {animals.map((animal, index) => (
            <motion.div
              key={animal.id}
              className="animal-card"
              variants={fadeIn("up", 0.1 * index)}
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
                  variants={fadeIn("up", 0.2)}
                >
                  <motion.span
                    className="animal-category"
                    variants={zoomIn(0.2, 0.5)}
                    whileHover={{ scale: 1.1 }}
                  >
                    {animal.category}
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div
                className="animal-name"
                variants={fadeIn("up", 0.3)}
              >
                {animal.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedAnimals;
