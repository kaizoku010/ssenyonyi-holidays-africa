import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
import { fadeIn, staggerContainer } from '../utils/animations';

const HomePage = () => {
  // Animation controls for sections
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Start animations when sections come into view
  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="home-page"
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.1, 0.1)}
    >
      <motion.header
        className="hero-section"
        variants={fadeIn("down", 0.1)}
      >
        <Navbar />
        <DestinationSlider autoPlayInterval={5000} />
      </motion.header>

      <motion.main
        ref={ref}
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={fadeIn("up", 0.1)}>
          <AboutSection />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.2)}>
          <VisitorStats />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.3)}>
          <FeaturedAnimals />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.4)}>
          <SpecialFeatures />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.5)}>
          <LatestNews />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)}>
          <FeaturedExhibit />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.7)}>
          <CallToAction />
        </motion.div>

        <motion.div variants={fadeIn("up", 0.8)}>
          <Partners />
        </motion.div>
      </motion.main>

      <motion.footer
        variants={fadeIn("up", 0.9)}
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
};

export default HomePage;
