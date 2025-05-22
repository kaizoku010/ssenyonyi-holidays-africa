import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import CallToAction from './CallToAction';
import '../styles/GalleryPage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import images
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import Slide0 from '../media/slide.jpg';
import Slide1 from '../media/slide1.jpg';
import Slide2 from '../media/slide2.jpg';
import Slide3 from '../media/slide3.jpg';
import Slide4 from '../media/slide4.jpg';
import Slide5 from '../media/slide5.jpg';
import Slide6 from '../media/slide6.jpg';
import Slide7 from '../media/slide7.jpg';
import Love from "../media/lov.jpg"
import Fire from "../media/fireplace.jpg"
import Deriq from "../media/deriq.jpg"
import Chimp from "../media/chimp.jpg"
import Lake from "../media/lake.jpg"
import Creast from "../media/creasts.jpg"
import Road from "../media/road.jpg"
import mach from "../media/mach.j"
import Lounge from "../media/louge.jpg"
import Dance from "../media/danc.JPG"
import Vibes from "../media/vibes.JPG"


// Gallery data
const galleryImages = [

  {
    id: 2,
    src: Vibes,
    alt: 'Mountain landscape',
    category: 'landscape',
    width: 800,
    height: 1200,
    title: 'Beautiful Sunsets',
    description: 'Breathtaking views of Africa mountains ranges.'
  },
  {
    id: 1,
    src: Love,
    alt: 'Safari landscape with animals',
    category: 'wildlife',
    width: 800,
    height: 600,
    title: 'Safari Adventure',
    description: 'Experience the thrill of seeing wildlife in their natural habitat.'
  },
  {
    id: 3,
    src: Dance,
    alt: 'Cultural experience',
    category: 'culture',
    width: 800,
    height: 800,
    title: 'Cultural Immersion',
    description: 'Experience the rich cultural heritage of East Africa through immersive village visits, traditional ceremonies, and authentic interactions with local communities.'
  },
  {
    id: 5,
    src: Slide3,
    alt: 'Wildlife close-up',
    category: 'wildlife',
    width: 800,
    height: 1200,
    title: 'Wildlife Encounters',
    description: 'Get up close with Africa\'s most magnificent creatures.'
  },
  {
    id: 6,
    src: Slide2,
    alt: 'Scenic landscape',
    category: 'landscape',
    width: 800,
    height: 600,
    title: 'Scenic Vistas',
    description: 'Panoramic views that will take your breath away.'
  },
  {
    id: 7,
    src: Slide4,
    alt: 'Adventure activity',
    category: 'adventure',
    width: 800,
    height: 1200,
    title: 'Adventure Awaits',
    description: 'Thrilling activities for the adventurous traveler.'
  },
  {
    id: 8,
    src: Slide5,
    alt: 'Local cuisine',
    category: 'culture',
    width: 800,
    height: 600,
    title: 'Culinary Delights',
    description: 'Taste the flavors of East African cuisine.'
  },
  {
    id: 9,
    src: Slide6,
    alt: 'Sunset over savanna',
    category: 'landscape',
    width: 800,
    height: 1200,
    title: 'African Sunset',
    description: 'Witness the magical colors of an African sunset.'
  },
  {
    id: 10,
    src: Slide7,
    alt: 'Luxury tent accommodation',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Glamping Experience',
    description: 'Luxury camping under the stars.'
  },
  {
    id: 11,
    src: kitandra,
    alt: 'Safari vehicle',
    category: 'adventure',
    width: 800,
    height: 600,
    title: 'Safari Expedition',
    description: 'Explore the wilderness in comfortable safari vehicles.'
  },
  {
    id: 12,
    src: kitandra2,
    alt: 'Wildlife at watering hole',
    category: 'wildlife',
    width: 800,
    height: 1200,
    title: 'Watering Hole',
    description: 'Animals gather at a watering hole during the dry season.'
  },
  {
    id: 13,
    src: Slide0,
    alt: 'Traditional dance',
    category: 'culture',
    width: 800,
    height: 800,
    title: 'Traditional Dance',
    description: 'Experience the rhythm and energy of traditional African dance.'
  },
  {
    id: 14,
    src: Slide1,
    alt: 'Luxury lodge',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Safari Lodge',
    description: 'Relax in comfort after a day of adventure.'
  },
  {
    id: 15,
    src: Slide2,
    alt: 'Bird watching',
    category: 'wildlife',
    width: 800,
    height: 1000,
    title: 'Bird Watching',
    description: 'East Africa is a paradise for bird enthusiasts.'
  },
  {
    id: 16,
    src: Fire,
    alt: 'Cozy fireplace',
    category: 'accommodation',
    width: 800,
    height: 1200, // Taller image
    title: 'Fireside Comfort',
    description: 'Relax by a warm fireplace after your safari adventure.'
  },
  {
    id: 17,
    src: Deriq,
    alt: 'Wildlife photographer',
    category: 'adventure',
    width: 800,
    height: 600, // Standard image
    title: 'Capture the Moment',
    description: 'Professional photography guides to help you capture perfect wildlife shots.'
  },
  {
    id: 18,
    src: Chimp,
    alt: 'Chimpanzee in natural habitat',
    category: 'wildlife',
    width: 800,
    height: 1000, // Taller image
    title: 'Primate Encounters',
    description: 'Observe our closest relatives in their natural habitat.'
  },
  {
    id: 19,
    src: Lake,
    alt: 'Serene lake view',
    category: 'landscape',
    width: 800,
    height: 800, // Square image
    title: 'Tranquil Waters',
    description: 'Peaceful lake views that showcase East Africa\'s diverse landscapes.'
  },
  {
    id: 20,
    src: Creast,
    alt: 'Mountain crests',
    category: 'landscape',
    width: 800,
    height: 1100, // Very tall image
    title: 'Mountain Peaks',
    description: 'Majestic mountain ranges that define East Africa\'s skyline.'
  },
  {
    id: 21,
    src: Road,
    alt: 'Safari road',
    category: 'adventure',
    width: 800,
    height: 600, // Standard image
    title: 'The Road Less Traveled',
    description: 'Journey through remote wilderness on exciting safari routes.'
  },
  {
    id: 22,
    src: mach,
    alt: 'Safari vehicle',
    category: 'adventure',
    width: 800,
    height: 700, // Slightly taller
    title: 'Safari Machines',
    description: 'Our fleet of specialized vehicles designed for ultimate safari comfort.'
  },
  {
    id: 23,
    src: Lounge,
    alt: 'Luxury lounge',
    category: 'accommodation',
    width: 800,
    height: 600, // Standard image
    title: 'Luxury Lounge',
    description: 'Elegant spaces to unwind and share stories of your day\'s adventures.'
  }
];

