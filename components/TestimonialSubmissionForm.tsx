'use client'

import { useState } from 'react'

interface TestimonialFormData {
  name: string
  company: string
  role: string
  email: string
  testimonial: string
  rating: number
}

export default function TestimonialSubmissionForm() {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    company: '',
    role: '',
    email: '',
    testimonial: '',
    rating: 5
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/testimonial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Testimonial submitted successfully!'
        })
        // Reset form
        setFormData({
          name: '',
          company: '',
          role: '',
          email: '',
          testimonial: '',
          rating: 5
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit testimonial'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Share Your Experience</h3>
      <p className="text-slate-300 mb-6">
        We&apos;d love to hear about your experience working with Falcon Labs. Your testimonial will be reviewed and added to our site if approved.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Company name (optional)"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-1">
            Role/Title
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Your role/title (optional)"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="your.email@example.com (optional)"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Rating *
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingChange(star)}
                className={`text-2xl ${
                  star <= formData.rating ? 'text-amber-400' : 'text-slate-600'
                } hover:text-amber-400 transition-colors`}
              >
                ★
              </button>
            ))}
            <span className="ml-2 text-slate-300 self-center">
              ({formData.rating}/5 stars)
            </span>
          </div>
        </div>

        {/* Testimonial */}
        <div>
          <label htmlFor="testimonial" className="block text-sm font-medium text-slate-300 mb-1">
            Your Testimonial *
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical"
            placeholder="Tell us about your experience working with Falcon Labs..."
          />
        </div>

        {/* Submit Status */}
        {submitStatus.type && (
          <div className={`p-3 rounded-md ${
            submitStatus.type === 'success'
              ? 'bg-green-800 text-green-200'
              : 'bg-red-800 text-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-800"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>

      <p className="text-xs text-slate-400 mt-4">
        * Required fields. All testimonials are reviewed before being published on our site.
      </p>
    </div>
  )
}