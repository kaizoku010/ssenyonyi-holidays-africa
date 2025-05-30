// Contact service for contact form submissions
// This service handles contact form data and sending via Supabase Edge Functions

import { supabase } from '../lib/supabase';

// Email configuration
const EMAIL_CONFIG = {
  teamEmails: [
    'dixontheworldvsy@gmail.com',
    'info@nyonyiholidays.com',
    'support@nyonyiholidays.com'
  ]
};

// Send contact emails via Supabase Edge Function
export const sendContactEmails = async (contactData) => {
  try {
    console.log('🔥 CALLING CONTACT EDGE FUNCTION WITH:', {
      contactData,
      emailAddresses: EMAIL_CONFIG.teamEmails
    });

    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        contactData,
        emailAddresses: EMAIL_CONFIG.teamEmails
      }
    });

    console.log('🔥 CONTACT EDGE FUNCTION RESPONSE:', { data, error });

    if (error) {
      console.error('🔥 CONTACT EDGE FUNCTION ERROR:', error);
      throw error;
    }

    console.log('✅ Contact emails sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Failed to send contact emails:', error);
    console.error('❌ Full contact error object:', error);
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
