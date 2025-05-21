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

  return (
    <div className="home-page">
      <header className="hero-section">
        <Navbar />
        <DestinationSlider autoPlayInterval={5000} />
      </header>

      <main>
        <AboutSection />
        <VisitorStats />
        <FeaturedAnimals />
        <SpecialFeatures />
        <LatestNews />
        <FeaturedExhibit />
        <CallToAction />
        <Partners />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
