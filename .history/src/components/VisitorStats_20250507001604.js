import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/VisitorStats.css';
import { fadeIn, staggerContainer, pulseAnimation } from '../utils/animations';

const stats = [
  {
    id: 1,
    number: '250+',
    label: 'DESTINATIONS',
    icon: 'fas fa-map-marker-alt'
  },
  {
    id: 2,
    number: '10K+',
    label: 'TRAVELERS',
    icon: 'fas fa-users'
  },
  {
    id: 3,
    number: '15+',
    label: 'YEARS',
    icon: 'fas fa-calendar-alt'
  },
  {
    id: 4,
    number: '98%',
    label: 'SATISFACTION',
    icon: 'fas fa-heart'
  },
  {
    id: 5,
    number: '24/7',
    label: 'SUPPORT',
    icon: 'fas fa-headset'
  }
];

const VisitorStats = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
      className="visitor-stats"
      ref={ref}
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="stats-container"
        variants={staggerContainer(0.2, 0.1)}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="stat-item"
            variants={fadeIn("up", index * 0.1)}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="stat-icon"
              variants={pulseAnimation}
              animate="animate"
            >
              <i className={stat.icon}></i>
            </motion.div>
            <motion.div
              className="stat-number"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                type: "spring"
              }}
            >
              {stat.number}
            </motion.div>
            <motion.div
              className="stat-label"
              variants={fadeIn("up", 0.5 + index * 0.1)}
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default VisitorStats;
