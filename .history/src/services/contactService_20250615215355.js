// Contact service for contact form submissions
// This service handles contact form data and sending via EmailJS

import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("KSkFX4Jhh3wpjhiCY");

// Email configuration
const EMAIL_CONFIG = {
  teamEmails: [
    'info@nyonyiholidaysafrica.com'
  ]
};

// Send contact emails via EmailJS
export const sendContactEmails = async (contactData) => {
  try {
    console.log('📧 Sending contact email with EmailJS for:', contactData.subject);

    const result = await emailjs.send(
      'default_service', // Use your service ID
      'template_contact', // Use your contact template ID
      {
        to_name: 'Nyonyi Holidays Team',
        to_email: 'info@nyonyiholidaysafrica.com',
        from_name: contactData.name,
        from_email: contactData.email,
        phone: contactData.phone || 'Not provided',
        subject: contactData.subject,
        message: contactData.message,
        contact_id: contactData.id
      }
    );

    console.log('✅ Contact email sent successfully!', result);
    alert('✅ CONTACT EMAIL SENT! Check info@nyonyiholidaysafrica.com');
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ EmailJS contact failed:', error);
    alert('❌ CONTACT EMAIL FAILED: ' + error.text);
    return { success: false, error: error.text };
  }
};

// Log contact inquiry for debugging
export const logContactInquiry = (contactData) => {
  console.log('=== NEW CONTACT MESSAGE ===');
  console.log('Contact ID:', contactData.id);
  console.log('Name:', contactData.name);
  console.log('Email:', contactData.email);
  console.log('Subject:', contactData.subject);
  console.log('Message:', contactData.message);
  console.log('=== END CONTACT MESSAGE ===');
};

const contactService = {
  sendContactEmails,
  logContactInquiry
};

export default contactService;
