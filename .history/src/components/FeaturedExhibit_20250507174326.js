import React, { useRef, useEffect } from 'react';
import './ScrollPane.css';

const ScrollSlider = () => {
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const rightPanel = rightPanelRef.current;
      if (rightPanel) {
        rightPanel.style.transform = `translateX(-${scrollTop}px)`;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="container">
      <div className="left-panel">
        <h1>This side should remain static while the right side slides in each panel on scroll.</h1>
        <p>This section can repeat more than once on the same page, so we need to create an array of sections that animate the same way.</p>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="right-panel" ref={rightPanelRef}>
        <div className="panel" style={{ backgroundColor: '#7A4E1D' }}></div>
        <div className="panel" style={{ backgroundColor: '#9B652A' }}></div>
        <div className="panel" style={{ backgroundColor: '#B67C3D' }}></div>
      </div>
    </div>
  );
};

export default ScrollSlider;
