import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import HomePage from './components/HomePage';
import PackagesPage from './components/PackagesPage';
import PackageDetailsPage from './components/PackageDetailsPage';
import DestinationsPage from './components/DestinationsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import ImageSlider from './components/ImageSlider';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import SocialLinks from './components/SocialLinks';
import LanguageSwitcher from './components/LanguageSwitcher';
import './mobile.css';
import './styles.css';
import './styles/shadcn.css';

function App() {
  // State to toggle between coming soon page and full homepage
  const [showFullSite, setShowFullSite] = useState(true);

  // Set launch date to 3 months from now
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 3);

  // Function to toggle between pages
  const toggleView = () => {
    setShowFullSite(!showFullSite);
  };

  if (showFullSite) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:id" element={<PackageDetailsPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ScrollToTop />
        <button
          onClick={toggleView}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
            padding: '10px 15px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          View Coming Soon Page
        </button>
      </Router>
    );
  }

  return (
    <div className="App">
      <ImageSlider />
      <div className="content-container">
        <div className="logo"><h4 className='logo-text'>NYONYI HOLIDAYS AFRICA</h4></div>
        {/* <div className="tagline">Experience the Uganda differently</div> */}
        <h1 id="coming-soon">COMING SOON</h1>
        <p id="desc">
          Get ready for an extraordinary travel experience with Nyonyi holidays Africa.
          We're crafting unforgettable adventures that will take you off the beaten path
          to discover hidden gems and authentic cultural experiences around Uganda.
        </p>
        {/* <CountdownTimer targetDate={launchDate.toISOString()} /> */}
        <NewsletterSignup />
        {/* <SocialLinks /> */}
        <div className="image-grid">
          <div id="cube-one" className="image-sec"></div>
          <div id="cube-two" className="image-sec"></div>
          <div id="cube-three" className="image-sec"></div>
        </div>
        <div className="image-grid">
          <div id="cube-four" className="image-sec"></div>
          <div id='cube-five' className="image-sec"></div>
          <div id="cube-six" className="image-sec"></div>
        </div>
        {/* <button
          onClick={toggleView}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: '1px solid white',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Preview Full Site
        </button> */}
      </div>
    </div>
  );
}

export default App;
