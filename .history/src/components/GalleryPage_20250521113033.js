import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CallToAction from './CallToAction';
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
import Lounge from "../media/"


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
    description: 'Experience the thrill of seeing wildlife in their natural habitat.'
  },
  {
    id: 2,
    src: kitandra2,
    alt: 'Mountain landscape',
    category: 'landscape',
    width: 800,
    height: 1200,
    title: 'Mountain Majesty',
    description: 'Breathtaking views of East Africa\'s mountain ranges.'
  },
  {
    id: 3,
    src: Slide0,
    alt: 'Cultural experience',
    category: 'culture',
    width: 800,
    height: 800,
    title: 'Cultural Immersion',
    description: 'Connect with local communities and traditions.'
  },
  {
    id: 4,
    src: Slide1,
    alt: 'Luxury accommodation',
    category: 'accommodation',
    width: 800,
    height: 600,
    title: 'Luxury Stays',
    description: 'Comfortable and elegant accommodations in the heart of nature.'
  },
  {
    id: 5,
    src: Slide2,
    alt: 'Wildlife close-up',
    category: 'wildlife',
    width: 800,
    height: 1000,
    title: 'Wildlife Encounters',
    description: 'Get up close with Africa\'s most magnificent creatures.'
  },
  {
    id: 6,
    src: Slide3,
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
    height: 800,
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
    height: 600,
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
  }
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [columns, setColumns] = useState(3);

  // Filter images based on category
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeFilter));
    }
  }, [activeFilter]);

  // Adjust columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Create column arrays for masonry layout
  const createColumnArrays = () => {
    const columnArrays = Array.from({ length: columns }, () => []);
    
    filteredImages.forEach((image, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(image);
    });
    
    return columnArrays;
  };

  const columnArrays = createColumnArrays();

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

        <div className="gallery-masonry">
          {columnArrays.map((column, columnIndex) => (
            <div key={columnIndex} className="masonry-column">
              {column.map(image => (
                <div 
                  key={image.id} 
                  className="gallery-item"
                  onClick={() => openLightbox(image)}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="gallery-item-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

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
