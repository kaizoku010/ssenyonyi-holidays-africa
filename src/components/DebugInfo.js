import React, { useState, useEffect } from 'react';

const DebugInfo = () => {
  const [info, setInfo] = useState({
    publicUrl: process.env.PUBLIC_URL || 'Not set',
    nodeEnv: process.env.NODE_ENV || 'Not set',
    windowLocation: '',
    userAgent: '',
    screenSize: '',
    errors: []
  });

  useEffect(() => {
    // Capture any errors
    const originalConsoleError = console.error;
    const errors = [];
    
    console.error = (...args) => {
      errors.push(args.join(' '));
      setInfo(prev => ({ ...prev, errors: [...prev.errors, args.join(' ')] }));
      originalConsoleError.apply(console, args);
    };

    // Update window information
    setInfo(prev => ({
      ...prev,
      windowLocation: window.location.href,
      userAgent: navigator.userAgent,
      screenSize: `${window.innerWidth}x${window.innerHeight}`
    }));

    // Cleanup
    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  const styles = {
    container: {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: 9999,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      maxWidth: '400px',
      maxHeight: '300px',
      overflow: 'auto',
      fontSize: '12px',
      fontFamily: 'monospace'
    },
    heading: {
      margin: '0 0 10px 0',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    section: {
      marginBottom: '10px'
    },
    label: {
      fontWeight: 'bold',
      marginRight: '5px'
    },
    value: {
      wordBreak: 'break-all'
    },
    error: {
      color: '#ff6b6b',
      marginBottom: '5px',
      borderLeft: '3px solid #ff6b6b',
      paddingLeft: '5px'
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Debug Information</h3>
      
      <div style={styles.section}>
        <div>
          <span style={styles.label}>PUBLIC_URL:</span>
          <span style={styles.value}>{info.publicUrl}</span>
        </div>
        <div>
          <span style={styles.label}>NODE_ENV:</span>
          <span style={styles.value}>{info.nodeEnv}</span>
        </div>
        <div>
          <span style={styles.label}>Location:</span>
          <span style={styles.value}>{info.windowLocation}</span>
        </div>
        <div>
          <span style={styles.label}>Screen:</span>
          <span style={styles.value}>{info.screenSize}</span>
        </div>
      </div>
      
      {info.errors.length > 0 && (
        <div style={styles.section}>
          <div style={styles.label}>Errors:</div>
          {info.errors.map((error, index) => (
            <div key={index} style={styles.error}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DebugInfo;
