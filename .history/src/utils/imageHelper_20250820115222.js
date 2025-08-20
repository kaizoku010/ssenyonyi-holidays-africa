/**
 * Helper function to get the correct image path in both development and production
 * @param {string} imageName - The name of the image file (e.g., 'kitandra.jpg')
 * @returns {string} The correct path to the image
 */
export const getImagePath = (imageName) => {
  // Use development path format in both environments
  try {
    return require(`../media/${imageName}`);
  } catch (e) {
    return `/media/${imageName}`;
  }
};

/**
 * Helper function to get the correct image path for a component that's using an imported image
 * @param {string|object} src - The image source (either a string path or an imported image object)
 * @returns {string} The correct path to use
 */
export const getImageSrc = (src) => {
  // If it's already a string with a path, return it
  if (typeof src === 'string') {
    // If it's a relative path, convert to absolute
    if (src.startsWith('./') || src.startsWith('../')) {
      const parts = src.split('/');
      const filename = parts[parts.length - 1];
      return `../media/${filename}`;
    }
    return src;
  }

  // If it's an imported image object (webpack processed), extract the filename
  if (src && typeof src === 'object' && src.toString) {
    const srcString = src.toString();
    const match = srcString.match(/\/([^/]+\.(jpg|jpeg|png|gif|JPG))$/);
    if (match && match[1]) {
      return `/media/${match[1]}`;
    }
  }

  // Fallback
  return src;
};