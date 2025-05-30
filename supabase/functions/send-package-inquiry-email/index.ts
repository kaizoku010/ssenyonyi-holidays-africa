import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailData {
  inquiryData: {
    id: string;
    package_name: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    message: string;
    preferred_date?: string;
    number_of_people: number;
    package_price: string;
    package_duration: string;
    package_type: string;
  };
  emailAddresses: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { inquiryData, emailAddresses }: EmailData = await req.json()

    // Validate required data
    if (!inquiryData || !emailAddresses || emailAddresses.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Missing required data' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare email content for team notification
    const teamEmailSubject = `New Package Inquiry: ${inquiryData.package_name}`
    const teamEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5530;">New Package Inquiry Received</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Package Details</h3>
          <p><strong>Package:</strong> ${inquiryData.package_name}</p>
          <p><strong>Duration:</strong> ${inquiryData.package_duration}</p>
          <p><strong>Type:</strong> ${inquiryData.package_type}</p>
          <p><strong>Price Range:</strong> ${inquiryData.package_price}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${inquiryData.customer_name}</p>
          <p><strong>Email:</strong> ${inquiryData.customer_email}</p>
          <p><strong>Phone:</strong> ${inquiryData.customer_phone}</p>
          <p><strong>Number of People:</strong> ${inquiryData.number_of_people}</p>
          ${inquiryData.preferred_date ? `<p><strong>Preferred Date:</strong> ${inquiryData.preferred_date}</p>` : ''}
        </div>

        ${inquiryData.message ? `
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Customer Message</h3>
          <p style="white-space: pre-wrap;">${inquiryData.message}</p>
        </div>
        ` : ''}

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #2c5530;"><strong>Inquiry ID:</strong> ${inquiryData.id}</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
            Please respond to this inquiry within 24 hours for the best customer experience.
          </p>
        </div>
      </div>
    `

    // Prepare customer confirmation email
    const customerEmailSubject = `Thank you for your interest in ${inquiryData.package_name}!`
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5530;">Thank you for your inquiry!</h2>
        
        <p>Dear ${inquiryData.customer_name},</p>
        
        <p>Thank you for your interest in our <strong>${inquiryData.package_name}</strong> package!</p>
        
        <p>We have received your inquiry and our team will contact you within 24 hours to discuss your safari adventure and provide you with a detailed itinerary and pricing.</p>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Inquiry Summary</h3>
          <p><strong>Package:</strong> ${inquiryData.package_name}</p>
          <p><strong>Duration:</strong> ${inquiryData.package_duration}</p>
          <p><strong>Number of People:</strong> ${inquiryData.number_of_people}</p>
          ${inquiryData.preferred_date ? `<p><strong>Preferred Date:</strong> ${inquiryData.preferred_date}</p>` : '<p><strong>Preferred Date:</strong> To be discussed</p>'}
        </div>

        <p>In the meantime, feel free to explore our other packages or contact us directly:</p>
        <ul>
          <li>Email: info@nyonyiholidays.com</li>
          <li>Phone: +256 XXX XXX XXX</li>
        </ul>

        <p>We look forward to creating an unforgettable African adventure for you!</p>

        <p>Best regards,<br>
        The Nyonyi Holidays Team</p>

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            <strong>Reference ID:</strong> ${inquiryData.id}
          </p>
        </div>
      </div>
    `

    // Send team notification email
    const teamEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nyonyi Holidays <noreply@nyonyiholidays.com>',
        to: emailAddresses,
        subject: teamEmailSubject,
        html: teamEmailHtml,
      }),
    })

    if (!teamEmailResponse.ok) {
      const errorText = await teamEmailResponse.text()
      console.error('Failed to send team email:', errorText)
      throw new Error(`Failed to send team notification: ${teamEmailResponse.status}`)
    }

    // Send customer confirmation email
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nyonyi Holidays <noreply@nyonyiholidays.com>',
        to: [inquiryData.customer_email],
        subject: customerEmailSubject,
        html: customerEmailHtml,
      }),
    })

    if (!customerEmailResponse.ok) {
      const errorText = await customerEmailResponse.text()
      console.error('Failed to send customer email:', errorText)
      // Don't throw here - team email was sent successfully
    }

    const teamEmailData = await teamEmailResponse.json()
    const customerEmailData = customerEmailResponse.ok ? await customerEmailResponse.json() : null

    return new Response(
      JSON.stringify({ 
        success: true, 
        teamEmailId: teamEmailData.id,
        customerEmailId: customerEmailData?.id,
        message: 'Emails sent successfully'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-package-inquiry-email function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send emails',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
