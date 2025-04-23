import React, { useState, useEffect } from 'react';
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

      {showScrollTop && (
        <div className="scroll-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default HomePage;
