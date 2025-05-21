import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Button } from './ui/button';
import Navbar from './Navbar';
import Footer from './Footer';
import CallToAction from './CallToAction';
import '../styles/ContactPage.css';

// Import images
import kitandra from '../media/kitandra.jpg';

const ContactPage = () => {
  const { t } = useTranslation();

  // Using Formspree hook with the form ID from your example
  const [state, handleSubmit] = useForm("xnnddyzv");

  // State for form fields that aren't directly handled by Formspree
  const [formValues, setFormValues] = useState({
    phone: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <Navbar />
        <div className="hero-content">
          <h1>{t('contactPage.hero.title')}</h1>
          <p>{t('contactPage.hero.subtitle')}</p>
        </div>
      </header>

      <main className="contact-content">
        <div className="contact-overview">
          <div className="contact-form-section">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>{t('contactPage.form.title')}</CardTitle>
                <CardDescription>{t('contactPage.form.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">{t('contactPage.form.fullName')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t('contactPage.form.fullNamePlaceholder')}
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t('contactPage.form.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('contactPage.form.emailPlaceholder')}
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">{t('contactPage.form.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">{t('contactPage.form.subject')}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      placeholder={t('contactPage.form.subjectPlaceholder')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('contactPage.form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                      rows="5"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button
                    type="submit"
                    className="submit-button"
                    disabled={state.submitting}
                  >
                    {state.submitting ? t('contactPage.form.sendingButton') : t('contactPage.form.sendButton')}
                  </Button>

                  {state.succeeded && (
                    <div className="form-success">
                      <i className="fas fa-check-circle"></i>
                      <p>{t('contactPage.form.successMessage')}</p>
                    </div>
                  )}

                  {state.errors && state.errors.length > 0 && (
                    <div className="form-error">
                      <i className="fas fa-exclamation-circle"></i>
                      <p>{t('contactPage.form.errorMessage')}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="contact-info-section">
            <Card className="contact-info-card">
              <CardHeader>
                <CardTitle>{t('contactPage.contactInfo.title')}</CardTitle>
                <CardDescription>{t('contactPage.contactInfo.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h3>{t('contactPage.contactInfo.location.title')}</h3>
                      <p>{t('contactPage.contactInfo.location.address')}</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h3>{t('contactPage.contactInfo.phone.title')}</h3>
                      <p>{t('contactPage.contactInfo.phone.number1')}</p>
                      <p>{t('contactPage.contactInfo.phone.number2')}</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <h3>{t('contactPage.contactInfo.email.title')}</h3>
                      <p>{t('contactPage.contactInfo.email.address')}</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-details">
                      <h3>{t('contactPage.contactInfo.hours.title')}</h3>
                      <p>{t('contactPage.contactInfo.hours.weekdays')}</p>
                      <p>{t('contactPage.contactInfo.hours.saturday')}</p>
                      <p>{t('contactPage.contactInfo.hours.sunday')}</p>
                    </div>
                  </div>
                </div>

                <div className="social-media-links">
                  <h3>{t('contactPage.contactInfo.social.title')}</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="map-card">
              <CardContent>
                <div className="map-placeholder">
                  <img src={kitandra} alt="Map location" />
                  <div className="map-overlay">
                    <p>{t('contactPage.contactInfo.map.comingSoon')}</p>
                    <Button className="view-map-button">
                      <i className="fas fa-map-marked-alt"></i> {t('contactPage.contactInfo.map.viewButton')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="faq-section">
          <h2>{t('contactPage.faq.title')}</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t('contactPage.faq.questions.booking.question')}</h3>
              <p>{t('contactPage.faq.questions.booking.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactPage.faq.questions.payment.question')}</h3>
              <p>{t('contactPage.faq.questions.payment.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactPage.faq.questions.customization.question')}</h3>
              <p>{t('contactPage.faq.questions.customization.answer')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactPage.faq.questions.cancellation.question')}</h3>
              <p>{t('contactPage.faq.questions.cancellation.answer')}</p>
            </div>
          </div>
        </div>
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ContactPage;
