import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import SocialLinks from './components/SocialLinks';
import './mobile.css';

function App() {
  // Set launch date to 3 months from now
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 3);

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
          to discover hidden gems and authentic cultural experiences around the Uganda.
        </p>
        {/* <CountdownTimer targetDate={launchDate.toISOString()} /> */}
        <NewsletterSignup />
        {/* <SocialLinks /> */}
        {/* image grid */}
    <div className="image-grid">
    <div id="cube-one" className="image-sec">
    </div>
    <div id="cube-two" className="image-sec">
    </div>
    <div id="cube-three" className="image-sec">
    </div>
    </div>
    <div className="image-grid">
    <div id="cube-four" className="image-sec">
    </div>
    <div id='cube-five' className="image-sec">
    </div>
    <div id="cube-six" className="image-sec">
    </div>
    </div>
    </div>

    </div>
  );
}

export default App;
