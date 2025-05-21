import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import DestinationSlider from './DestinationSlider';
import AboutSection from './AboutSection';
import VisitorStats from './VisitorStats';
import FeaturedAnimals from './FeaturedAnimals';
import SpecialFeatures from './SpecialFeatures';
import LatestNews from './LatestNews';
import FeaturedExhibit from './FeaturedExhibit';
import Partners from './Partners';
import CallToAction from './CallToAction';
import Footer from './Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  return (
    <div className="home-page">
      <header className="hero-section">
        <Navbar />
        <DestinationSlider autoPlayInterval={5000} />
      </header>

      <motion.main
        ref={ref}
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.div variants={itemVariant}>
          <AboutSection />
        </motion.div>

        <motion.div variants={itemVariant}>
          <VisitorStats />
        </motion.div>

        <motion.div variants={itemVariant}>
          <FeaturedAnimals />
        </motion.div>

        <motion.div variants={itemVariant}>
          <SpecialFeatures />
        </motion.div>

        <motion.div variants={itemVariant}>
          <LatestNews />
        </motion.div>

        <motion.div variants={itemVariant}>
          <FeaturedExhibit />
        </motion.div>

        <motion.div variants={itemVariant}>
          <CallToAction />
        </motion.div>

        <motion.div variants={itemVariant}>
          <Partners />
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default HomePage;
