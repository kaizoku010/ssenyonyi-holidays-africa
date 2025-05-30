// Email service for package inquiries
// This service handles email template generation and sending via Supabase Edge Functions

import { supabase } from '../lib/supabase';

export const generateEmailTemplate = (packageData, customerData, inquiryId) => {
  const emailTemplate = {
    subject: `New Package Inquiry: ${packageData.title}`,
    body: `
Dear Nyonyi Holidays Team,

You have received a new package inquiry with the following details:

INQUIRY DETAILS:
- Inquiry ID: ${inquiryId}
- Package: ${packageData.title}
- Package Type: ${packageData.type}
- Duration: ${packageData.duration}
- Price Range: $${packageData.price} per person

CUSTOMER INFORMATION:
- Name: ${customerData.name}
- Email: ${customerData.email}
- Phone: ${customerData.phone || 'Not provided'}
- Number of People: ${customerData.numberOfPeople}
- Preferred Travel Date: ${customerData.preferredDate || 'Not specified'}

MESSAGE:
${customerData.message || 'No additional message provided'}

PACKAGE HIGHLIGHTS:
${packageData.highlights.map(highlight => `- ${highlight}`).join('\n')}

ACCOMMODATION:
${packageData.accommodation}

INCLUSIONS:
${packageData.inclusions}

Please respond to the customer within 24 hours at: ${customerData.email}

Best regards,
Nyonyi Holidays Website System
    `,
    customerConfirmation: {
      subject: `Thank you for your inquiry - ${packageData.title}`,
      body: `
Dear ${customerData.name},

Thank you for your interest in our ${packageData.title} package!

We have received your inquiry and our team will contact you within 24 hours to discuss your safari adventure and provide you with a detailed itinerary and pricing.

INQUIRY SUMMARY:
- Package: ${packageData.title}
- Duration: ${packageData.duration}
- Number of People: ${customerData.numberOfPeople}
- Preferred Date: ${customerData.preferredDate || 'To be discussed'}

In the meantime, feel free to explore our other packages or contact us directly:
- Email: info@nyonyiholidays.com
- Phone: +256 XXX XXX XXX

We look forward to creating an unforgettable African adventure for you!

Best regards,
The Nyonyi Holidays Team
      `
    }
  };

  return emailTemplate;
};

// Email configuration
const EMAIL_CONFIG = {
  teamEmails: [
    'info@nyonyiholidays.com',
    'bookings@nyonyiholidays.com',
    'sales@nyonyiholidays.com'
  ]
};

// Send emails via Supabase Edge Function
export const sendPackageInquiryEmails = async (inquiryData) => {
  try {
    const { data, error } = await supabase.functions.invoke('send-package-inquiry-email', {
      body: {
        inquiryData,
        emailAddresses: EMAIL_CONFIG.teamEmails
      }
    });

    if (error) {
      console.error('Error calling edge function:', error);
      throw error;
    }

    console.log(' Emails sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Failed to send emails:', error);
    return { success: false, error: error.message };
  }
};

export const logInquiry = (packageData, customerData, inquiryId) => {
  const emailTemplate = generateEmailTemplate(packageData, customerData, inquiryId);

  console.log('=== NEW PACKAGE INQUIRY ===');
  console.log('Inquiry ID:', inquiryId);
  console.log('Package:', packageData.title);
  console.log('Customer:', customerData.name, '(' + customerData.email + ')');
  console.log('');
  console.log('EMAIL TO SEND TO TEAM:');
  console.log('To: dixontheworldvsy@gmail.com, bookings@nyonyiholidays.com, sales@nyonyiholidays.com');
  console.log('Subject:', emailTemplate.subject);
  console.log('Body:', emailTemplate.body);
  console.log('');
  console.log('CUSTOMER CONFIRMATION EMAIL:');
  console.log('To:', customerData.email);
  console.log('Subject:', emailTemplate.customerConfirmation.subject);
  console.log('Body:', emailTemplate.customerConfirmation.body);
  console.log('=== END INQUIRY ===');

  return emailTemplate;
};

// Instructions for setting up email notifications
export const getEmailSetupInstructions = () => {
  return `
To set up automatic email notifications for package inquiries:

1. SUPABASE EDGE FUNCTIONS (Recommended):
   - Create a Supabase Edge Function to handle email sending
   - Use a service like SendGrid, Mailgun, or Resend for email delivery
   - Update the PackageContactModal.js to call the edge function

2. THIRD-PARTY EMAIL SERVICE:
   - Integrate with EmailJS, Formspree, or similar service
   - Add API keys to environment variables
   - Update the form submission logic

3. BACKEND API:
   - Create a backend API endpoint to handle form submissions
   - Use nodemailer or similar library to send emails
   - Update the frontend to call your API

For now, all inquiries are stored in Supabase and logged to the console.
Check the browser console and Supabase dashboard for new inquiries.
  `;
};

const emailService = {
  generateEmailTemplate,
  logInquiry,
  sendPackageInquiryEmails,
  getEmailSetupInstructions
};

export default emailService;
