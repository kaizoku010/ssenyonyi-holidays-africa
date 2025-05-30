import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { logContactInquiry, sendContactEmails } from '../services/contactService';
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

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Debug: Log the form data
      console.log('🔍 Contact Form Data:', formData);

      // Prepare the data to be inserted
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject,
        message: formData.message,
        created_at: new Date().toISOString()
      };

      console.log('📤 Contact Submission Data:', submissionData);

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([submissionData])
        .select();

      if (error) {
        console.error('❌ Supabase Error Details:', error);
        throw error;
      }

      console.log('✅ Contact data inserted successfully:', data);

      // Get the contact data with ID
      const contactData = data[0];

      // Log the contact inquiry for debugging
      logContactInquiry(contactData);

      // Send emails via Supabase Edge Function (temporarily disabled for testing)
      try {
        console.log('📧 Attempting to send contact emails for:', contactData.id);
        // Temporarily comment out edge function call to test form submission
        // const emailResult = await sendContactEmails(contactData);
        // if (emailResult.success) {
        //   console.log('✅ Contact emails sent successfully via edge function');
        // } else {
        //   console.warn('⚠️ Contact email sending failed, but message was saved:', emailResult.error);
        // }
        console.log('📧 Contact email function temporarily disabled - form should work now');
      } catch (emailError) {
        console.error('❌ Error sending contact emails:', emailError);
        // Don't fail the whole process if email fails
      }

      setSubmitStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contactPage.form.fullNamePlaceholder')}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t('contactPage.form.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.form.emailPlaceholder')}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">{t('contactPage.form.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
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
                      value={formData.subject}
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
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contactPage.form.messagePlaceholder')}
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contactPage.form.sendingButton') : t('contactPage.form.sendButton')}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="form-success">
                      <i className="fas fa-check-circle"></i>
                      <p>{t('contactPage.form.successMessage')}</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
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
                      {/* <p>{t('contactPage.contactInfo.phone.number2')}</p> */}
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
