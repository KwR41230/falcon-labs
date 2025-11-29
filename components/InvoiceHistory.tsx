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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}