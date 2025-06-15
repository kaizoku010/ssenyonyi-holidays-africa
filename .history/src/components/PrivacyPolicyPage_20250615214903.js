import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/HomePage.css';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariant = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  return (
    <div className="home-page">
      <header className="hero-section">
        <Navbar />
        <div className="legal-hero-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')"}} />
      </header>
      <motion.main
        variants={containerVariant}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={itemVariant}>
          <button className="legal-back-btn" onClick={() => navigate(-1)}>{'< Back'}</button>
          <h1>Privacy Policy</h1>
          <p>Last updated: June 15, 2025</p>
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
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
