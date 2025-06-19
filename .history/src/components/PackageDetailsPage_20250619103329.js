import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import '../styles/PackageDetailsPage.css';

// Import images - using existing images as placeholders
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

// Package data (same as in PackagesPage.js)
const packages = [
  {
    id: 1,
    title: "CLASSIC UGANDA GORILLA & WILDLIFE SAFARI",
    type: "Mid-Range",
    duration: "8 Days / 7 Nights",
    destinations: ["Entebbe", "Murchison Falls", "Kibale", "Queen Elizabeth", "Bwindi", "Lake Mburo"],
    highlights: [
      "Game drives in Murchison Falls & Queen Elizabeth NP",
      "Chimpanzee tracking in Kibale Forest",
      "Gorilla trekking in Bwindi",
      "Boat cruise on the Nile and Kazinga Channel"
    ],
    accommodation: "Mid-range: Pakuba Safari Lodge, Kibale Forest Camp, Ishasha Jungle Lodge",
    price: "3,800 – 4,500",
    inclusions: "Gorilla permit, park fees, meals, transport, guide.",
    image: kitandra,
    featured: true,
    description: "Uganda, often referred to as the Pearl of Africa, offers one of the most thrilling and awe-inspiring safari experiences on the continent. The Classic Uganda Gorilla & Wildlife Safari is a once-in-a-lifetime journey that takes you from the lush tropical forests of Bwindi to the savannah plains of Queen Elizabeth National Park, combining close-up encounters with endangered mountain gorillas, tree-climbing lions, and a stunning diversity of landscapes and cultures.",
  
    itinerary: [
      {
        day: 1,
        title: "Arrival in Entebbe",
        description: "Welcome to Uganda! Upon arrival at Entebbe International Airport, you'll be met by your guide and transferred to your hotel. Depending on your arrival time, you may have the opportunity to explore the charming town of Entebbe, visit the botanical gardens, or simply relax and prepare for your adventure.",
        accommodation: "Papyrus Guest House or similar"
      },
      {
        day: 2,
        title: "Entebbe to Murchison Falls National Park",
        description: "After breakfast, depart for Murchison Falls National Park, Uganda's largest protected area. En route, visit the Ziwa Rhino Sanctuary for a guided rhino tracking experience on foot. Continue to Murchison Falls, arriving in the late afternoon with time to settle into your lodge and enjoy the sunset over the Nile.",
        accommodation: "Pakuba Safari Lodge or similar"
      },
      {
        day: 3,
        title: "Murchison Falls National Park",
        description: "Begin with an early morning game drive on the northern bank of the Nile, where you'll search for elephants, lions, giraffes, and more. In the afternoon, take a boat cruise up the Nile to the base of Murchison Falls, offering excellent opportunities for wildlife photography and bird watching. The cruise ends with a hike to the top of the falls (optional) for spectacular views.",
        accommodation: "Pakuba Safari Lodge or similar"
      },
      {
        day: 4,
        title: "Murchison Falls to Kibale Forest",
        description: "Depart Murchison Falls and journey south to Kibale Forest National Park, home to the highest concentration of primates in Africa. The scenic drive takes you through tea plantations and rural villages, offering glimpses of local life. Arrive at your accommodation in the late afternoon.",
        accommodation: "Kibale Forest Camp or similar"
      },
      {
        day: 5,
        title: "Chimpanzee Tracking & Queen Elizabeth National Park",
        description: "Morning chimpanzee tracking in Kibale Forest. Spend an hour observing these fascinating primates in their natural habitat. After lunch, transfer to Queen Elizabeth National Park, arriving in time for an evening game drive in the Ishasha sector, famous for its tree-climbing lions.",
        accommodation: "Ishasha Jungle Lodge or similar"
      },
      {
        day: 6,
        title: "Queen Elizabeth to Bwindi Impenetrable Forest",
        description: "Morning game drive in Queen Elizabeth National Park, followed by a boat cruise on the Kazinga Channel, home to the highest concentration of hippos in Africa. In the afternoon, continue to Bwindi Impenetrable Forest, home of the endangered mountain gorillas.",
        accommodation: "Gorilla Mist Camp or similar"
      },
      {
        day: 7,
        title: "Gorilla Trekking in Bwindi",
        description: "Early breakfast before your gorilla trekking experience. After a briefing at park headquarters, trek through the forest with experienced guides in search of a habituated gorilla family. Spend a magical hour with these gentle giants, observing their behavior and social interactions. Return to your lodge for a relaxing evening and to share your gorilla encounter stories.",
        accommodation: "Gorilla Mist Camp or similar"
      },
      {
        day: 8,
        title: "Bwindi to Lake Mburo & Departure",
        description: "Depart Bwindi and travel to Lake Mburo National Park for a game drive or boat safari. Continue to Entebbe, arriving in the evening for your onward flight or overnight stay (additional night not included in package).",
        accommodation: "N/A (departure day)"
      }
    ],
    activities: [
      { name: "Gorilla Trekking", icon: "fa-paw" },
      { name: "Game Drives", icon: "fa-car" },
      { name: "Boat Safaris", icon: "fa-ship" },
      { name: "Chimpanzee Tracking", icon: "fa-tree" },
      { name: "Hiking", icon: "fa-hiking" },
      { name: "Cultural Visits", icon: "fa-users" }
    ],
    gallery: [kitandra, kitandra2, kitandra, kitandra2, kitandra, kitandra2],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    mapCoordinates: { lat: 0.3476, lng: 32.5825 }, // Uganda coordinates
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "March 15, 2023",
        comment: "The gorilla trekking experience was life-changing! Our guide was knowledgeable and made sure we had the best possible experience. Accommodations were comfortable and the food was excellent. Highly recommend this tour!"
      },
      {
        id: 2,
        name: "Michael Chen",
        rating: 4,
        date: "January 22, 2023",
        comment: "Great itinerary that showcases the best of Uganda. The gorillas were amazing and the game drives productive. Only suggestion would be more time in Queen Elizabeth National Park."
      },
      {
        id: 3,
        name: "Emma Williams",
        rating: 5,
        date: "April 8, 2023",
        comment: "From start to finish, this safari exceeded our expectations. The diversity of wildlife we saw was incredible, and the gorilla encounter was the highlight of our lives. The guides were professional and accommodations were perfect."
      }
    ]
  },
  // Other packages would be defined here
];

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
              <img src={selectedPackage.gallery[currentImageIndex]} alt={`${selectedPackage.title} - Gallery image ${currentImageIndex + 1}`} />
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


      <Footer />
    </div>
  );
};

export default PackageDetailsPage;
