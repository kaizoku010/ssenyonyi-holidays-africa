# Package Inquiry System Setup

This document explains how to set up the package inquiry system with Supabase integration.

## Features Implemented

✅ **Package Content Updated**: All 9 packages now have the new Uganda/Rwanda safari content
✅ **Contact Modal**: Replaced "View Details" with "Inquire Now" button that opens a contact form
✅ **Supabase Integration**: Form submissions are stored in Supabase database
✅ **Email Logging**: Inquiry details are logged to console with email templates
✅ **Responsive Design**: Modal works on all devices
✅ **Multi-language Support**: English and Chinese translations included

## Supabase Database Setup

### 1. Create the Database Table

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create table for package inquiries
CREATE TABLE IF NOT EXISTS package_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  package_name TEXT NOT NULL,
  package_id INTEGER NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  message TEXT,
  preferred_date DATE,
  number_of_people INTEGER DEFAULT 2,
  package_price TEXT,
  package_duration TEXT,
  package_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_package_inquiries_created_at ON package_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_package_inquiries_email ON package_inquiries(customer_email);

-- Enable Row Level Security
ALTER TABLE package_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for form submissions)
CREATE POLICY "Allow public insert" ON package_inquiries
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all records
CREATE POLICY "Allow authenticated read" ON package_inquiries
  FOR SELECT TO authenticated
  USING (true);
```

### 2. Supabase Configuration

The Supabase client is already configured in `src/lib/supabase.js` with your provided credentials:
- URL: `https://tcavzfkqcshguuuwzrpv.supabase.co`
- Anon Key: Already configured

## How It Works

### 1. User Experience
1. User clicks "Inquire Now" on any package
2. Modal opens with package details pre-filled
3. User fills out contact form
4. Form submits to Supabase database
5. Success message shows with confirmation

### 2. Data Storage
- All inquiries are stored in the `package_inquiries` table
- Includes customer details, package info, and preferences
- Timestamped for tracking

### 3. Email Notifications (Current Implementation)
- Inquiry details are logged to browser console
- Email templates are generated for:
  - Team notification email
  - Customer confirmation email
- Check browser console for email content to send manually

## Email Setup Options

### Option 1: Supabase Edge Functions (Recommended) ✅ IMPLEMENTED
The edge function has been created and integrated! See `EDGE_FUNCTION_SETUP.md` for deployment instructions.

```javascript
// Edge function is already integrated in PackageContactModal.js
const { error } = await supabase.functions.invoke('send-package-inquiry-email', {
  body: { inquiryData, emailAddresses }
});
```

**Files created:**
- `supabase/functions/send-package-inquiry-email/index.ts` - Edge function code
- `supabase/config.toml` - Supabase configuration
- `deploy-edge-function.sh` - Deployment script
- `EDGE_FUNCTION_SETUP.md` - Detailed setup guide

### Option 2: Third-party Email Service
- EmailJS
- Formspree
- SendGrid API

### Option 3: Backend API
- Create your own email sending endpoint
- Use nodemailer or similar

## Monitoring Inquiries

### Supabase Dashboard
1. Go to your Supabase project dashboard
2. Navigate to Table Editor
3. Select `package_inquiries` table
4. View all submissions in real-time

### Browser Console
- Open browser developer tools
- Check console for detailed inquiry logs
- Copy email templates to send manually

## Package Data Structure

Each package includes:
- Title (with Uganda flag emoji)
- Duration
- Type (Mid-Range/High-End)
- Destinations array
- Highlights array
- Accommodation details
- Price range
- Inclusions

## Files Modified/Created

### New Files:
- `src/lib/supabase.js` - Supabase client configuration
- `src/components/PackageContactModal.js` - Contact form modal
- `src/styles/PackageContactModal.css` - Modal styling
- `src/services/emailService.js` - Email template generation and edge function integration
- `supabase-setup.sql` - Database setup script
- `supabase/functions/send-package-inquiry-email/index.ts` - Edge function for sending emails
- `supabase/config.toml` - Supabase configuration
- `deploy-edge-function.sh` - Edge function deployment script
- `EDGE_FUNCTION_SETUP.md` - Edge function setup guide
- `test-edge-function.js` - Test script for edge function

### Modified Files:
- `src/components/PackagesPage.js` - Updated with new packages and modal integration
- `src/i18n.js` - Added "Inquire Now" translations
- Package data updated with new Uganda/Rwanda content

## Testing

1. Navigate to `/packages` page
2. Click "Inquire Now" on any package
3. Fill out the form and submit
4. Check browser console for email templates
5. Verify data in Supabase dashboard

## Next Steps

1. Set up automated email sending (choose one of the options above)
2. Add email templates to your email service
3. Configure email addresses for your team
4. Test the complete flow including email delivery

## Support

For questions about this implementation, check:
- Browser console for error messages
- Supabase dashboard for data verification
- Network tab for API call debugging
