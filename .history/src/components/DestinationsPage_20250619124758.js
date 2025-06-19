import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import "../styles/DestinationsPage.css";

// Import images - using existing images as placeholders
import kitandra from "../media/kitandra.jpg";
import kitandra2 from "../media/kitandra2.jpg";

// Destination data
const destinations = [
  {
    id: 1,
    name: "Murchison Falls National Park",
    country: "Uganda",
    description:
      "Uganda's largest national park, home to the powerful Murchison Falls where the Nile squeezes through a narrow gorge. Spot elephants, giraffes, lions, and hippos on game drives and boat safaris.",
    image: kitandra,
    activities: ["Game Drives", "Boat Safaris", "Hiking", "Bird Watching"],
    highlights: [
      "Murchison Falls",
      "Nile River",
      "Wildlife Viewing",
      "Chimpanzee Tracking",
    ],
    featured: true,
    category: "National Park",
  },
  {
    id: 2,
    name: "Queen Elizabeth National Park",
    country: "Uganda",
    description:
      "Known for its diverse ecosystems, including savanna, wetlands, and forests. Famous for tree-climbing lions in the Ishasha sector and over 600 bird species.",
    image: kitandra2,
    activities: [
      "Game Drives",
      "Boat Cruises",
      "Chimpanzee Tracking",
      "Bird Watching",
    ],
    highlights: [
      "Tree-climbing Lions",
      "Kazinga Channel",
      "Kyambura Gorge",
      "Crater Lakes",
    ],
    featured: true,
    category: "National Park",
  },
  {
    id: 3,
    name: "Bwindi Impenetrable Forest",
    country: "Uganda",
    description:
      "UNESCO World Heritage site and home to nearly half of the world's remaining mountain gorillas. Dense jungle with incredible biodiversity and stunning landscapes.",
    image: kitandra,
    activities: [
      "Gorilla Trekking",
      "Bird Watching",
      "Forest Walks",
      "Cultural Experiences",
    ],
    highlights: [
      "Mountain Gorillas",
      "Ancient Forest",
      "Batwa Cultural Experiences",
      "Spectacular Views",
    ],
    featured: true,
    category: "Forest",
  },
  {
    id: 4,
    name: "Lake Mburo National Park",
    country: "Uganda",
    description:
      "A compact gem with a mosaic of habitats including lakes, acacia woodland, and savanna. Perfect for walking safaris and night game drives.",
    image: kitandra2,
    activities: [
      "Game Drives",
      "Boat Trips",
      "Walking Safaris",
      "Horseback Safaris",
    ],
    highlights: ["Zebras", "Impala", "Lake Mburo", "Night Drives"],
    featured: false,
    category: "National Park",
  },
  {
    id: 5,
    name: "Volcanoes National Park",
    country: "Rwanda",
    description:
      "Home to endangered mountain gorillas and golden monkeys, set against the backdrop of five majestic volcanoes. Rwanda's most visited national park.",
    image: kitandra,
    activities: [
      "Gorilla Trekking",
      "Golden Monkey Tracking",
      "Volcano Hiking",
      "Cultural Visits",
    ],
    highlights: [
      "Mountain Gorillas",
      "Dian Fossey Tomb",
      "Volcanic Landscapes",
      "Golden Monkeys",
    ],
    featured: true,
    category: "National Park",
  },
  {
    id: 6,
    name: "Kigali",
    country: "Rwanda",
    description:
      "Rwanda's clean and vibrant capital city, known for its remarkable recovery and development. A great starting point for Rwanda adventures.",
    image: kitandra2,
    activities: [
      "City Tours",
      "Genocide Memorial Visit",
      "Cultural Experiences",
      "Shopping",
    ],
    highlights: [
      "Kigali Genocide Memorial",
      "Presidential Palace Museum",
      "Inema Arts Center",
      "Local Markets",
    ],
    featured: false,
    category: "City",
  },
  {
    id: 7,
    name: "Entebbe",
    country: "Uganda",
    description:
      "Charming town on the shores of Lake Victoria, home to Uganda's international airport and the starting point for most Uganda safaris.",
    image: kitandra,
    activities: [
      "Botanical Gardens",
      "Wildlife Education Center",
      "Boat Trips",
      "Beach Relaxation",
    ],
    highlights: [
      "Lake Victoria",
      "Entebbe Botanical Gardens",
      "Uganda Wildlife Education Center",
      "Ngamba Island Chimpanzee Sanctuary",
    ],
    featured: false,
    category: "City",
  },
  {
    id: 8,
    name: "Ziwa Rhino Sanctuary",
    country: "Uganda",
    description:
      "The only place in Uganda where you can see rhinos in the wild. A successful rhino breeding and protection program with guided rhino tracking on foot.",
    image: kitandra2,
    activities: [
      "Rhino Tracking",
      "Bird Watching",
      "Canoe Rides",
      "Nature Walks",
    ],
    highlights: [
      "White Rhinos",
      "Shoebill Storks",
      "Conservation Education",
      "Walking Safaris",
    ],
    featured: false,
    category: "Sanctuary",
  },
  {
    id: 9,
    name: "Lake Bunyonyi",
    country: "Uganda",
    description:
      "One of Africa's deepest lakes, dotted with 29 islands and surrounded by terraced hills. A peaceful retreat with stunning scenery.",
    image: kitandra,
    activities: ["Boat Tours", "Swimming", "Canoeing", "Island Hopping"],
    highlights: ["29 Islands", "Bird Watching", "Local Culture", "Relaxation"],
    featured: false,
    category: "Lake",
  },
  {
    id: 10,
    name: "Kidepo Valley National Park",
    country: "Uganda",
    description:
      "Remote and spectacular wilderness in northeastern Uganda. Rugged savannah dominated by mountains with exceptional wildlife viewing.",
    image: kitandra2,
    activities: [
      "Game Drives",
      "Cultural Visits",
      "Bird Watching",
      "Walking Safaris",
    ],
    highlights: ["Cheetahs", "Ostriches", "Karamojong Culture", "Narus Valley"],
    featured: true,
    category: "National Park",
  },
  {
    id: 11,
    name: "Lake Kivu",
    country: "Rwanda",
    description:
      "One of Africa's Great Lakes, offering beautiful beaches, islands, and water activities along Rwanda's western border.",
    image: kitandra,
    activities: ["Boat Tours", "Swimming", "Kayaking", "Coffee Tours"],
    highlights: ["Beaches", "Islands", "Hot Springs", "Sunset Cruises"],
    featured: false,
    category: "Lake",
  },
];

const DestinationsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  // Filter destinations based on active tab
  const filteredDestinations =
    activeTab === "all"
      ? destinations
      : destinations.filter((dest) =>
          dest.category.toLowerCase().includes(activeTab.toLowerCase())
        );

  return (
    <div className="destinations-page">
      <header className="destinations-hero">
        <Navbar />
        <div className="hero-content dest-header">
          <div className="dest-header-content">
            <h1>
              {t('destinationsPage.hero.title')}
            </h1>
          </div>
        </div>
      </header>

      <main className="destinations-content">
        <div className="all-destinations">
          <h2>{t('destinationsPage.sections.all')}</h2>
          <Tabs
            defaultValue="all"
            className="tabs destinations-tabs"
            onValueChange={setActiveTab}
          >
            <TabsList className="tabs-list">
              <TabsTrigger className="tabs-trigger" value="all">
                {t('destinationsPage.tabs.all')}
              </TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="national park">
                {t('destinationsPage.tabs.nationalParks')}
              </TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="city">
                {t('destinationsPage.tabs.cities')}
              </TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="lake">
                {t('destinationsPage.tabs.lakes')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="tabs-content destinations-grid">
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </TabsContent>

            <TabsContent
              value="national park"
              className="tabs-content destinations-grid"
            >
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </TabsContent>

            <TabsContent
              value="city"
              className="tabs-content destinations-grid"
            >
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </TabsContent>

            <TabsContent
              value="lake"
              className="tabs-content destinations-grid"
            >
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
};

// Destination Card Component
const DestinationCard = ({ destination }) => {
  const { t } = useTranslation();

  return (
    <Card className="card destination-card mdx-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="destination-category">{destination.category}</div>
        <div className="destination-country">{destination.country}</div>
      </div>
      <CardHeader className="card-header">
        <CardTitle className="card-title">{destination.name}</CardTitle>
      </CardHeader>
      <CardContent className="card-content">
        <div className="destination-activities">
          <h4>{t('destinationsPage.card.activities')}</h4>
          <div className="activities-list">
            {destination.activities.slice(0, 4).map((activity, index) => (
              <span key={index} className="activity-tag">
                {activity}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="card-footer">
        <Link to={`/destination/${destination.id}`}>
          <Button className="button explore-button">{t('destinationsPage.card.explore')}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationsPage;
