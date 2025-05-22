/**
 * Helper function to get the correct image path in both development and production
 * @param {string} imageName - The name of the image file (e.g., 'kitandra.jpg')
 * @returns {string} The correct path to the image
 */
export const getImagePath = (imageName) => {
  // In development, use the imported image
  if (process.env.NODE_ENV === 'development') {
    try {
      // Try to import from src/media
      return require(`../media/${imageName}`);
    } catch (error) {
      console.warn(`Failed to load image from src/media/${imageName}`, error);
    }
  }
  
  // In production, use the public URL
  return `${process.env.PUBLIC_URL}/media/${imageName}`;
};

/**
 * React component for displaying images with fallback
 */
export const ImageWithFallback = ({ src, alt, className, ...props }) => {
  // If src is a string (filename), convert it to a path
  const imageSrc = typeof src === 'string' && !src.includes('/') 
    ? getImagePath(src) 
    : src;
    
  // Handle image load errors
  const handleError = (e) => {
    console.warn(`Failed to load image: ${e.target.src}`);
    
    // Try the public URL as fallback
    if (!e.target.src.includes('/media/')) {
      const filename = e.target.src.split('/').pop();
      e.target.src = `${process.env.PUBLIC_URL}/media/${filename}`;
    } else {
      // If that also fails, use a placeholder
      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
    }
  };
  
  return (
    <img 
      src={imageSrc} 
      alt={alt || ''} 
      className={className || ''} 
      onError={handleError}
      {...props}
    />
  );
};
