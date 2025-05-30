// Test script for the Supabase Edge Function
// Run this with: node test-edge-function.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tcavzfkqcshguuuwzrpv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjYXZ6ZmtxY3NoZ3V1dXd6cnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTgwMjMsImV4cCI6MjA1OTY3NDAyM30.ATZqiD8TQPFDN4bE9DSSc4Fi5TWoDgvxRXasg5Axo7o';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testEdgeFunction() {
  console.log('🧪 Testing Supabase Edge Function...');
  
  const testInquiryData = {
    id: 'test-' + Date.now(),
    package_name: '🇺🇬 Uganda Gorilla Trekking Adventure',
    customer_name: 'Test Customer',
    customer_email: 'test@example.com',
    customer_phone: '+1234567890',
    message: 'This is a test inquiry to verify the email function works.',
    preferred_date: '2024-06-15',
    number_of_people: 2,
    package_price: '$2000-3000',
    package_duration: '5 days',
    package_type: 'Mid-Range'
  };

  const emailAddresses = [
    'test@example.com' // Replace with your test email
  ];

  try {
    console.log('📤 Calling edge function...');
    
    const { data, error } = await supabase.functions.invoke('send-package-inquiry-email', {
      body: { 
        inquiryData: testInquiryData,
        emailAddresses: emailAddresses
      }
    });

    if (error) {
      console.error('❌ Error calling edge function:', error);
      return;
    }

    console.log('✅ Edge function called successfully!');
    console.log('📧 Response:', data);
    
    if (data.success) {
      console.log('🎉 Emails sent successfully!');
      console.log('📨 Team email ID:', data.teamEmailId);
      console.log('📨 Customer email ID:', data.customerEmailId);
    } else {
      console.log('⚠️ Function executed but emails may not have been sent');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the test
testEdgeFunction();
