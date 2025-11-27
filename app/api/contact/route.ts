import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, selectedPackage, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // MailerSend API configuration
    const MAILER_SEND_API_KEY = process.env.MAILERSEND_API_KEY
    const MAILER_SEND_FROM_EMAIL = process.env.MAILERSEND_FROM_EMAIL || 'noreply@yourdomain.com'
    const MAILER_SEND_TO_EMAIL = process.env.MAILERSEND_TO_EMAIL || 'your-email@example.com'

    if (!MAILER_SEND_API_KEY) {
      console.error('MAILER_SEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Prepare email data for MailerSend
    const emailData = {
      from: {
        email: MAILER_SEND_FROM_EMAIL,
        name: 'Falcon Labs Contact Form'
      },
      reply_to: {
        email: email,
        name: name
      },
      to: [
        {
          email: MAILER_SEND_TO_EMAIL,
          name: 'Kevin Rasmussen'
        }
      ],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${selectedPackage ? `<p><strong>Package Interest:</strong> ${selectedPackage}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f59e0b;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Falcon Labs contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${selectedPackage ? `Package Interest: ${selectedPackage}` : ''}

Message:
${message}

---
This message was sent from the Falcon Labs contact form.
      `
    }

    // Send email via MailerSend API
    const response = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILER_SEND_API_KEY}`,
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(emailData)
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('MailerSend API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // MailerSend returns 202 with empty body for successful sends
    let result
    try {
      const responseText = await response.text()
      result = responseText ? JSON.parse(responseText) : { success: true }
    } catch (parseError) {
      // If parsing fails, assume success since we got a 2xx response
      result = { success: true, messageId: response.headers.get('x-message-id') }
    }

    console.log('Email sent successfully:', result)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}