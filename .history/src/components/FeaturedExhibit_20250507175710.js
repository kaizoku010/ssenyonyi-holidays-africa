import React, { useEffect, useRef } from 'react';
import './ScrollPanels.css';

const HorizontalScroller = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      
      if (scrollTop >= offsetTop && scrollTop <= offsetTop + sectionHeight) {
        const progress = (scrollTop - offsetTop) / sectionHeight;
        const maxTranslate = slider.scrollWidth - window.innerWidth;
        const translateX = -progress * maxTranslate;
        slider.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="horizontal-scroll-section" ref={sectionRef}>
      <div className="sticky-container">
        <div className="left">
          <h1>This side stays fixed</h1>
          <p>Panels scroll horizontally. After they're done, page scroll resumes.</p>
        </div>
        <div className="right">
          <div className="slider" ref={sliderRef}>
            <div className="panel brown1"></div>
            <div className="panel brown2"></div>
            <div className="panel brown3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
