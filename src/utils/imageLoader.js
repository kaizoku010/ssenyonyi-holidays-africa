/**
 * Utility for loading images with fallbacks
 */

/**
 * Attempts to load an image with fallbacks
 * @param {string} imagePath - The primary image path to try
 * @param {string} fallbackPath - Optional fallback path if the primary fails
 * @returns {string} The resolved image path
 */
export const getImagePath = (imagePath, fallbackPath = null) => {
  // If we're in development, just return the original path
  if (process.env.NODE_ENV === 'development') {
    return imagePath;
  }

  try {
    // For imported images, they should already be processed by webpack
    if (typeof imagePath === 'string' && imagePath.startsWith('http')) {
      return imagePath;
    }

    // For imported images that are processed by webpack
    if (typeof imagePath === 'object' || typeof imagePath !== 'string') {
      return imagePath;
    }

    // For relative paths, try to resolve them to the public URL
    if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
      // Extract just the filename
      const filename = imagePath.split('/').pop();
      
      // Try to use the public URL version
      return `${process.env.PUBLIC_URL}/images/${filename}`;
    }

    // Default case, return the original
    return imagePath;
  } catch (error) {
    console.error('Error loading image:', error);
    
    // If we have a fallback, use it
    if (fallbackPath) {
      return fallbackPath;
    }
    
    // Last resort, return a placeholder
    return 'https://via.placeholder.com/400x300?text=Image+Not+Found';
  }
};

/**
 * Component to render an image with fallback
 * @param {Object} props - Component props
 * @returns {JSX.Element} Image element with fallback handling
 */
export const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const handleError = (e) => {
    // If the image fails to load, try the public URL version
    if (typeof src === 'string' && !src.includes('/images/')) {
      const filename = src.split('/').pop();
      e.target.src = `${process.env.PUBLIC_URL}/images/${filename}`;
    } else {
      // If that also fails, use a placeholder
      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
    }
  };

  return (
    <img 
      src={src} 
      alt={alt || ''} 
      className={className || ''} 
      onError={handleError}
      {...props}
    />
  );
};
