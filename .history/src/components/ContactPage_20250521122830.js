import React, { useState } from 'react';
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
          <h1>Reach out</h1>
          <p>Get in touch with our team for inquiries, bookings, or custom travel plans</p>
        </div>
      </header>

      <main className="contact-content">
        <div className="contact-overview">
          <div className="contact-form-section">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
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
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {state.succeeded && (
                    <div className="form-success">
                      <i className="fas fa-check-circle"></i>
                      <p>Your message has been sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {state.errors && state.errors.length > 0 && (
                    <div className="form-error">
                      <i className="fas fa-exclamation-circle"></i>
                      <p>There was an error sending your message. Please check the form and try again.</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="contact-info-section">
            <Card className="contact-info-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Our Location</h3>
                      <p>0000 Kampala, Uganda</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Phone Number</h3>
                      <p>+256 701 261 427</p>
                      <p>+256 750 323 993
</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Email Address</h3>
                      <p>info@nyoniholidaysafrica.com</p>
                      <p>bookings@nyoniholidaysafrica.com</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Working Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="social-media-links">
                  <h3>Connect With Us</h3>
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
                    <p>Interactive Map Coming Soon</p>
                    <Button className="view-map-button">
                      <i className="fas fa-map-marked-alt"></i> View on Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I book a tour?</h3>
              <p>You can book a tour by filling out the contact form above, calling us directly, or using the booking form on our package pages. We'll get back to you within 24 hours to confirm your booking.</p>
            </div>

            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept credit/debit cards, bank transfers, and mobile money payments. A 30% deposit is required to confirm your booking, with the balance due 30 days before your trip.</p>
            </div>

            <div className="faq-item">
              <h3>Can I customize a tour package?</h3>
              <p>Absolutely! We specialize in creating custom itineraries tailored to your preferences, timeframe, and budget. Contact us with your requirements, and we'll design a personalized experience for you.</p>
            </div>

            <div className="faq-item">
              <h3>What is your cancellation policy?</h3>
              <p>Cancellations made 60+ days before departure receive a full refund minus a $100 admin fee. Cancellations 30-59 days before departure receive a 50% refund. Cancellations less than 30 days before departure are non-refundable.</p>
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
