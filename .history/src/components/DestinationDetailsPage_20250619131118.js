import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import '../styles/PackageDetailsPage.css';
import CallToAction from './CallToAction';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import destinationsData from '../data/destinations.json';
import"destination"

const imageMap = {
  'kitandra.jpg': kitandra,
  'kitandra2.jpg': kitandra2,
};

const destinations = destinationsData.map(dest => ({
  ...dest,
  image: imageMap[dest.image] || dest.image,
  gallery: (dest.gallery || [dest.image]).map(img => imageMap[img] || img),
}));

const DestinationDetailsPage = () => {
  const { id } = useParams();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const destData = destinations.find(dest => dest.id === parseInt(id));
    if (destData) {
      setSelectedDestination({
        ...destData,
        image: imageMap[destData.image] || destData.image,
        gallery: (destData.gallery || [destData.image]).map(img => imageMap[img] || img),
      });
      document.title = `${destData.name} | Deriq Travels`;
    }
  }, [id]);

  const nextImage = () => {
    if (selectedDestination) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedDestination.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedDestination) {
      setCurrentImageIndex(currentImageIndex === 0 ? selectedDestination.gallery.length - 1 : currentImageIndex - 1);
    }
  };

  if (!selectedDestination) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading destination details...</p>
      </div>
    );
  }

  return (
    <div className="package-details-page">
      <header className="details-hero">
        <Navbar />
        <div className="hero-content-">
          <div className="package-type-badge">{selectedDestination.category}</div>
          <h1>{selectedDestination.name}</h1>
          <div className="package-destinations">
            <i className="fas fa-map-marker-alt"></i> {selectedDestination.country}
          </div>
        </div>
      </header>

      <main className="details-content">
        <div className="details-overview">
          <div className="gallery-section">
            <div className="main-image">
              <img src={selectedDestination?.gallery[currentImageIndex]} alt={`${selectedDestination?.name} - Gallery image ${currentImageIndex + 1}`} />
              <button className="gallery-nav prev" onClick={prevImage}><i className="fas fa-chevron-left"></i></button>
              <button className="gallery-nav next" onClick={nextImage}><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className="thumbnail-container">
              {selectedDestination.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="package-tabs">
          <Tabs defaultValue="overview" className="tabs">
            <TabsList className="tabs-list">
              {/* <TabsTrigger className="tabs-trigger" value="overview">Overview</TabsTrigger> */}
              {/* <TabsTrigger className="tabs-trigger" value="highlights">Highlights</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="activities">Activities</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="map">Map</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="reviews">Reviews</TabsTrigger> */}
            </TabsList>

            <TabsContent value="overview" className="tabs-content tab-content">
              <h2>About {selectedDestination.name}</h2>
              <p className="package-description">{selectedDestination.description}</p>
            </TabsContent>

            <TabsContent value="highlights" className="tabs-content tab-content">
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {selectedDestination.highlights.map((highlight, index) => (
                  <li key={index}><i className="fas fa-check-circle"></i> {highlight}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="activities" className="tabs-content tab-content">
              <h2>Activities & Experiences</h2>
              <div className="package-details-activities-grid">
                {selectedDestination.activities.map((activity, index) => (
                  <div key={index} className="package-details-activity-card" id={`activity-card-${index}`}>
                    <h3>{activity}</h3>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="map" className="tabs-content tab-content">
              <h2>Destination Map</h2>
              <div className="map-container">
                <iframe
                  src={`https://maps.google.com/maps?q=${selectedDestination.mapCoordinates.lat},${selectedDestination.mapCoordinates.lng}&z=6&output=embed`}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Destination Map"
                ></iframe>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="tabs-content tab-content">
              <h2>Traveler Reviews</h2>
              <div className="package-details-reviews-container">
                {selectedDestination.reviews.map(review => (
                  <div key={review.id} className="package-details-review-card" id={`review-card-${review.id}`}>
                    <div className="package-details-review-header">
                      <div className="package-details-reviewer-info">
                        <h3>{review.name}</h3>
                        <span className="package-details-review-date">{review.date}</span>
                      </div>
                      <div className="package-details-review-rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}></i>
                        ))}
                      </div>
                    </div>
                    <p className="package-details-review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default DestinationDetailsPage;
