import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>{t('footer.about.title')}</h3>
          <p>
            {t('footer.about.description')}
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61577299168002&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/NyonyiHolidays" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com/@nyonyiholidaysafrica?si=N4q2LfEXUCwrC4tf" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/nyonyiholidays?igsh=MXJrdmw5czFyYTgxbQ==" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="http://www.linkedin.com/in/nyonyi-holidays-africa-holidays-africa-3974b936a" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="http://www.tiktok.com/@nyonyiholidaysafrica" target="_blank"><i className="fab fa-tiktok"></i></a>

          </div>
        </div>

        <div className="footer-section links">
          <h3>{t('footer.quickLinks.title')}</h3>
          <ul>
            <li><Link to="/">{t('footer.quickLinks.home')}</Link></li>
            <li><Link to="/packages">{t('footer.quickLinks.packages')}</Link></li>
            <li><Link to="/destinations">{t('footer.quickLinks.destinations')}</Link></li>
            <li><Link to="/gallery">{t('footer.quickLinks.gallery')}</Link></li>
            <li><Link to="/contact">{t('footer.quickLinks.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>{t('footer.contactUs.title')}</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> {t('footer.contactUs.address')}</li>
            <li><i className="fas fa-phone"></i> {t('footer.contactUs.phone')}</li>
            <li><i className="fas fa-phone"></i> Urgent Contact: {t('footer.contactUs.phone2')}</li>
            <li><i className="fas fa-envelope"></i> {t('footer.contactUs.email')}</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>{t('footer.newsletter.title')}</h3>
          <p>{t('footer.newsletter.description')}</p>
          <form>
            <input type="email" placeholder={t('footer.newsletter.placeholder')} required />
            <button type="submit">{t('footer.newsletter.button')}</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nyonyi Holiday Africa. {t('footer.copyright')}</p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">{t('footer.privacyPolicy')}</a>
          <a href="/terms-of-service">{t('footer.termsOfService')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
