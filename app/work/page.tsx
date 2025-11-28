'use client'

import Link from 'next/link'
import { useState } from 'react'
import SocialShare from '../../components/SocialShare'

export default function Work() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo - Centered on mobile, left on desktop */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="Falcon Labs Logo" className="h-10 w-auto mr-3" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Falcon Labs
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-200 hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/work" className="text-slate-200 hover:text-amber-400 transition-colors">Work</Link>
              <Link href="/pricing" className="text-slate-200 hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/testimonials" className="text-slate-200 hover:text-amber-400 transition-colors">Testimonials</Link>
              <Link href="/about" className="text-slate-200 hover:text-amber-400 transition-colors">About</Link>
              <Link href="/contact" className="text-slate-200 hover:text-amber-400 transition-colors">Contact Us</Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-200 hover:text-amber-400 focus:outline-none focus:text-amber-400"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/work"
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Portfolio Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">Our Work</h2>
          <p className="text-xl text-center mb-16 text-slate-300 max-w-3xl mx-auto">
            Explore some of our recent web development projects. Each site is crafted with modern technologies and tailored to meet our clients&apos; unique needs.
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Jakimade Project */}
            <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden hover:border-amber-400 transition-colors">
              <div className="aspect-video bg-slate-700">
                <img
                  src="/jakimade-screenshot.png"
                  alt="Jakimade Website Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-amber-400">Jakimade - E-commerce Platform</h3>
                                <p className="text-slate-300 mb-4">
                  A fully functional e-commerce website for a local business, featuring dynamic backend capabilities, secure payment processing, automated shipping calculations and label generation, and automated email services. Built with modern technologies including payment integration via Stripe API, shipping automation with Shipengine API, email automation with MailerSend, Firestore database, and automated deployment through Git webhooks.
                </p>
                                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Firestore</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Stripe API</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Shipengine API</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">MailerSend</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Webhooks</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Git Integration</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">E-commerce</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Responsive Design</span>
                  </div>
                </div>
                <a
                  href="https://jakimade.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-colors"
                >
                  View Live Site →
                </a>
                <SocialShare
                  title="Check out our web development portfolio at Falcon Labs"
                  description="Professional custom web development services with modern technologies - React, Next.js, TypeScript, and more"
                  url="https://falconlabs.tech/work"
                />
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden opacity-50">
              <div className="aspect-video bg-slate-700 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">🚧</div>
                  <p>Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-500">Next Project</h3>
                <p className="text-slate-500 mb-4">
                  Exciting new projects in development. Stay tuned for updates!
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden opacity-50">
              <div className="aspect-video bg-slate-700 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <p>Future Work</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-500">Your Project?</h3>
                <p className="text-slate-500 mb-4">
                  Ready to showcase your business online? Let&apos;s create something amazing together.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Ready to Join Our Portfolio?</h3>
          <p className="text-xl mb-8 text-slate-800">
            Let&apos;s discuss your web development project and bring your vision to life.
          </p>
          <a href="/contact" className="bg-slate-900 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}