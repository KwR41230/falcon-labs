'use client'

import React, { useState } from 'react'

const packages = {
  basic: {
    name: 'Basic Package',
    depositPercent: 50,
    description: 'Up to 5 pages, responsive design, basic SEO, contact form, 1 month support',
    defaultTerms: '50% deposit due upon project start. Remaining 50% due upon project completion. All payments are non-refundable once work has begun.'
  },
  professional: {
    name: 'Professional Package',
    depositPercent: 30,
    description: 'Up to 15 pages, CMS, e-commerce integration, advanced SEO, social media integration, 3 months support',
    defaultTerms: '30% deposit due for planning & design. 40% due at development midpoint. 30% due upon final delivery. All payments are non-refundable once work has begun.'
  },
  premium: {
    name: 'Premium Package',
    depositPercent: 20,
    description: 'Custom enterprise solution, advanced integrations, premium support, ongoing maintenance',
    defaultTerms: '20% deposit due for initial planning. Monthly milestones (15-20% each). 20% due upon final project completion. All payments are non-refundable once work has begun.'
  }
}

const maintenancePackages = {
  basic: { 
    name: 'Basic Maintenance', 
    amount: 99,
    description: 'Monthly security updates, basic performance monitoring, content updates (2 hours/month), email support, backup management.'
  },
  professional: { 
    name: 'Professional Maintenance', 
    amount: 200,
    description: 'Everything in Basic, plus advanced security monitoring, performance optimization, content updates (8 hours/month), priority phone & chat support, monthly strategy consultation.'
  }
}

export default function InvoiceForm() {
  const [formData, setFormData] = useState({
    paymentType: 'invoice', // 'invoice' or 'subscription'
    clientName: '',
    clientEmail: '',
    package: '',
    totalAmount: '',
    depositPercent: 50,
    description: '',
    amount: '',
    dueDate: '',
    terms: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | React.ReactElement>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Auto-fill when package changes
    if (name === 'package' && value) {
      if (formData.paymentType === 'invoice' && value in packages) {
        const pkg = packages[value as keyof typeof packages]
        const newDepositPercent = pkg.depositPercent
        const depositAmount = formData.totalAmount ? (parseFloat(formData.totalAmount) * (newDepositPercent / 100)).toFixed(2) : ''
        setFormData({
          ...formData,
          package: value,
          depositPercent: newDepositPercent,
          description: `${pkg.description} - ${newDepositPercent}% Deposit`,
          amount: depositAmount,
          terms: pkg.defaultTerms
        })
      } else if (formData.paymentType === 'subscription' && value in maintenancePackages) {
        const pkg = maintenancePackages[value as keyof typeof maintenancePackages]
        setFormData({
          ...formData,
          package: value,
          amount: pkg.amount.toString(),
          description: pkg.description,
          terms: `Monthly subscription for ${pkg.name}. Billed automatically each month. Cancel anytime with 30 days notice.`
        })
      }
    }

    // Recalculate deposit when deposit percent or total amount changes (only for invoices)
    if (formData.paymentType === 'invoice' && (name === 'depositPercent' || name === 'totalAmount') && formData.totalAmount) {
      const depositAmount = (parseFloat(formData.totalAmount) * (parseInt(formData.depositPercent.toString()) / 100)).toFixed(2)
      setFormData({
        ...formData,
        [name]: name === 'depositPercent' ? parseInt(value) : value,
        amount: depositAmount,
        description: formData.package in packages ? `${packages[formData.package as keyof typeof packages].description} - ${name === 'depositPercent' ? value : formData.depositPercent}% Deposit` : formData.description,
        terms: formData.package in packages ? packages[formData.package as keyof typeof packages].defaultTerms : formData.terms
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/create-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      if (response.ok) {
        if (result.type === 'subscription' && result.checkoutUrl) {
          setMessage(
            <div className="space-y-2">
              <p className="text-green-500">Subscription checkout created successfully!</p>
              <p className="text-sm text-gray-300">Send this checkout link to the client:</p>
              <a
                href={result.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline break-all text-sm"
              >
                {result.checkoutUrl}
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(result.checkoutUrl)}
                className="ml-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded"
              >
                Copy Link
              </button>
            </div>
          )
        } else {
          setMessage(`${formData.paymentType === 'invoice' ? 'Invoice' : 'Subscription'} created successfully!`)
        }
        setFormData({
          paymentType: 'invoice',
          clientName: '',
          clientEmail: '',
          package: '',
          totalAmount: '',
          depositPercent: 50,
          description: '',
          amount: '', 
          dueDate: '', 
          terms: '' 
        })
      } else {
        setMessage(result.error || `Failed to create ${formData.paymentType}`)
      }
    } catch (error) {
      setMessage('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Payment Type
        </label>
        <select
          name="paymentType"
          value={formData.paymentType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="invoice">One-time Invoice</option>
          <option value="subscription">Monthly Subscription</option>
        </select>
      </div>
      <div>
        <label htmlFor="clientName" className="block text-sm font-medium text-gray-300">
          Client Name
        </label>
        <input
          id="clientName"
          name="clientName"
          type="text"
          value={formData.clientName}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-300">
          Client Email
        </label>
        <input
          id="clientEmail"
          name="clientEmail"
          type="email"
          value={formData.clientEmail}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label htmlFor="package" className="block text-sm font-medium text-gray-300">
          {formData.paymentType === 'invoice' ? 'Package' : 'Maintenance Plan'}
        </label>
        <select
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select a {formData.paymentType === 'invoice' ? 'package' : 'maintenance plan'}</option>
          {formData.paymentType === 'invoice' 
            ? Object.entries(packages).map(([key, pkg]) => (
                <option key={key} value={key}>{pkg.name}</option>
              ))
            : Object.entries(maintenancePackages).map(([key, pkg]) => (
                <option key={key} value={key}>{pkg.name} - ${pkg.amount}/month</option>
              ))
          }
        </select>
      </div>
      {formData.paymentType === 'invoice' && (
        <>
          <div>
            <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-300">
              Total Project Amount ($)
            </label>
            <input
              id="totalAmount"
              name="totalAmount"
              type="number"
              step="0.01"
              value={formData.totalAmount}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="depositPercent" className="block text-sm font-medium text-gray-300">
              Deposit Percentage (%)
            </label>
            <input
              id="depositPercent"
              name="depositPercent"
              type="number"
              min="0"
              max="100"
              value={formData.depositPercent}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </>
      )}
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
          {formData.paymentType === 'invoice' ? 'Deposit Amount ($)' : 'Monthly Amount ($)'}
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          value={formData.amount}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300">
          Due Date
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label htmlFor="terms" className="block text-sm font-medium text-gray-300">
          Payment Terms
        </label>
        <textarea
          id="terms"
          name="terms"
          value={formData.terms}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        {loading ? 'Creating...' : `Create ${formData.paymentType === 'invoice' ? 'Invoice' : 'Subscription'}`}
      </button>
      {message && (
        typeof message === 'string' ? (
          <p className={`text-sm ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
        ) : (
          message
        )
      )}
    </form>
  )
}