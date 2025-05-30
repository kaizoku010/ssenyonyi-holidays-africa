import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactData {
  contactData: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    created_at: string;
  };
  emailAddresses: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { contactData, emailAddresses }: ContactData = await req.json()

    // Validate required data
    if (!contactData || !emailAddresses || emailAddresses.length === 0) {
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
    const teamEmailSubject = `📞 New Contact Message: ${contactData.subject}`
    const teamEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5530;">📞 New Contact Message Received</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">👤 Contact Information</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
          <p><strong>Subject:</strong> ${contactData.subject}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">💬 Message</h3>
          <p style="white-space: pre-wrap;">${contactData.message}</p>
        </div>

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #2c5530;"><strong>Message ID:</strong> ${contactData.id}</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
            Received: ${new Date(contactData.created_at).toLocaleString()}
          </p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
            Please respond to this message promptly for the best customer experience.
          </p>
        </div>

        <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <p style="margin: 0; color: #856404;">
            <strong>Action Required:</strong> Reply directly to ${contactData.email} to respond to this inquiry.
          </p>
        </div>
      </div>
    `

    // Prepare customer confirmation email
    const customerEmailSubject = `Thank you for contacting Nyonyi Holidays!`
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5530;">Thank you for reaching out!</h2>
        
        <p>Dear ${contactData.name},</p>
        
        <p>Thank you for contacting <strong>Nyonyi Holidays</strong>! We have received your message and appreciate you taking the time to reach out to us.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">📋 Your Message Summary</h3>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Sent:</strong> ${new Date(contactData.created_at).toLocaleString()}</p>
          <p><strong>Reference ID:</strong> ${contactData.id}</p>
        </div>

        <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">⏰ What happens next?</h3>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Our team will review your message within 24 hours</li>
            <li>We'll respond directly to your email: ${contactData.email}</li>
            <li>For urgent matters, you can call us directly</li>
          </ul>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">📞 Contact Information</h3>
          <p><strong>Email:</strong> info@nyonyiholidays.com</p>
          <p><strong>Phone:</strong> +256 XXX XXX XXX</p>
          <p><strong>Website:</strong> www.nyonyiholidays.com</p>
        </div>

        <p>We look forward to helping you plan your perfect African adventure!</p>

        <p>Best regards,<br>
        <strong>The Nyonyi Holidays Team</strong></p>

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            This is an automated confirmation. Please do not reply to this email.
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
        from: 'onboarding@resend.dev',
        to: emailAddresses,
        subject: teamEmailSubject,
        html: teamEmailHtml,
        reply_to: contactData.email, // Allow direct reply to customer
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
        from: 'onboarding@resend.dev',
        to: [contactData.email],
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
        message: 'Contact emails sent successfully'
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send contact emails',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
