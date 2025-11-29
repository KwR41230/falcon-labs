'use client'

import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import InvoiceForm from '../../components/InvoiceForm'
import InvoiceHistory from '../../components/InvoiceHistory'

function AdminPageContent() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (status === 'loading') return

    if (!session) {
      router.push('/admin/login')
      return
    }

    // Check for success parameters
    const success = searchParams.get('success')
    const sessionId = searchParams.get('session_id')

    if (success === 'subscription_created' && sessionId) {
      setSuccessMessage('🎉 Subscription successfully created! The client has completed payment setup.')
      // Clean up URL
      router.replace('/admin', undefined)
    }
  }, [session, status, searchParams, router])

  if (status === 'loading') {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Create Invoice</h2>
            <InvoiceForm />
          </div>
          <InvoiceHistory />
        </div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>}>
      <AdminPageContent />
    </Suspense>
  )
}