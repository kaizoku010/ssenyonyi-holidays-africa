/**
 * Utility functions to prevent image downloading and right-clicking
 */

/**
 * Prevents the default context menu from appearing on right-click
 * @param {Event} e - The context menu event
 */
export const preventContextMenu = (e) => {
  e.preventDefault();
  return false;
};

/**
 * Prevents image dragging
 * @param {Event} e - The drag start event
 */
export const preventImageDrag = (e) => {
  e.preventDefault();
  return false;
};

/**
 * Prevents keyboard shortcuts that could be used to save images
 * @param {Event} e - The keydown event
 */
export const preventSaveShortcuts = (e) => {
  // Prevent Ctrl+S, Ctrl+U, F12
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    return false;
  }
};

/**
 * Applies protection to an individual image element
 * @param {HTMLImageElement} img - The image element to protect
 */
export const protectImage = (img) => {
  img.addEventListener('contextmenu', preventContextMenu);
  img.style.webkitUserDrag = 'none';
  img.style.webkitTouchCallout = 'none';
  img.setAttribute('draggable', 'false');
};

/**
 * Applies all image protection event listeners to the document
 */
export const applyImageProtection = () => {
  // Prevent right-click context menu
  document.addEventListener('contextmenu', preventContextMenu);

  // Prevent image dragging
  document.addEventListener('dragstart', preventImageDrag);

  // Prevent keyboard shortcuts
  document.addEventListener('keydown', preventSaveShortcuts);

  // Add CSS to prevent user-select and pointer events on images
  const style = document.createElement('style');
  style.innerHTML = `
    img {
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
      -webkit-touch-callout: none;
    }
  `;
  document.head.appendChild(style);

  // Disable browser's save image functionality for existing images
  document.querySelectorAll('img').forEach(protectImage);

  // Set up a MutationObserver to watch for dynamically added images
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach((node) => {
          // Check if the added node is an image
          if (node.nodeName === 'IMG') {
            protectImage(node);
          }
          // Check if the added node contains images
          if (node.querySelectorAll) {
            node.querySelectorAll('img').forEach(protectImage);
          }
        });
      }
    });
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

/**
 * Removes all image protection event listeners from the document
 */
export const removeImageProtection = () => {
  document.removeEventListener('contextmenu', preventContextMenu);
  document.removeEventListener('dragstart', preventImageDrag);
  document.removeEventListener('keydown', preventSaveShortcuts);
};
