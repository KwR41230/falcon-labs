import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET() {
  try {
    // Fetch both invoices and subscriptions
    const [invoicesResponse, subscriptionsResponse] = await Promise.all([
      stripe.invoices.list({ limit: 10 }),
      stripe.subscriptions.list({ limit: 10, status: 'all', expand: ['data.customer'] })
    ])

    console.log('Fetched invoices count:', invoicesResponse.data.length)
    console.log('Fetched subscriptions count:', subscriptionsResponse.data.length)

    const invoiceData = invoicesResponse.data.map(invoice => ({
      id: invoice.id,
      number: invoice.number,
      customerEmail: invoice.customer_email,
      amount: invoice.amount_due / 100,
      currency: invoice.currency,
      status: invoice.status,
      dueDate: invoice.due_date ? new Date(invoice.due_date * 1000).toLocaleDateString() : null,
      paid: invoice.status === 'paid',
      type: 'invoice' as const
    }))

    const subscriptionData = subscriptionsResponse.data.map((subscription: any) => ({
      id: subscription.id,
      number: null,
      customerEmail: subscription.customer?.email || null,
      amount: subscription.items.data[0]?.price?.unit_amount ? subscription.items.data[0].price.unit_amount / 100 : 0,
      currency: subscription.currency,
      status: subscription.status,
      dueDate: subscription.current_period_end ? new Date(subscription.current_period_end * 1000).toLocaleDateString() : null,
      paid: subscription.status === 'active',
      type: 'subscription' as const
    }))

    const combinedData = [...invoiceData, ...subscriptionData]
    console.log('Processed combined data:', combinedData.length)
    return NextResponse.json(combinedData)
  } catch (error) {
    console.error('Error fetching invoices/subscriptions:', error)
    return NextResponse.json({ error: 'Failed to fetch invoices/subscriptions' }, { status: 500 })
  }
}