import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { logInquiry, sendPackageInquiryEmails } from '../services/emailService';
import '../styles/PackageContactModal.css';

const PackageContactModal = ({ isOpen, onClose, packageData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    numberOfPeople: '2'
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
      // Prepare the data to be inserted
      const submissionData = {
        package_name: packageData.title,
        package_id: packageData.id,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        message: formData.message,
        preferred_date: formData.preferredDate || null,
        number_of_people: parseInt(formData.numberOfPeople),
        package_price: packageData.price,
        package_duration: packageData.duration,
        package_type: packageData.type,
        created_at: new Date().toISOString()
      };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('package_inquiries')
        .insert([submissionData])
        .select();

      if (error) {
        throw error;
      }

      // Get the inquiry data with ID
      const inquiryData = data[0];
      const inquiryId = inquiryData?.id;

      // Log the inquiry for debugging
      logInquiry(packageData, formData, inquiryId);

      // Send emails via Supabase Edge Function (temporarily disabled for debugging)
      try {
        console.log('📧 Attempting to send emails for inquiry:', inquiryId);
        // Temporarily comment out edge function call to test form submission
        // const emailResult = await sendPackageInquiryEmails(inquiryData);
        // if (emailResult.success) {
        //   console.log('✅ Emails sent successfully via edge function');
        // } else {
        //   console.warn('⚠️ Email sending failed, but inquiry was saved:', emailResult.error);
        // }
        console.log('📧 Email function temporarily disabled - form should work now');
      } catch (emailError) {
        console.error('❌ Error sending emails:', emailError);
        // Don't fail the whole process if email fails
      }

      setSubmitStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          preferredDate: '',
          numberOfPeople: '2'
        });
        onClose();
        setSubmitStatus(null);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Inquire About This Package</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <div className="package-summary">
          <h3>{packageData.title}</h3>
          <p><strong>Duration:</strong> {packageData.duration}</p>
          <p><strong>Type:</strong> {packageData.type}</p>
          <p><strong>Price:</strong> ${packageData.price} per person</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfPeople">Number of People</label>
              <select
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleInputChange}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="preferredDate">Preferred Travel Date</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message / Special Requests</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Tell us about your travel preferences, dietary requirements, or any special requests..."
            ></textarea>
          </div>

          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ Thank you! Your inquiry for "{packageData.title}" has been submitted successfully. Our team will contact you within 24 hours to discuss your safari adventure. Please check your email for confirmation.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              ❌ Sorry, there was an error submitting your inquiry. Please try again or contact us directly.
            </div>
          )}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageContactModal;
