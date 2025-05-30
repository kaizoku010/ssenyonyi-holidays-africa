# Supabase Edge Function Setup Guide

This guide will help you deploy the `send-package-inquiry-email` edge function to automatically send emails when package inquiries are submitted.

## Prerequisites

1. **Supabase CLI** - Install the Supabase CLI
2. **Resend Account** - Sign up for a free account at [resend.com](https://resend.com)
3. **Domain Verification** - Verify your domain with Resend (or use their test domain)

## Step 1: Install Supabase CLI

```bash
# Install via npm
npm install -g supabase

# Or via homebrew (macOS)
brew install supabase/tap/supabase

# Or download from GitHub releases
# https://github.com/supabase/cli/releases
```

## Step 2: Login to Supabase

```bash
supabase login
```

This will open a browser window for you to authenticate with your Supabase account.

## Step 3: Link Your Project

```bash
# Navigate to your project directory
cd /path/to/your/project

# Link to your Supabase project
supabase link --project-ref tcavzfkqcshguuuwzrpv
```

## Step 4: Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up/login
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

## Step 5: Set Environment Variables

Set the Resend API key as an environment variable in your Supabase project:

```bash
# Set the Resend API key
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

## Step 6: Deploy the Edge Function

```bash
# Deploy the edge function
supabase functions deploy send-package-inquiry-email
```

## Step 7: Test the Edge Function

You can test the function locally or in production:

### Local Testing (Optional)

```bash
# Start local Supabase
supabase start

# Serve functions locally
supabase functions serve

# Test the function
curl -i --location --request POST 'http://localhost:54321/functions/v1/send-package-inquiry-email' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "inquiryData": {
      "id": "test-123",
      "package_name": "Test Package",
      "customer_name": "John Doe",
      "customer_email": "john@example.com",
      "customer_phone": "+1234567890",
      "message": "Test inquiry",
      "number_of_people": 2,
      "package_price": "$2000-3000",
      "package_duration": "5 days",
      "package_type": "Mid-Range"
    },
    "emailAddresses": ["test@example.com"]
  }'
```

### Production Testing

After deployment, test with a real package inquiry through your website.

## Step 8: Verify Email Delivery

1. Submit a test inquiry through your website
2. Check the browser console for success/error messages
3. Check your email inbox (team emails and customer confirmation)
4. Monitor the Supabase Functions logs in your dashboard

## Troubleshooting

### Common Issues

1. **"RESEND_API_KEY not found"**
   - Make sure you set the environment variable: `supabase secrets set RESEND_API_KEY=your_key`
   - Verify the key is correct and active in Resend dashboard

2. **"Failed to send emails"**
   - Check if your domain is verified in Resend
   - For testing, you can use Resend's test domain: `onboarding@resend.dev`
   - Check Resend dashboard for delivery logs

3. **CORS Errors**
   - The function includes CORS headers, but make sure your domain is allowed
   - Check browser network tab for detailed error messages

4. **Function Not Found**
   - Verify the function was deployed: `supabase functions list`
   - Check the function name matches exactly: `send-package-inquiry-email`

### Checking Logs

```bash
# View function logs
supabase functions logs send-package-inquiry-email

# View real-time logs
supabase functions logs send-package-inquiry-email --follow
```

## Email Configuration

### Team Email Addresses

The function sends notifications to these addresses (configured in `src/services/emailService.js`):
- info@nyonyiholidays.com
- bookings@nyonyiholidays.com
- sales@nyonyiholidays.com

### From Address

Currently set to: `Nyonyi Holidays <noreply@nyonyiholidays.com>`

**Important**: You need to verify this domain in Resend, or change it to a verified domain.

### For Testing

You can temporarily change the from address to Resend's test domain:
```typescript
from: 'onboarding@resend.dev'
```

## Production Checklist

- [ ] Supabase CLI installed and authenticated
- [ ] Project linked to Supabase
- [ ] Resend account created and API key obtained
- [ ] Domain verified in Resend (or using test domain)
- [ ] Environment variable set in Supabase
- [ ] Edge function deployed successfully
- [ ] Test inquiry submitted and emails received
- [ ] Function logs checked for any errors

## Next Steps

Once the edge function is working:

1. **Update Email Addresses**: Change the team email addresses in `src/services/emailService.js` to your actual business emails
2. **Customize Email Templates**: Modify the HTML templates in the edge function to match your branding
3. **Add Email Tracking**: Consider adding email tracking/analytics
4. **Set up Monitoring**: Monitor function performance and email delivery rates

## Support

If you encounter issues:
1. Check the Supabase Functions documentation
2. Review Resend API documentation
3. Check browser console and function logs for detailed error messages
