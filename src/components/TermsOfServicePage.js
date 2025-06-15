import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/DestinationsPage.css";

const TermsOfServicePage = () => {
  return (
    <div className="destinations-page">
      <header className="destinations-hero">
        <Navbar />
        <div className="hero-content dest-header">
          <div className="dest-header-content">
            <h1>Terms of Service</h1>
            <p>Last updated: June 15, 2025</p>
          </div>
        </div>
      </header>
      <main className="destinations-content">
        <div className="featured-destinations">
          <h2>Acceptance of Terms</h2>
          <p>By using our website, you agree to these Terms of Service. If you do not agree, please do not use our site.</p>
          <h2>Use of Site</h2>
          <p>You agree to use the site for lawful purposes only and not to engage in any activity that could harm the site or its users.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this site is the property of Nyonyi Holidays Africa or its licensors. You may not use, copy, or distribute any content without permission.</p>
          <h2>Limitation of Liability</h2>
          <p>We are not liable for any damages arising from your use of the site.</p>
          <h2>Changes to Terms</h2>
          <p>We may update these Terms of Service at any time. Continued use of the site means you accept the new terms.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at info@nyonyiholidaysafrica.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
