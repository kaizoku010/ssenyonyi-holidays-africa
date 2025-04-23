import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ImageSlider from './components/ImageSlider';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import SocialLinks from './components/SocialLinks';
import './mobile.css';
import './styles.css';

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
      <>
        <HomePage />
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
      </>
    );
  }

  return (
    <div className="App">
      <ImageSlider />
      <div className="content-container">
        <div className="logo"><h4 className='logo-text'>SSENYONYI HOLIDAYS AFRICA</h4></div>
        {/* <div className="tagline">Experience the Uganda differently</div> */}
        <h1 id="coming-soon">COMING SOON</h1>
        <p id="desc">
          Get ready for an extraordinary travel experience with Ssenyonyi holidays Africa.
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
        <button
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
        </button>
      </div>
    </div>
  );
}

export default App;
