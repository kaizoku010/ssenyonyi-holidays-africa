import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Mdx.css';

const Mdx = ({ image, location, title, subtitle }) => {
  return (
    <motion.div
      className="destination-card-mdx"
      style={{ backgroundImage: `url(${image})` }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="card-content-mdx"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card-location-mdx"
          whileHover={{ scale: 1.05 }}
        >
          {location}
        </motion.div>
        <motion.div
          className="card-title-mdx"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.div>
        <motion.div
          className="card-subtitle-mdx"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mdx;
