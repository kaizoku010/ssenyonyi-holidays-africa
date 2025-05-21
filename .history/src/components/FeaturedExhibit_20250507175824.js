import React, { useEffect, useRef } from 'react';
import './ScrollSection.css';

const ScrollSection = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      const slider = sliderRef.current;

      if (!container || !slider) return;

      const scrollTop = window.scrollY;
      const offsetTop = container.offsetTop;
      const height = container.offsetHeight;
      const maxScroll = slider.scrollWidth - window.innerWidth;

      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - offsetTop) / (height - window.innerHeight))
      );

      slider.style.transform = `translateX(-${progress * maxScroll}px)`;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="left">
        <h1>This side should remain static while the right side slides</h1>
        <p>This section can repeat more than once...</p>
      </div>
      <div className="right-wrapper">
        <div className="right-slider" ref={sliderRef}>
          <div className="panel brown1"></div>
          <div className="panel brown2"></div>
          <div className="panel brown3"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
