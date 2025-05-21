import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CallToAction from './CallToAction';
import Masonry from 'react-masonry-css';
import { useInView } from 'react-intersection-observer';
import '../styles/GalleryPage.css';

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
import Love from "../media/lov.png"
import Fire from "../media/fireplace.png"
import Deriq from "../media/deriq.jpg"
import Chimp from "../media/chimp.jpg"
import Lake from "../media/lake.jpg"
import Creast from "../media/creasts.jpg"
import Road from "../media/road.jpg"
import mach from "../media/mach.png"
import Lounge from "../media/louge.jpg"
import Dance from "../media/danc.JPG"


// Gallery data
const galleryImages = [
  {
    id: 1,
    src: Love,
    alt: 'Safari landscape with animals',
    category: 'wildlife',
    width: 800,
    height: 600,
    title: 'Safari Adventure',
    description: 'Experience the thrill of seeing wildlife in their natural habitat.',
    size: 'medium' // Added size property
  },
  {
    id: 2,
    src: kitandra2,
    alt: 'Mountain landscape',
    category: 'landscape',
    width: 800,
    height: 1200,
    title: 'Mountain Majesty',
    description: 'Breathtaking views of East Africa\'s mountain ranges.',
    size: 'large' // Added size property
  },
  {
    id: 3,
    src: Dance,
    alt: 'Cultural experience',
    category: 'culture',
    width: 800,
    height: 800,
    title: 'Cultural Immersion',
    description: 'Experience the rich cultural heritage of East Africa through immersive village visits, traditional ceremonies, and authentic interactions with local communities.',
    size: 'square' // Added size property
  },
  {
    id: 4,
    src: Slide1,
    alt: 'Luxury accommodation',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Luxury Stays',
    description: 'Comfortable and elegant accommodations in the heart of nature.',
    size: 'medium' // Added size property
  },
  {
    id: 5,
    src: Slide3,
    alt: 'Wildlife close-up',
    category: 'wildlife',
    width: 800,
    height: 1000,
    title: 'Wildlife Encounters',
    description: 'Get up close with Africa\'s most magnificent creatures.',
    size: 'large' // Added size property
  },
  {
    id: 6,
    src: Slide2,
    alt: 'Scenic landscape',
    category: 'landscape',
    width: 800,
    height: 600,
    title: 'Scenic Vistas',
    description: 'Panoramic views that will take your breath away.',
    size: 'medium' // Added size property
  },
  {
    id: 7,
    src: Slide4,
    alt: 'Adventure activity',
    category: 'adventure',
    width: 800,
    height: 800,
    title: 'Adventure Awaits',
    description: 'Thrilling activities for the adventurous traveler.',
    size: 'square' // Added size property
  },
  {
    id: 8,
    src: Slide5,
    alt: 'Local cuisine',
    category: 'culture',
    width: 800,
    height: 600,
    title: 'Culinary Delights',
    description: 'Taste the flavors of East African cuisine.',
    size: 'medium' // Added size property
  },
  {
    id: 9,
    src: Slide6,
    alt: 'Sunset over savanna',
    category: 'landscape',
    width: 800,
    height: 600,
    title: 'African Sunset',
    description: 'Witness the magical colors of an African sunset.',
    size: 'medium' // Added size property
  },
  {
    id: 10,
    src: Slide7,
    alt: 'Luxury tent accommodation',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Glamping Experience',
    description: 'Luxury camping under the stars.',
    size: 'medium' // Added size property
  },
  {
    id: 11,
    src: kitandra,
    alt: 'Safari vehicle',
    category: 'adventure',
    width: 800,
    height: 600,
    title: 'Safari Expedition',
    description: 'Explore the wilderness in comfortable safari vehicles.',
    size: 'medium' // Added size property
  },
  {
    id: 12,
    src: kitandra2,
    alt: 'Wildlife at watering hole',
    category: 'wildlife',
    width: 800,
    height: 1200,
    title: 'Watering Hole',
    description: 'Animals gather at a watering hole during the dry season.',
    size: 'large' // Added size property
  },
  {
    id: 13,
    src: Slide0,
    alt: 'Traditional dance',
    category: 'culture',
    width: 800,
    height: 800,
    title: 'Traditional Dance',
    description: 'Experience the rhythm and energy of traditional African dance.',
    size: 'square' // Added size property
  },
  {
    id: 14,
    src: Slide1,
    alt: 'Luxury lodge',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Safari Lodge',
    description: 'Relax in comfort after a day of adventure.',
    size: 'medium' // Added size property
  },
  {
    id: 15,
    src: Slide2,
    alt: 'Bird watching',
    category: 'wildlife',
    width: 800,
    height: 1000,
    title: 'Bird Watching',
    description: 'East Africa is a paradise for bird enthusiasts.',
    size: 'large' // Added size property
  },
  {
    id: 16,
    src: Fire,
    alt: 'Cozy fireplace',
    category: 'accommodation',
    width: 800,
    height: 1200,
    title: 'Fireside Comfort',
    description: 'Relax by a warm fireplace after your safari adventure.',
    size: 'large' // Added size property
  },
  {
    id: 17,
    src: Deriq,
    alt: 'Wildlife photographer',
    category: 'adventure',
    width: 800,
    height: 600,
    title: 'Capture the Moment',
    description: 'Professional photography guides to help you capture perfect wildlife shots.',
    size: 'medium' // Added size property
  },
  {
    id: 18,
    src: Chimp,
    alt: 'Chimpanzee in natural habitat',
    category: 'wildlife',
    width: 800,
    height: 1000,
    title: 'Primate Encounters',
    description: 'Observe our closest relatives in their natural habitat.',
    size: 'large' // Added size property
  },
  {
    id: 19,
    src: Lake,
    alt: 'Serene lake view',
    category: 'landscape',
    width: 800,
    height: 800,
    title: 'Tranquil Waters',
    description: 'Peaceful lake views that showcase East Africa\'s diverse landscapes.',
    size: 'square' // Added size property
  },
  {
    id: 20,
    src: Creast,
    alt: 'Mountain crests',
    category: 'landscape',
    width: 800,
    height: 1100,
    title: 'Mountain Peaks',
    description: 'Majestic mountain ranges that define East Africa\'s skyline.',
    size: 'large' // Added size property
  },
  {
    id: 21,
    src: Road,
    alt: 'Safari road',
    category: 'adventure',
    width: 800,
    height: 600,
    title: 'The Road Less Traveled',
    description: 'Journey through remote wilderness on exciting safari routes.',
    size: 'medium' // Added size property
  },
  {
    id: 22,
    src: mach,
    alt: 'Safari vehicle',
    category: 'adventure',
    width: 800,
    height: 700,
    title: 'Safari Machines',
    description: 'Our fleet of specialized vehicles designed for ultimate safari comfort.',
    size: 'medium-tall' // Added size property
  },
  {
    id: 23,
    src: Lounge,
    alt: 'Luxury lounge',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Luxury Lounge',
    description: 'Elegant spaces to unwind and share stories of your day\'s adventures.',
    size: 'medium' // Added size property
  }
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [visibleItems, setVisibleItems] = useState(12); // Initial number of items to show

  // Ref for infinite scroll detection
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Masonry breakpoints - optimized for mobile
  const breakpointColumnsObj = {
    default: 4, // Default to 4 columns
    1400: 3,    // 3 columns at 1400px
    1024: 2,    // 2 columns at 1024px
    768: 1      // 1 column at 768px
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
    // Reset scroll position when filter changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeFilter]);

  // Load more items when user scrolls to bottom
  useEffect(() => {
    if (inView && visibleItems < filteredImages.length) {
      // Add 8 more items when user scrolls to bottom
      setTimeout(() => {
        setVisibleItems(prev => Math.min(prev + 8, filteredImages.length));
      }, 300);
    }
  }, [inView, filteredImages.length, visibleItems]);

  // Handle image load events
  const handleImageLoaded = useCallback((id) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  }, []);

  // Initial loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced loading time for better UX

    return () => clearTimeout(timer);
  }, []);

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
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentImage(filteredImages[nextIndex]);
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentImage(filteredImages[prevIndex]);
  };

  // Function to get class name based on image size
  const getItemClassName = (size) => {
    switch(size) {
      case 'large':
        return 'gallery-item gallery-item-large';
      case 'square':
        return 'gallery-item gallery-item-square';
      case 'medium-tall':
        return 'gallery-item gallery-item-medium-tall';
      default:
        return 'gallery-item gallery-item-medium';
    }
  };

  return (
    <div className="gallery-page">
      <header className="gallery-hero">
        <Navbar />
        <div className="hero-content gallery-header-page">
          <h1>Explore the beauty and
            adventure of East Africa through our lens</h1>
          <p>
            Image by Deriq Sennoyni<br/>January 15, 2023
          </p>
        </div>
      </header>

      <main className="gallery-content">
        <div className="gallery-filters">
          <button
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-button ${activeFilter === 'wildlife' ? 'active' : ''}`}
            onClick={() => setActiveFilter('wildlife')}
          >
            Wildlife
          </button>
          <button
            className={`filter-button ${activeFilter === 'landscape' ? 'active' : ''}`}
            onClick={() => setActiveFilter('landscape')}
          >
            Landscapes
          </button>
          <button
            className={`filter-button ${activeFilter === 'culture' ? 'active' : ''}`}
            onClick={() => setActiveFilter('culture')}
          >
            Culture
          </button>
          <button
            className={`filter-button ${activeFilter === 'accommodation' ? 'active' : ''}`}
            onClick={() => setActiveFilter('accommodation')}
          >
            Accommodations
          </button>
          <button
            className={`filter-button ${activeFilter === 'adventure' ? 'active' : ''}`}
            onClick={() => setActiveFilter('adventure')}
          >
            Adventure
          </button>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery-masonry"
          columnClassName="masonry-column"
        >
          {isLoading ? (
            // Loading placeholders
            Array.from({ length: 8 }).map((_, index) => (
              <div key={`placeholder-${index}`} className="gallery-item-placeholder"></div>
            ))
          ) : (
            // Actual gallery items
            filteredImages.map(image => (
              <div
                key={image.id}
                className={getItemClassName(image.size)}
                onClick={() => openLightbox(image)}
              >
                {/* Future enhancement: Check if item is video and render video player */}
                {/* {image.type === 'video' ? (
                  <video autoPlay muted loop>
                    <source src={image.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={image.src} alt={image.alt} />
                )} */}
                <img src={image.src} alt={image.alt} />
                <div className="gallery-item-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </div>
            ))
          )}
        </Masonry>

        {lightboxOpen && currentImage && (
          <div className="lightbox">
            <div className="lightbox-overlay" onClick={closeLightbox}></div>
            <div className="lightbox-content">
              <button className="lightbox-close" onClick={closeLightbox}>
                <i className="fas fa-times"></i>
              </button>
              <button className="lightbox-nav prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="lightbox-image-container">
                <img src={currentImage.src} alt={currentImage.alt} />
                <div className="lightbox-caption">
                  <h3>{currentImage.title}</h3>
                  <p>{currentImage.description}</p>
                </div>
              </div>
              <button className="lightbox-nav next" onClick={nextImage}>
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