const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState(12); // Initial number of visible items
  const galleryRef = useRef(null);
  // Determine size class based on image dimensions
  const getSizeClass = (image) => {
    const ratio = image.height / image.width;

    if (ratio > 1.3) return 'tall'; // Tall images
    if (ratio < 0.7) return 'wide'; // Wide images
    if (ratio >= 0.9 && ratio <= 1.1) return 'square'; // Square-ish images
    return 'standard'; // Standard images
  };

  // Filter images based on category
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeFilter));
    }
    // Reset visible items when filter changes
    setVisibleItems(12);
  }, [activeFilter]);

  // Add size classes to images
  const imagesWithSizeClass = filteredImages.map(image => ({
    ...image,
    sizeClass: getSizeClass(image)
  }));

  // Handle scroll to load more items
  const handleScroll = useCallback(() => {
    if (!galleryRef.current) return;

    const bottom = galleryRef.current.getBoundingClientRect().bottom;
    // If we're within 500px of the bottom of the gallery, load more items
    if (bottom - window.innerHeight < 500 && visibleItems < imagesWithSizeClass.length) {
      // Load 8 more items
      setVisibleItems(prev => Math.min(prev + 8, imagesWithSizeClass.length));
    }
  }, [visibleItems, imagesWithSizeClass]);

  // Debounce function to limit scroll event firing
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Add scroll event listener with debounce
  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [handleScroll]);

  // Open lightbox with selected image
  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = imagesWithSizeClass.findIndex(img => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % imagesWithSizeClass.length;
    setCurrentImage(imagesWithSizeClass[nextIndex]);
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = imagesWithSizeClass.findIndex(img => img.id === currentImage.id);
    const prevIndex = currentIndex === 0 ? imagesWithSizeClass.length - 1 : currentIndex - 1;
    setCurrentImage(imagesWithSizeClass[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <header className="gallery-hero">
        <Navbar />
        <div className="hero-content gallery-header-page">
          <h1>{t('galleryPage.hero.title')}</h1>
          <p>
            {t('galleryPage.hero.imageBy')}<br/>{t('galleryPage.hero.date')}
          </p>
        </div>
      </header>

      <main className="gallery-content">
        <div className="gallery-filters">
          <button
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t('galleryPage.filters.all')}
          </button>
          <button
            className={`filter-button ${activeFilter === 'wildlife' ? 'active' : ''}`}
            onClick={() => setActiveFilter('wildlife')}
          >
            {t('galleryPage.filters.wildlife')}
          </button>
          <button
            className={`filter-button ${activeFilter === 'landscape' ? 'active' : ''}`}
            onClick={() => setActiveFilter('landscape')}
          >
            {t('galleryPage.filters.landscapes')}
          </button>
          <button
            className={`filter-button ${activeFilter === 'culture' ? 'active' : ''}`}
            onClick={() => setActiveFilter('culture')}
          >
            {t('galleryPage.filters.culture')}
          </button>
          <button
            className={`filter-button ${activeFilter === 'accommodation' ? 'active' : ''}`}
            onClick={() => setActiveFilter('accommodation')}
          >
            {t('galleryPage.filters.accommodations')}
          </button>
          <button
            className={`filter-button ${activeFilter === 'adventure' ? 'active' : ''}`}
            onClick={() => setActiveFilter('adventure')}
          >
            {t('galleryPage.filters.adventure')}
          </button>
        </div>

        <div className="gallery-mosaic" ref={galleryRef}>
          {imagesWithSizeClass.slice(0, visibleItems).map(image => (
            <div
              key={image.id}
              className={`gallery-item ${image.sizeClass}`}
              onClick={() => openLightbox(image)}
            >
              <div className="image-placeholder">
                <div className="placeholder-shimmer"></div>
              </div>
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                effect="blur"
                threshold={100} // Lower threshold for earlier loading
                visibleByDefault={false}
                delayMethod="throttle"
                delayTime={200}
                wrapperClassName="lazy-image-wrapper"
                placeholderSrc={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${image.width} ${image.height}'%3E%3C/svg%3E`}
              />
              <div className="gallery-item-overlay">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
          {visibleItems < imagesWithSizeClass.length && (
            <div className="load-more-indicator">
              <div className="placeholder-shimmer"></div>
            </div>
          )}
        </div>

        {lightboxOpen && currentImage && (
          <div className="lightbox">
            <div className="lightbox-overlay" onClick={closeLightbox}></div>
            <div className="lightbox-content">
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label={t('galleryPage.lightbox.close')}
              >
                <i className="fas fa-times"></i>
              </button>
              <button
                className="lightbox-nav prev"
                onClick={prevImage}
                aria-label={t('galleryPage.lightbox.previous')}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="lightbox-image-container">
                <LazyLoadImage
                  src={currentImage.src}
                  alt={currentImage.alt}
                  effect="blur"
                  wrapperClassName="lightbox-image-wrapper"
                  beforeLoad={() => {
                    try {
                      // Pre-load next and previous images for smoother navigation
                      if (currentImage && imagesWithSizeClass.length > 1) {
                        const currentIndex = imagesWithSizeClass.findIndex(img => img.id === currentImage.id);
                        if (currentIndex !== -1) {
                          const nextIndex = (currentIndex + 1) % imagesWithSizeClass.length;
                          const prevIndex = currentIndex === 0 ? imagesWithSizeClass.length - 1 : currentIndex - 1;

                          // Create image objects to preload
                          new Image().src = imagesWithSizeClass[nextIndex].src;
                          new Image().src = imagesWithSizeClass[prevIndex].src;
                        }
                      }
                    } catch (error) {
                      console.log('Error preloading images:', error);
                    }
                  }}
                  visibleByDefault={true} // Show immediately in lightbox
                  placeholderSrc={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${currentImage.width} ${currentImage.height}'%3E%3C/svg%3E`}
                />
                <div className="lightbox-caption">
                  <h3>{currentImage.title}</h3>
                  <p>{currentImage.description}</p>
                </div>
              </div>
              <button
                className="lightbox-nav next"
                onClick={nextImage}
                aria-label={t('galleryPage.lightbox.next')}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default GalleryPage;

