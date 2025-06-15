import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/DestinationsPage.css";

const PrivacyPolicyPage = () => {
  return (
    <div className="destinations-page">
      <header className="destinations-hero">
        <Navbar />
        <div className="hero-content dest-header">
          <div className="dest-header-content">
            <h1>Privacy Policy</h1>
            <p>Last updated: June 15, 2025</p>
          </div>
        </div>
      </header>
      <main className="destinations-content">
        <div className="featured-destinations">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a form or contact us. This may include your name, email, and any other details you choose to provide.</p>
          <h2>How We Use Information</h2>
          <p>We use your information to respond to your inquiries, provide services, and improve our website. We do not sell your personal information to third parties.</p>
          <h2>Cookies</h2>
          <p>We may use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
          <h2>Third-Party Services</h2>
          <p>We may use third-party services (such as analytics or payment processors) that collect, monitor, and analyze information to improve our service.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@nyonyiholidaysafrica.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
