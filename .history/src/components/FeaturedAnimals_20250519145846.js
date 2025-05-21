import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FeaturedAnimals.css';
import kitandra from '../media/qq.jpg';
import kitandra2 from '../media/b2.jpg';
import Slide0 from '../media/sqaud.JPG';
import Slide1 from '../media/slide1.jpg';
import Slide2 from '../media/slide2.jpg';
import Slide3 from '../media/slide3.jpg';
import Slide4 from '../media/slide4.jpg';
import Slide5 from '../media/slide5.jpg';
import Slide6 from '../media/slide6.jpg';
import Slide7 from '../media/slide7.jpg';
import Slide8 from "../media/tt.png";
import Slide9 from "media/slide8.jpg";

// Gallery items with both images and videos
const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: kitandra,
    width: 'wide', // wide item (spans 2 columns)
    height: 'medium'
  },
  {
    id: 2,
    type: 'image',
    src: Slide2,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 3,
    type: 'image',
    src: Slide3,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 4,
    type: 'image',
    src: kitandra2,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 5,
    type: 'image',
    src: Slide0,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 6,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0',
    thumbnail: Slide1,
    width: 'wide',
    height: 'medium'
  },
  {
    id: 7,
    type: 'image',
    src: Slide4,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 8,
    type: 'image',
    src: Slide5,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 9,
    type: 'image',
    src: Slide6,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 10,
    type: 'image',
    src: Slide7,
    width: 'medium',
    height: 'medium'
  },
  {
    id: 11,
    type: 'image',
    src: kitandra,
    width: 'wide',
    height: 'medium'
  },
  {
    id: 12,
    type: 'image',
    src: kitandra2,
    width: 'wide',
    height: 'medium'
  }
];

const FeaturedAnimals = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    // Check if mobile (max-width: 768px)
    const checkMobile = () => setShowMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use the gallery items directly, but only show 4 on mobile
  const filteredItems = showMobile ? galleryItems.slice(0, 4) : galleryItems;

  // Simulate loading delay and then set loading to false
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle image load events
  const handleImageLoaded = (id) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Check if a specific item is loaded
  const isItemLoaded = (id) => {
    return !loading && loadedImages[id];
  };

  return (
    <section className="featured-animals">
      <div className="animals-container">
        <div className="gallery-header">
          <h1 className="heading">Africa through our lens</h1>
          <p className="subs">look through our lens as we capture the beauty of Africa</p>
        </div>

        <div className="gallery-filters">
          <div className="filter-item active">
            <span className="dot"></span>
            <span>People</span>
          </div>
          <div className="filter-item">
            <span>Art</span>
          </div>
          <div className="filter-item">
            <span>Culture</span>
          </div>
          <div className="filter-item">
            <span>Landscapes</span>
          </div>
          <div className="filter-item">
            <span>Life style</span>
          </div>
        </div>

        <div className="masonry-gallery">
          {filteredItems.map((item) => (
            <Link
              to="/gallery"
              key={item.id}
              className={`masonry-item ${item.width} ${loading ? 'loading' : ''}`}
            >
              <div className="masonry-content">
                {loading ? (
                  <div className="placeholder-loading"></div>
                ) : (
                  <>
                    {item.type === 'image' ? (
                      <>
                        <img
                          src={item.src}
                          alt=""
                          onLoad={() => handleImageLoaded(item.id)}
                          className={loadedImages[item.id] ? 'loaded' : ''}
                        />
                        {!loadedImages[item.id] && <div className="placeholder-loading"></div>}
                      </>
                    ) : (
                      <iframe
                        src={item.src}
                        title="Gallery video"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => handleImageLoaded(item.id)}
                      ></iframe>
                    )}
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
