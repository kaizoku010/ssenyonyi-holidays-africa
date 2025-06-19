import React from "react";
import { motion } from "framer-motion";
import "../styles/EVChargingPage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swril from "../media/deriq.jpg";
import Nyoni from "../media/bird_.jpg";
import B1 from "../media/b1.jpg";
import B2 from "../media/b2.jpg";
import B3 from "../media/b3.jpg";

const EVChargingPage = () => {
  const { t } = useTranslation();
  const Partner = "https://res.cloudinary.com/dnko3bvt0/image/upload/fl_preserve_transparency/v1748506763/test_qaobiu.jpg?_s=public-apps"
  const teamMembers = [
    {
      id: 1,
      image: B1,
      name: "",
      role: "",
    },
    {
      id: 2,
      image: B2,
      name: "",
      role: "",
    },
    {
      id: 3,
      image: B3,
      name: "",
      role: "",
    },
  ];

  // Partner logos
  const partners = [
    { id: 1, logo: Partner, name: "Partner 1" },
    { id: 2, logo: Partner, name: "Partner 2" },
    { id: 3, logo: Partner, name: "Partner 3" },
    { id: 4, logo: Partner, name: "Partner 4" },
    { id: 5, logo: Partner, name: "Partner 5" },
  ];

  return (
    <div className="ev-charging-page">
      {/* Header Section */}
      <Navbar />
      <div className="ev-header-container">
        <h1></h1>
        <h1 className="ev-header">
          Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable journeys across Africa.</h1>
      </div>

      {/* Mission Statement Section */}
      <div className="ev-mission-container">
        <div className="ev-mission-content">
          <div className="ev-mission-text">
            <div>
              <h2 className="ev-mission-title">
                {t('aboutPage.mission.title')}
              </h2>
              <p className="ev-mission-description">
                {t('aboutPage.mission.description1')}
              </p>
            </div>

            <p className="ev-mission-description">
              {t('aboutPage.mission.description2')} <br />
              <br />
              {t('aboutPage.mission.description3')}
            </p>
          </div>
          <div className="ev-mission-image">
            <img src={Swril} alt="nyoni holidays africa" />
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="ev-solution-container">
        <div className="ev-solution-content">
          <div className="ev-solution-image">
            <img src={Nyoni} alt="nyoni holidays africa" />
          </div>
          <div className="ev-solution-text">
            <p>
              {t('aboutPage.vision.description')}
            </p>

            <div>
              <h2 className="ev-solution-title">{t('aboutPage.mission_statement.title')}</h2>
              <p className="ev-solution-description">
                {t('aboutPage.mission_statement.description')}
              </p>
              <h2 className="ev-solution-title">{t('aboutPage.vision.title')}</h2>
              <p className="ev-solution-description">
                {t('aboutPage.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="ev-team-container">
        <h2 className="ev-team-title">
          {t('aboutPage.team.title')}
        </h2>
        <div className="ev-team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="ev-team-member">
              <div className="ev-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="ev-member-name">{member.name}</h3>
              <p className="ev-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="ev-partners-container">
        <div className="ev-partners-content">
          <h2 className="ev-partners-title">
            {t('aboutPage.partners.title')}
          </h2>
          <div className="ev-partners-logos">
            {partners.map((partner) => (
              <div key={partner.id} className="ev-partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="why-us">
        <div className="smaller-side">
          <div className="spacer"></div>
          <div className="why-us-content">
            <h2 className="why-us-title">{t('aboutPage.attractions.murchison.title')}</h2>
            <p className="why-us-text">
              {t('aboutPage.attractions.murchison.description')}
            </p>
          </div>
        </div>
        <div className="bigger-side">
          <div className="spacer"></div>
          <div className="why-us-content">
            <h2 className="why-us-title">{t('aboutPage.attractions.gorillas.title')}</h2>
            <p className="why-us-text">
              {t('aboutPage.attractions.gorillas.description')}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ev-cta-container">
        <div className="ev-cta-content">
          <h2 className="ev-cta-title">{t('aboutPage.cta.title')}</h2>
          <Link to="/contact">
          <button className="ev-cta-button">
            {t('aboutPage.cta.button')} <span className="ev-cta-dot">•</span>
          </button>
          </Link>
          <p className="ev-cta-description">
            {t('aboutPage.cta.description')}
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EVChargingPage;
