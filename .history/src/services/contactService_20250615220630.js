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

// Send contact emails via Formspree
export const sendContactEmails = async (contactData) => {
  try {
    const response = await fetch('https://formspree.io/f/mldnnwgv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone || 'Not provided',
        subject: contactData.subject,
        message: contactData.message,
        contact_id: contactData.id
      })
    });
    if (response.ok) {
      return { success: true };
    } else {
      const errorText = await response.text();
      return { success: false, error: errorText };
    }
  } catch (error) {
    return { success: false, error: error.message };
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
