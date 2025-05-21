import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Button } from './ui/button';
import Navbar from './Navbar';
import Footer from './Footer';
import CallToAction from './CallToAction';
import '../styles/PackagesPage.css';

// Import images - using existing images as placeholders
import kitandra from '../media/kitandra.jpg';
import kitandra2 from '../media/kitandra2.jpg';

// Package data
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
    featured: true
  },
  {
    id: 2,
    title: "RWANDA-UGANDA GORILLA DOUBLE TREK",
    type: "High-End",
    duration: "6 Days / 5 Nights",
    destinations: ["Kigali", "Volcanoes NP (Rwanda)", "Bwindi (Uganda)"],
    highlights: [
      "Gorilla trekking in Rwanda and Uganda",
      "Golden Monkey tracking in Volcanoes NP",
      "Scenic drive through the Virunga Mountains"
    ],
    accommodation: "Luxury: Bisate Lodge (Rwanda), Clouds Mountain Gorilla Lodge (Uganda)",
    price: "12,000–15,000",
    inclusions: "Private transfers, both gorilla permits, champagne sundowners.",
    image: kitandra2,
    featured: true
  },
  {
    id: 3,
    title: "LUXURY UGANDA SAFARI & GORILLA EXPERIENCE",
    type: "High-End",
    duration: "10 Days / 9 Nights",
    destinations: ["Entebbe", "Ziwa Rhino Sanctuary", "Murchison Falls", "Kibale", "Queen Elizabeth", "Bwindi", "Lake Bunyonyi"],
    highlights: [
      "Helicopter tour over Murchison Falls",
      "Private chimpanzee habituation experience",
      "Sunset cruise on Lake Bunyonyi"
    ],
    accommodation: "Luxury: Chobe Safari Lodge, Kyangabi Crater Lake Resort",
    price: "9,500–12,000",
    inclusions: "Domestic flights, exclusive guides, gourmet dining.",
    image: kitandra,
    featured: false
  },
  {
    id: 4,
    title: "PRIMATE PARADISE: CHIMPS & GORILLAS",
    type: "Mid-Range",
    duration: "7 Days / 6 Nights",
    destinations: ["Entebbe", "Kibale", "Queen Elizabeth", "Bwindi"],
    highlights: [
      "Chimpanzee tracking in Kibale",
      "Tree-climbing lions in Ishasha",
      "Gorilla trekking in Bwindi"
    ],
    accommodation: "Mid-range: Turaco Treehouse, Enganzi Lodge",
    price: "3,200–4,000",
    inclusions: "All permits, meals, 4x4 transport.",
    image: kitandra2,
    featured: false
  },
  {
    id: 5,
    title: "RWANDA TO UGANDA EXPLORER",
    type: "Mid-Range",
    duration: "9 Days / 8 Nights",
    destinations: ["Kigali", "Akagera NP (Rwanda)", "Lake Mburo", "Bwindi", "Queen Elizabeth", "Entebbe"],
    highlights: [
      "Game drives in Akagera and Queen Elizabeth",
      "Boat safari on Lake Ihema (Rwanda)",
      "Gorilla trekking in Bwindi"
    ],
    accommodation: "Mid-range: Ruzizi Tented Lodge, Buffalo Safari Lodge",
    price: "4,500–5,500",
    inclusions: "Cross-border permits, bilingual guide.",
    image: kitandra,
    featured: false
  },
  {
    id: 6,
    title: "ULTIMATE GREAT LAKES ADVENTURE",
    type: "High-End",
    duration: "12 Days / 11 Nights",
    destinations: ["Entebbe", "Jinja", "Kidepo Valley", "Murchison Falls", "Kibale", "Bwindi", "Lake Bunyonyi"],
    highlights: [
      "White-water rafting at the Nile Source",
      "Cultural immersion with Karamojong tribes",
      "Gorillas"
    ],
    accommodation: "Luxury: Apoka Safari Lodge, Sanctuary Gorilla Forest Camp",
    price: "15,000–18,000",
    inclusions: "Private charters, VIP experiences.",
    image: kitandra2,
    featured: false
  },
  {
    id: 7,
    title: "FAMILY-FRIENDLY UGANDA SAFARI",
    type: "Mid-Range",
    duration: "8 Days / 7 Nights",
    destinations: ["Entebbe", "Ziwa Rhino Sanctuary", "Murchison Falls", "Kibale", "Lake Mburo"],
    highlights: [
      "Rhino tracking at Ziwa",
      "Family-friendly chimpanzee walks",
      "Horseback riding in Lake Mburo"
    ],
    accommodation: "Mid-range: Sambiya River Lodge, Mihingo Lodge",
    price: "3,000–4,000",
    inclusions: "Child-friendly guides, interactive activities.",
    image: kitandra,
    featured: false
  },
  {
    id: 8,
    title: "RWANDA-UGANDA HONEYMOON SPECIAL",
    type: "High-End",
    duration: "10 Days / 9 Nights",
    destinations: ["Kigali", "Volcanoes NP", "Lake Kivu (Rwanda)", "Bwindi", "Lake Bunyonyi (Uganda)"],
    highlights: [
      "Gorilla trekking in Bwindi",
      "Romantic lakeside dinners at Lake Kivu",
      "Canoeing on Lake Bunyonyi"
    ],
    accommodation: "Luxury: One&Only Gorilla's Nest, BirdNest Resort",
    price: "14,000–17,000",
    inclusions: "Couples' spa treatments, photography sessions.",
    image: kitandra2,
    featured: false
  },
  {
    id: 9,
    title: "UGANDA BIRDING & WILDLIFE EXTRAVAGANZA",
    type: "Mid-Range",
    duration: "10 Days / 9 Nights",
    destinations: ["Entebbe", "Mabamba Wetlands", "Queen Elizabeth", "Bwindi", "Lake Mburo"],
    highlights: [
      "Shoebill stork spotting in Mabamba",
      "Birding boat cruise in Queen Elizabeth",
      "Guided forest walks in Bwindi and Gorrilla tracking"
    ],
    accommodation: "Mid-range: Mweya Safari Lodge, Gorilla Valley Lodge",
    price: "4,800–5,800",
    inclusions: "Expert birding guide, binoculars provided.",
    image: kitandra,
    featured: false
  }
];

const PackagesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter packages based on active tab
  const filteredPackages = activeTab === "all"
    ? packages
    : packages.filter(pkg => pkg.type.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="packages-page">
      <header className="packages-hero">
        <Navbar />
        <div className="hero-content">
          <h1>Safari Packages & Destinations</h1>
          <p style={{ fontSize: "1.8rem", opacity: "0.9" }}>Explore our carefully crafted experiences across East Africa</p>
        </div>
      </header>

      <main className="packages-content">
        <div className="featured-packages">
          <h2>Featured Packages</h2>
          <div className="featured-grid">
            {packages.filter(pkg => pkg.featured).map(pkg => (
              <div key={pkg.id} className="featured-pkg-card">
                <div className="pkg-image" style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="pkg-type">{pkg.type}</div>
                </div>
                <div className="pkg-details">
                  <h3>{pkg.title}</h3>
                  <p className="pkg-duration">{pkg.duration}</p>
                  <p className="pkg-destinations">
                    <i className="fas fa-map-marker-alt"></i> {pkg.destinations.join(" → ")}
                  </p>
                  <div className="pkg-price">
                    <span className="price-label">From</span>
                    <span className="price-value">${pkg.price.split('–')[0].trim()}</span>
                    <span className="price-unit">per person</span>
                  </div>
                  <Link to={`/packages/${pkg.id}`} className="view-details-link">
                    <button className="button book-button">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="all-packages">
          <h2>All Safari Packages</h2>
          <Tabs defaultValue="all" className="tabs packages-tabs" onValueChange={setActiveTab}>
            <TabsList className="tabs-list">
              <TabsTrigger className="tabs-trigger" value="all">All Packages</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="mid-range">Mid-Range</TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="high-end">High-End</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="tabs-content packages-grid">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>

            <TabsContent value="mid-range" className="tabs-content packages-grid">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>

            <TabsContent value="high-end" className="tabs-content packages-grid">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="custom-package">
          <div className="custom-content">
            <h2>Looking for a Custom Safari?</h2>
            <p>We can create a personalized itinerary tailored to your preferences, timeline, and budget.</p>
            <button className="button custom-button">Contact Us</button>
          </div>
        </div>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
};

// Package Card Component
const PackageCard = ({ packageData }) => {
  return (
    <Card className="card pkg-card">
      <div className="pkg-card-image" style={{ backgroundImage: `url(${packageData.image})` }}>
        <div className="pkg-type">{packageData.type}</div>
      </div>
      <CardHeader className="pkg-card-header">
        <CardTitle className="pkg-card-title" title={packageData.title}>{packageData.title}</CardTitle>
        <CardDescription className="pkg-card-description">{packageData.duration}</CardDescription>
      </CardHeader>
      <CardContent className="pkg-card-content">
        <div className="pkg-destinations" title={packageData.destinations.join(" → ")}>
          <i className="fas fa-map-marker-alt"></i> {packageData.destinations.join(" → ")}
        </div>
        <div className="pkg-highlights">
          <h4>Highlights:</h4>
          <ul>
            {packageData.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="pkg-accommodation">
          <h4>Accommodation:</h4>
          <p className="truncate-text" title={packageData.accommodation}>{packageData.accommodation}</p>
        </div>
        <div className="pkg-inclusions">
          <h4>Inclusions:</h4>
          <p className="truncate-text" title={packageData.inclusions}>{packageData.inclusions}</p>
        </div>
      </CardContent>
      <CardFooter className="pkg-card-footer">
        <div className="pkg-price">
          <span className="price-label">From</span>
          <span className="price-value">${packageData.price.split('–')[0].trim()}</span>
          <span className="price-unit">per person</span>
        </div>
        <Link to={`/packages/${packageData.id}`}>
          <Button className="button book-now-button">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PackagesPage;
