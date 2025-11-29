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

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, type } = body

    console.log('DELETE request:', { id, type })

    if (!id || !type) {
      return NextResponse.json({ error: 'Missing id or type parameter' }, { status: 400 })
    }

    if (type === 'invoice') {
      console.log('Attempting to delete/void invoice:', id)

      // First, check the invoice status
      const invoice = await stripe.invoices.retrieve(id)
      console.log('Invoice status:', invoice.status, 'paid:', invoice.status === 'paid')

      if (invoice.status === 'paid') {
        // Paid invoices cannot be deleted or voided for accounting reasons
        return NextResponse.json({
          error: 'Paid invoices cannot be deleted or voided for accounting compliance. If you need to cancel this invoice, please process a refund through Stripe directly.',
          status: invoice.status
        }, { status: 400 })
      }

      try {
        // Try to void the invoice first (works for unpaid finalized invoices)
        await stripe.invoices.voidInvoice(id)
        console.log('Invoice voided successfully')
      } catch (voidError: any) {
        console.log('Void failed, trying delete:', voidError.message)
        try {
          // Try to delete if void fails (only works for draft invoices)
          await stripe.invoices.del(id)
          console.log('Invoice deleted successfully')
        } catch (deleteError: any) {
          console.log('Delete also failed:', deleteError.message)
          // If both fail, provide specific error based on status
          if (invoice.status === 'draft') {
            throw new Error('Cannot delete draft invoice. It may already be finalized.')
          } else {
            throw new Error(`Cannot modify ${invoice.status} invoice: ${deleteError.message}`)
          }
        }
      }
    } else if (type === 'subscription') {
      console.log('Canceling subscription:', id)
      // Cancel subscription from Stripe
      await stripe.subscriptions.cancel(id)
      console.log('Subscription canceled successfully')
    } else {
      return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: `${type} deleted successfully` })
  } catch (error) {
    console.error('Error deleting invoice/subscription:', error)
    return NextResponse.json({
      error: 'Failed to delete invoice/subscription',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}