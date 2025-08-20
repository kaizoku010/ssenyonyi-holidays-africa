import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import HomePage from './components/HomePage';
import PackagesPage from './components/PackagesPage';
import PackageDetailsPage from './components/PackageDetailsPage';
import DestinationsPage from './components/DestinationsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import EVChargingPage from './pages/EVChargingPage';
import ScrollToTop from './components/ScrollToTop';
import ImageSlider from './components/ImageSlider';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import SocialLinks from './components/SocialLinks';
import LanguageSwitcher from './components/LanguageSwitcher';
import { applyImageProtection } from './utils/imageProtection';
import './mobile.css';
import './styles.css';
import './styles/shadcn.css';
import TripPlannerPage from './components/TripPlannerPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import DestinationDetailsPage from './components/DestinationDetailsPage';

function App() {
  // State to toggle between coming soon page and full homepage
  const [showFullSite, setShowFullSite] = useState(true);
  const { t } = useTranslation();

  // Apply image protection when component mounts
  useEffect(() => {
    // Apply protection to prevent right-click and image downloads
    applyImageProtection();
  }, []);

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
          <Route path="/inquire-now" element={<ContactPage />} />
          <Route path="/about" element={<EVChargingPage />} />
          <Route path="/inquiries" element={<TripPlannerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/destination/:id" element={<DestinationDetailsPage />} />
        </Routes>
        <ScrollToTop />
{/*    
        <DevModeIndicator />
        <DevelopmentNotice /> */}
   
      </Router>
    );
  }

  return (
    <div className="App">
      <ImageSlider />
      <div className="content-container">
        <div className="logo"><h4 className='logo-text'>NYONYI HOLIDAYS AFRICA</h4></div>
        {/* <div className="tagline">Experience the Uganda differently</div> */}
        <h1 id="coming-soon">{t('comingSoon.title')}</h1>
        <p id="desc">
          {t('comingSoon.description')}
        </p>
        <div className="language-switcher-container" style={{ marginTop: '20px' }}>
          <LanguageSwitcher />
        </div>
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
      {/* <DevModeIndicator />
      <DevelopmentNotice /> */}
    </div>
  );
}

export default App;
