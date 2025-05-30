#!/bin/bash

# Supabase Edge Function Deployment Script
# This script helps deploy the package inquiry email function

echo "🚀 Deploying Supabase Edge Function for Package Inquiry Emails"
echo "=============================================================="

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI is not installed."
    echo "Please install it first:"
    echo "npm install -g supabase"
    echo "or visit: https://supabase.com/docs/guides/cli"
    exit 1
fi

echo "✅ Supabase CLI found"

# Check if user is logged in
if ! supabase projects list &> /dev/null; then
    echo "❌ Not logged in to Supabase."
    echo "Please run: supabase login"
    exit 1
fi

echo "✅ Supabase authentication verified"

# Check if project is linked
if [ ! -f ".supabase/config.toml" ]; then
    echo "❌ Project not linked to Supabase."
    echo "Please run: supabase link --project-ref tcavzfkqcshguuuwzrpv"
    exit 1
fi

echo "✅ Project linked to Supabase"

# Check for Resend API key
echo ""
echo "🔑 Checking environment variables..."
if ! supabase secrets list | grep -q "RESEND_API_KEY"; then
    echo "⚠️  RESEND_API_KEY not found in Supabase secrets."
    echo ""
    read -p "Do you have a Resend API key? (y/n): " has_key
    
    if [ "$has_key" = "y" ] || [ "$has_key" = "Y" ]; then
        read -p "Enter your Resend API key: " api_key
        echo "Setting RESEND_API_KEY..."
        supabase secrets set RESEND_API_KEY="$api_key"
        echo "✅ RESEND_API_KEY set successfully"
    else
        echo ""
        echo "📧 You need a Resend API key to send emails."
        echo "1. Go to https://resend.com"
        echo "2. Sign up for a free account"
        echo "3. Create an API key"
        echo "4. Run this script again"
        exit 1
    fi
else
    echo "✅ RESEND_API_KEY found in Supabase secrets"
fi

# Deploy the function
echo ""
echo "📦 Deploying edge function..."
if supabase functions deploy send-package-inquiry-email; then
    echo "✅ Edge function deployed successfully!"
else
    echo "❌ Failed to deploy edge function"
    exit 1
fi

# Test the deployment
echo ""
echo "🧪 Testing the deployed function..."
echo "You can test it by:"
echo "1. Going to your website"
echo "2. Clicking 'Inquire Now' on any package"
echo "3. Filling out and submitting the form"
echo "4. Checking your email and browser console"

echo ""
echo "📊 To monitor function logs, run:"
echo "supabase functions logs send-package-inquiry-email --follow"

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Test the function with a real inquiry"
echo "2. Verify emails are being sent and received"
echo "3. Update email addresses in src/services/emailService.js if needed"
echo "4. Customize email templates in the edge function if desired"
