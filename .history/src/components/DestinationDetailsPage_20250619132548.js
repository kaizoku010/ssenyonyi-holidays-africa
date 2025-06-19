import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import '../styles/PackageDetailsPage.css';
import CallToAction from './CallToAction';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';
import destinationsData from '../data/destinations.json';
import"../styles/destination_details.css"

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
      <header className="details-hero-">
        <Navbar />
        <div className="hero-content-destination">
          <h1 className='destination_deatils_name'>{selectedDestination.name}</h1>
          {/* <div className="package-destinations">
            <i className="fas fa-map-marker-alt"></i> {selectedDestination.country}
          </div> */}
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
            </TabsList>

            <TabsContent value="overview" className="tabs-content tab-content">
              <h2>About {selectedDestination.name}</h2>
              <p className="package-description">{selectedDestination.description}</p>
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
