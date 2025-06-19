import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { C ard, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import '../styles/PackageDetailsPage.css';
import packagesData from '../data/packages.json';
import CallToAction from './CallToAction';

// Import images - using existing images as placeholders
const imageMap = {

  'mount.jpg': require('../media/mount.jpg'),
  'mach.jpg': require('../media/mach.jpg'),
  'gols.jpg': require('../media/gols.jpg'),
  'chimp.jpg': require('../media/chimp.jpg'),


};
console.log("packages found: ", packagesData)

// Package data (same as in PackagesPage.js)
const packages = packagesData.map(pkg => ({
  ...pkg,
  image: imageMap[pkg.image] || pkg.image,
  gallery: (pkg.gallery || [pkg.image]).map(img => imageMap[img] || img),
  video: pkg.video || '',
  itinerary: pkg.itinerary || [],
  activities: pkg.activities || [],
  mapCoordinates: pkg.mapCoordinates || { lat: 0, lng: 0 },
  reviews: pkg.reviews || [],
}));



const PackageDetailsPage = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paymentStep, setPaymentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: 2,
    date: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  useEffect(() => {
    // Find the package with the matching ID
    const packageData = packages.find(pkg => pkg.id === parseInt(id));
    if (packageData) {
      setSelectedPackage(packageData);
      // Set document title
      document.title = `${packageData.title} | Deriq Travels`;
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setPaymentStep(paymentStep + 1);
  };

  const prevStep = () => {
    setPaymentStep(paymentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    alert('Booking confirmed! A confirmation email has been sent to your inbox.');
    setShowPaymentModal(false);
    setPaymentStep(1);
  };

  const nextImage = () => {
    if (selectedPackage) {
      setCurrentImageIndex((currentImageIndex + 1) % selectedPackage.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedPackage) {
      setCurrentImageIndex(currentImageIndex === 0 ? selectedPackage.gallery.length - 1 : currentImageIndex - 1);
    }
  };

  if (!selectedPackage) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading package details...</p>
      </div>
    );
  }

  return (
    <div className="package-details-page">
      <header className="details-hero">
        <Navbar />
        <div className="hero-content-">
          <div className="package-type-badge">{selectedPackage.type}</div>
          <h1>{selectedPackage.title}</h1>
          <p className="package-duration">{selectedPackage.duration}</p>
          <div className="package-destinations">
            <i className="fas fa-map-marker-alt"></i> {selectedPackage.destinations.join(" → ")}
          </div>
        </div>
      </header>

      <main className="details-content">
        <div className="details-overview">
          <div className="gallery-section">
            <div className="main-image">
              <img src={selectedPackage?.gallery[currentImageIndex]} alt={`${selectedPackage?.title} - Gallery image ${currentImageIndex + 1}`} />
              <button className="gallery-nav prev" onClick={prevImage}><i className="fas fa-chevron-left"></i></button>
              <button className="gallery-nav next" onClick={nextImage}><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className="thumbnail-container">
              {selectedPackage.gallery.map((image, index) => (
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
              <TabsTrigger className="tabs-trigger" value="overview">Overview</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="activities">Activities</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="map">Map</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="tabs-content tab-content">
              <h2>Package Overview</h2>
              <p className="package-description">{selectedPackage.description}</p>

              <div className="highlights-section">
                <h3>Highlights</h3>
                <ul className="highlights-list">
                  {selectedPackage.highlights.map((highlight, index) => (
                    <li key={index}><i className="fas fa-check-circle"></i> {highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="accommodation-section">
                <h3>Accommodation</h3>
                <p>{selectedPackage.accommodation}</p>
              </div>

              <div className="inclusions-section">
                <h3>Inclusions</h3>
                <p>{selectedPackage.inclusions}</p>
              </div>

              <div className="video-section">
                <h3>Package Video</h3>
                <div className="video-container">
                  <iframe
                    src={selectedPackage.video}
                    title={`${selectedPackage.title} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="itinerary" className="tabs-content tab-content">
              <h2>Detailed Itinerary</h2>
              <div className="itinerary-timeline">
                {selectedPackage.itinerary.map((day, index) => (
                  <div key={index} className="itinerary-day">
                    <div className="day-number">Day {day.day}</div>
                    <div className="day-content">
                      <h3>{day.title}</h3>
                      <p>{day.description}</p>
                      <div className="accommodation-note">
                        <i className="fas fa-bed"></i> <strong>Accommodation:</strong> {day.accommodation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="tabs-content tab-content">
              <h2>Activities & Experiences</h2>
              <div className="package-details-activities-grid">
                {selectedPackage.activities.map((activity, index) => (
                  <div key={index} className="package-details-activity-card" id={`activity-card-${index}`}>
                    <div className="package-details-activity-icon">
                      <i className={`fas ${activity.icon}`}></i>
                    </div>
                    <h3>{activity.name}</h3>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="map" className="tabs-content tab-content">
              <h2>Destination Map</h2>
              <div className="map-container">
                <iframe
                  src={`https://maps.google.com/maps?q=${selectedPackage.mapCoordinates.lat},${selectedPackage.mapCoordinates.lng}&z=6&output=embed`}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Package Map"
                ></iframe>
              </div>
              <div className="destinations-list">
                <h3>Destinations Visited</h3>
                <ul>
                  {selectedPackage.destinations.map((destination, index) => (
                    <li key={index}><i className="fas fa-map-pin"></i> {destination}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="tabs-content tab-content">
              <h2>Traveler Reviews</h2>
              <div className="package-details-reviews-container">
                {selectedPackage.reviews.map(review => (
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

<CallToAction/>
      <Footer />
    </div>
  );
};

export default PackageDetailsPage;
