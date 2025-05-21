import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * A component that displays a "Website Under Development" notice
 * in the bottom left corner of the screen
 */
const DevelopmentNotice = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  // Hide the notice after clicking the close button
  const hideNotice = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: 'rgba(220, 53, 69, 0.9)', // Bootstrap danger red with transparency
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        zIndex: 9999,
        fontSize: '14px',
        maxWidth: '300px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
        <strong style={{ fontSize: '16px' }}>
          {t('development.notice', 'Website Under Development')}
        </strong>
        <button
          onClick={hideNotice}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px',
            padding: '0',
            marginLeft: '10px',
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.4' }}>
        {t('development.message', 'This website is currently under active development. Some features may not work as expected.')}
      </p>
    </motion.div>
  );
};

export default DevelopmentNotice;
