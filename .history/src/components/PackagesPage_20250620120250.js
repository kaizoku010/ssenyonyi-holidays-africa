import React, { useState } from "react";
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
import PackageContactModal from "./PackageContactModal";
import { useTranslation } from "react-i18next";
import "../styles/PackagesPage.css";
import { useNavigate } from "react-router-dom";
import packagesData from "../data/packages.json";

// Helper to resolve image imports for package data
const imageMap = {
  "kitandra.jpg": require("../media/kitandra.jpg"),
  "kitandra2.jpg": require("../media/kitandra2.jpg"),
  "mount.jpg": require("../media/mount.jpg"),
  "mach.jpg": require("../media/mach.jpg"),
  "gols.jpg": require("../media/gols.jpg"),
  "chimp.jpg": require("../media/chimp.jpg"),
};

const packages = packagesData.map((pkg) => ({
  ...pkg,
  image: imageMap[pkg.image] || pkg.image,
  gallery: pkg.gallery ? pkg.gallery.map((img) => imageMap[img] || img) : [],
}));

console.log("packages found: ", packages);

const PackagesPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigate();
  // Filter packages based on active tab
  const filteredPackages =
    activeTab === "all"
      ? packages
      : packages.filter((pkg) =>
          pkg.type.toLowerCase().includes(activeTab.toLowerCase())
        );

  const handlePackageInquiry = (packageData) => {
    setSelectedPackage(packageData);
    setIsModalOpen(true);
  };

  const readMore = (packageId) => {
    navigation(`/packages/${packageId}`);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="packages-page">
      <header className="packages-hero">
        <Navbar />

        <h1 className="packages-header">
          {t("packagesPage.title", "Safari packages & destinations")}
        </h1>
        <p style={{ fontSize: ".9rem" }}>
          {t(
            "packagesPage.subtitle",
            "Explore our carefully crafted experiences across East Africa"
          )}
        </p>
      </header>

      <main className="packages-content">
        <div className="featured-packages">
          <h2>{t("packagesPage.featuredPackages", "Featured Packages")}</h2>
          <div className="featured-grid">
            {packages
              .filter((pkg) => pkg.featured)
              .map((pkg) => (
                <div key={pkg.id} className="featured-pkg-card">
                  <div
                    className="pkg-image"
                    style={{ backgroundImage: `url(${pkg.image})` }}>

                    <div className="pkg-type">{pkg.type}</div>
                  </div>
                  <div className="pkg-details">
                    
                    <div className="pck-top-content">
                 <h3>{pkg.title}</h3>
                    <p className="pkg-duration">{pkg.duration}</p>
                    <p className="pkg-mdx">
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      {pkg.destinations.join(" → ")}
                    </p>

                    </div>
           

                    <div className="card-btn-group">
                      <button
                        className="book-button-new"
                        onClick={() => handlePackageInquiry(pkg)}
                      >
                        {t("packagesPage.inquireNow", "Inquire Now")}
                      </button>
                      <button
                        className="read-more-btn"
                        onClick={() => readMore(pkg.id)}
                      >
                        {t("packagesPage.readmore", "Read More")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="all-packages">
          <h2>{t("packagesPage.allPackages", "All Safari Packages")}</h2>
          <Tabs
            defaultValue="all"
            className="tabs packages-tabs"
            onValueChange={setActiveTab}
          >
            <TabsList className="tabs-list">
              <TabsTrigger className="tabs-trigger" value="all">
                {t("packagesPage.tabs.all", "All Packages")}
              </TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="mid-range">
                {t("packagesPage.tabs.midRange", "Mid-Range")}
              </TabsTrigger>
              <TabsTrigger className="tabs-trigger" value="high-end">
                {t("packagesPage.tabs.highEnd", "High-End")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="tabs-content packages-grid">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  packageData={pkg}
                  onInquire={handlePackageInquiry}
                />
              ))}
            </TabsContent>

            <TabsContent
              value="mid-range"
              className="tabs-content packages-grid"
            >
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  packageData={pkg}
                  onInquire={handlePackageInquiry}
                />
              ))}
            </TabsContent>

            <TabsContent
              value="high-end"
              className="tabs-content packages-grid"
            >
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  packageData={pkg}
                  onInquire={handlePackageInquiry}
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <CallToAction />
      <Footer />

      {/* Contact Modal */}
      {selectedPackage && (
        <PackageContactModal
          isOpen={isModalOpen}
          onClose={closeModal}
          packageData={selectedPackage}
        />
      )}
    </div>
  );
};

// Package Card Component
const PackageCard = ({ packageData, onInquire }) => {
  const { t } = useTranslation();

  return (
    <Card className="card pkg-card">
      <div
        className="pkg-card-image"
        style={{ backgroundImage: `url(${packageData.image})` }}
      >
        <div className="pkg-type">{packageData.type}</div>
      </div>

      
      <CardHeader className="pkg-card-header">
        <CardTitle className="pkg-card-title" title={packageData.title}>
          {packageData.title}
        </CardTitle>
        <CardDescription className="pkg-card-description">
          {packageData.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="pkg-card-content">
        <div
          className="pkg-destinations"
          title={packageData.destinations.join(" → ")}
        >
          <i className="fas fa-map-marker-alt"></i>{" "}
          {packageData.destinations.join(" → ")}
        </div>
        <div className="pkg-highlights">
          <h4>{t("packagesPage.highlights", "Highlights")}:</h4>
          <ul>
            {packageData.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="pkg-accommodation">
          <h4>{t("packagesPage.accommodation", "Accommodation")}:</h4>
          <p className="truncate-text" title={packageData.accommodation}>
            {packageData.accommodation}
          </p>
        </div>
        <div className="pkg-inclusions">
          <h4>{t("packagesPage.inclusions", "Inclusions")}:</h4>
          <p className="truncate-text" title={packageData.inclusions}>
            {packageData.inclusions}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pkg-card-footer">
        {/* <Button
          className="button book-now-button"
          onClick={() => onInquire(packageData)}
        >
          {t("packagesPage.inquireNow", "Inquire Now")}
        </Button> */}
        <Button
          className="button read-more-button"
          variant="outline"
          onClick={() => (window.location.href = `/packages/${packageData.id}`)}
        >
          {t("packagesPage.readmore", "Read More")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackagesPage;
