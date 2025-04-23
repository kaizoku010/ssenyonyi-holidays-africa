import React, { useState, useEffect } from 'react';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

import Slide0 from '../media/slide.jpg';
import Slide1 from '../media/slide1.jpg';
import Slide2 from '../media/slide2.jpg';
import Slide3 from '../media/slide3.jpg';
import Slide4 from '../media/slide4.jpg';
import Slide5 from '../media/slide5.jpg';
import Slide6 from '../media/slide6.jpg';
import Slide7 from '../media/slide7.jpg';

import '../styles/ImageSlider.css';

const ImageSlider = () => {
  const images = [kitandra, kitandra2, Slide0, Slide1, Slide2, 
    Slide3, Slide4, Slide5, Slide6, Slide7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div 
        id="slider"
          key={index} 
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      {/* <div className="slider-indicators">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
