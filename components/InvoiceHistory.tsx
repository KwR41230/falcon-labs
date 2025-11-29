'use client'

import { useEffect, useState } from 'react'

interface Invoice {
  id: string
  number: string | null
  customerEmail: string | null
  amount: number
  currency: string
  status: string
  dueDate: string | null
  paid: boolean
  type?: 'invoice' | 'subscription'
}

export default function InvoiceHistory() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    fetchInvoices()
  }, [])

  const fetchInvoices = async () => {
    try {
      const response = await fetch('/api/invoices')
      if (response.ok) {
        const data = await response.json()
        setInvoices(data)
      } else {
        setError('Failed to load invoices')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string, type: 'invoice' | 'subscription') => {
    if (!confirm(`Are you sure you want to delete this ${type}? This will also remove it from Stripe.`)) {
      return
    }

    setDeletingId(id)
    try {
      const response = await fetch('/api/invoices', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type })
      })

      if (response.ok) {
        setInvoices(invoices.filter(invoice => invoice.id !== id))
      } else {
        const error = await response.json()
        // Handle specific error for paid invoices
        if (error.error && error.error.includes('Paid invoices cannot be deleted')) {
          alert('Paid invoices cannot be deleted for accounting compliance. If you need to cancel this invoice, please process a refund through your Stripe dashboard.')
        } else {
          alert(`Failed to delete ${type}: ${error.error}`)
        }
      }
    } catch (err) {
      alert(`An error occurred while deleting the ${type}`)
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) return <p>Loading invoices...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-8">
      <h2 className="text-xl font-semibold mb-4">Invoice & Subscription History</h2>
      {invoices.length === 0 ? (
        <p>No invoices or subscriptions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-700">
              <tr>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Client Email</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Due Date</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-600">
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${invoice.type === 'subscription' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                      {invoice.type === 'subscription' ? 'Subscription' : 'Invoice'}
                    </span>
                  </td>
                  <td className="px-6 py-4">{invoice.number || invoice.id.slice(-8)}</td>
                  <td className="px-6 py-4">{invoice.customerEmail || 'N/A'}</td>
                  <td className="px-6 py-4">${invoice.amount.toFixed(2)} {invoice.currency.toUpperCase()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${invoice.paid ? 'bg-green-600' : 'bg-yellow-600'}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{invoice.dueDate || 'N/A'}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(invoice.id, invoice.type || 'invoice')}
                      disabled={deletingId === invoice.id}
                      className="text-red-400 hover:text-red-300 disabled:text-gray-500"
                      title={`Delete ${invoice.type || 'invoice'}`}
                    >
                      {deletingId === invoice.id ? (
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}