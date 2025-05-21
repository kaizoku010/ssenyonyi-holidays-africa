import React, { useState, useEffect } from 'react';
import { isProtectionDisabled, toggleImageProtection } from '../utils/imageProtection';

/**
 * A component that displays a message when image protection is disabled
 * Only visible in development mode or when protection is manually disabled
 */
const DevModeIndicator = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if protection is disabled
    setIsDisabled(isProtectionDisabled());
  }, []);

  // Don't render anything if protection is enabled
  if (!isDisabled) {
    return null;
  }

  // Hide the indicator after clicking the close button
  const hideIndicator = () => {
    setIsVisible(false);
  };

  // Toggle protection on/off
  const handleToggle = () => {
    toggleImageProtection();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        zIndex: 9999,
        fontSize: '14px',
        maxWidth: '300px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <strong>Developer Mode Active</strong>
        <button
          onClick={hideIndicator}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '0',
            marginLeft: '10px',
          }}
        >
          ×
        </button>
      </div>
      <p style={{ margin: '0 0 10px 0' }}>
        Image protection is currently disabled. Right-click and image saving are allowed.
      </p>
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
      >
        Enable Protection
      </button>
      <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.8 }}>
        <code>toggleImageProtection()</code> in console to toggle
      </div>
    </div>
  );
};

export default DevModeIndicator;
