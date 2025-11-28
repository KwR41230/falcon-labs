import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, company, role, testimonial, rating, email } = await request.json()

    // Validate required fields
    if (!name || !testimonial || !rating) {
      return NextResponse.json(
        { error: 'Missing required fields: name, testimonial, and rating' },
        { status: 400 }
      )
    }

    // Validate rating (1-5 stars)
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5 stars' },
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

    // Prepare testimonial submission email
    const emailData = {
      from: {
        email: MAILER_SEND_FROM_EMAIL,
        name: 'Falcon Labs Testimonial Submission'
      },
      reply_to: email ? {
        email: email,
        name: name
      } : undefined,
      to: [
        {
          email: MAILER_SEND_TO_EMAIL,
          name: 'Kevin Rasmussen'
        }
      ],
      subject: `New Testimonial Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b;">New Testimonial Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            <p><strong>Rating:</strong> ${'★'.repeat(rating)}${'☆'.repeat(5-rating)} (${rating}/5)</p>
            <p><strong>Testimonial:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f59e0b;">
              ${testimonial.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="background: #fef3c7; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px;">
              <strong>Action Required:</strong> Review this testimonial and manually add it to the testimonials page if approved.
            </p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This testimonial was submitted via the Falcon Labs website.
          </p>
        </div>
      `,
      text: `
New Testimonial Submission

Name: ${name}
${company ? `Company: ${company}` : ''}
${role ? `Role: ${role}` : ''}
${email ? `Email: ${email}` : ''}
Rating: ${rating}/5 stars

Testimonial:
${testimonial}

---
Action Required: Review this testimonial and manually add it to the testimonials page if approved.
This testimonial was submitted via the Falcon Labs website.
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
        { error: 'Failed to send testimonial' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Thank you for your testimonial! It will be reviewed and added to our site if approved.',
        status: 'submitted'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Testimonial submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}