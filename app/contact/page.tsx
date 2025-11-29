'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on complexity. A simple business website takes 2-4 weeks, while complex e-commerce sites with custom features can take 6-12 weeks. I'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! I offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. This includes security updates, performance monitoring, and technical support."
    },
    {
      question: "What's included in your web development services?",
      answer: "Everything from initial consultation and design to development, testing, deployment, and training. I handle hosting setup, domain configuration, SEO optimization, and provide comprehensive documentation."
    },
    {
      question: "Can you work with my existing website or brand?",
      answer: "Absolutely! I can redesign existing websites, integrate with current branding, or work within your established design guidelines. I'm flexible and adapt to your needs."
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing varies based on project scope and complexity. I offer transparent pricing with no hidden fees. Contact me for a free consultation and custom quote tailored to your specific needs."
    },
    {
      question: "Do you work with clients outside of my area?",
      answer: "Yes! I work with clients worldwide. All communication and project management happens remotely, with regular video calls and progress updates to keep you involved throughout the process."
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, selectedPackage, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setName('')
        setEmail('')
        setPhone('')
        setSelectedPackage('')
        setMessage('')
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with a professional web presence? Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24-48 Hour Response</span>
            </div>
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-amber-400">Let&apos;s Start a Conversation</h2>
              <p className="text-lg text-slate-300 mb-8">
                Whether you&apos;re looking to build a new website, redesign your current one, or add e-commerce functionality, I&apos;m here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-100">Email</h3>
                    <p className="text-slate-300">kevin@falconlabs.tech</p>
                    <p className="text-sm text-slate-400 mt-1">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-100">Location</h3>
                    <p className="text-slate-300">Remote / Worldwide</p>
                    <p className="text-sm text-slate-400 mt-1">Available for projects globally</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-100">Business Hours</h3>
                    <p className="text-slate-300">Monday - Friday: 9AM - 6PM EST</p>
                    <p className="text-sm text-slate-400 mt-1">Weekends by appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/kwr41230" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center hover:border-amber-400 hover:bg-slate-700 transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/TheFalconLabs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-slate-700 transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/kevin-rasmussen-a09a8a5b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center hover:border-blue-400 hover:bg-slate-700 transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="mailto:kevin@falconlabs.tech" className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center hover:border-amber-400 hover:bg-slate-700 transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-amber-400">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-400 font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-green-300 mt-1">Thank you for your message! We&apos;ll get back to you within 24 hours. If you don&apos;t hear from us, please check your spam/junk folder as our emails sometimes land there.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-400 font-medium">Failed to send message</span>
                      </div>
                      <p className="text-red-300 mt-1">{errorMessage}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isSubmitting}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-300 mb-3">Package Interest (Optional)</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="Basic Package"
                          checked={selectedPackage === 'Basic Package'}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          disabled={isSubmitting}
                          className="mr-3 text-amber-400 focus:ring-amber-400 focus:ring-2 bg-slate-700 border-slate-600 disabled:opacity-50"
                        />
                        <span className="text-slate-300">Basic Package</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="Professional Package"
                          checked={selectedPackage === 'Professional Package'}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          disabled={isSubmitting}
                          className="mr-3 text-amber-400 focus:ring-amber-400 focus:ring-2 bg-slate-700 border-slate-600 disabled:opacity-50"
                        />
                        <span className="text-slate-300">Professional Package</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="Premium Package"
                          checked={selectedPackage === 'Premium Package'}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          disabled={isSubmitting}
                          className="mr-3 text-amber-400 focus:ring-amber-400 focus:ring-2 bg-slate-700 border-slate-600 disabled:opacity-50"
                        />
                        <span className="text-slate-300">Premium Package</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="Maintenance Only"
                          checked={selectedPackage === 'Maintenance Only'}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          disabled={isSubmitting}
                          className="mr-3 text-amber-400 focus:ring-amber-400 focus:ring-2 bg-slate-700 border-slate-600 disabled:opacity-50"
                        />
                        <span className="text-slate-300">Maintenance Only</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="package"
                          value="Not Sure"
                          checked={selectedPackage === 'Not Sure'}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          disabled={isSubmitting}
                          className="mr-3 text-amber-400 focus:ring-amber-400 focus:ring-2 bg-slate-700 border-slate-600 disabled:opacity-50"
                        />
                        <span className="text-slate-300">Not sure yet - let&apos;s discuss</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 py-3 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-700 rounded-lg border border-slate-600 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-slate-100">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-amber-400 transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-slate-800">
            Let&apos;s discuss your project and create something amazing together. No pressure, just great results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-slate-900 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Start Your Project
            </Link>
            <Link href="/work" className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-900 hover:text-amber-400 transition-colors">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}