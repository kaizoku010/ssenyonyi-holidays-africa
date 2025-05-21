import React, { useEffect, useRef } from 'react';
import './ScrollPanels.css';


const HorizontalScroller = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY + window.innerHeight;
      const start = container.offsetTop;
      const end = start + container.offsetHeight - window.innerHeight;

      if (window.scrollY >= start && window.scrollY <= end) {
        const scrollProgress = (window.scrollY - start) / (end - start);
        const maxTranslate = slider.scrollWidth - window.innerWidth;
        const translateX = -scrollProgress * maxTranslate;
        slider.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="horizontal-scroll-section" ref={containerRef}>
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
  );
};

export default ScrollSection;
