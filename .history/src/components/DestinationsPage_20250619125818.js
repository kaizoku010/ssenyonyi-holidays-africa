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
import destinationsData from '../data/destinations.json';

// Import images - using existing images as placeholders
import kitandra from "../media/kitandra.jpg";
import kitandra2 from "../media/kitandra2.jpg";

const imageMap = {
  'kitandra.jpg': kitandra,
  'kitandra2.jpg': kitandra2,
};

// Destination data
const destinations = destinationsData.map(dest => ({
  ...dest,
  image: imageMap[dest.image] || dest.image,
}));

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
          <Button className="explore-button-destinations">{t('destinationsPage.card.explore')}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationsPage;
