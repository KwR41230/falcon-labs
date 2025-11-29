import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { paymentType, clientName, clientEmail, description, amount, dueDate, terms, package: packageType } = await request.json()

    // Create a customer
    const customer = await stripe.customers.create({
      name: clientName,
      email: clientEmail
    })

    if (paymentType === 'subscription') {
      // For subscriptions, create a product and price, then create a checkout session
      const product = await stripe.products.create({
        name: `Maintenance: ${description}`,
        description: terms
      })

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(parseFloat(amount) * 100), // Convert to cents
        currency: 'usd',
        recurring: {
          interval: 'month'
        }
      })

      // Create a checkout session for the subscription
      const session = await stripe.checkout.sessions.create({
        customer_email: clientEmail,
        line_items: [{
          price: price.id,
          quantity: 1
        }],
        mode: 'subscription',
        success_url: `${process.env.NEXTAUTH_URL}/admin?success=subscription_created&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXTAUTH_URL}/admin?canceled=true`,
        metadata: {
          clientName,
          clientEmail,
          description,
          terms
        }
      })

      return NextResponse.json({
        success: true,
        checkoutUrl: session.url,
        type: 'subscription',
        message: 'Checkout session created. Send this link to the client to complete subscription setup.'
      })
    } else {
      // For invoices, create a regular invoice
      const invoice = await stripe.invoices.create({
        customer: customer.id,
        description: terms ? `${description}\n\nTerms: ${terms}` : description,
        due_date: Math.floor(new Date(dueDate).getTime() / 1000),
        collection_method: 'send_invoice',
        auto_advance: true // Automatically finalize and send
      })

      // Add invoice item
      await stripe.invoiceItems.create({
        customer: customer.id,
        invoice: invoice.id,
        amount: Math.round(parseFloat(amount) * 100), // Convert to cents
        currency: 'usd',
        description
      })

      // Finalize the invoice (auto_advance will send it automatically)
      const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id)

      return NextResponse.json({ success: true, invoiceId: finalizedInvoice.id, type: 'invoice' })
    }
  } catch (error) {
    console.error('Error creating invoice/subscription:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to create invoice/subscription' }, { status: 500 })
  }
}