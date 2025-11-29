'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur-sm shadow-lg border-b border-slate-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo - Centered on mobile, left on desktop */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="Falcon Labs Logo" className="h-10 w-auto mr-3" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-[length:200%_200%] animate-gradient-shift bg-clip-text text-transparent">
                  Falcon Labs
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-200 hover:text-amber-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
              <Link href="/work" className="text-slate-200 hover:text-amber-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">Work</Link>
              <Link href="/pricing" className="text-slate-200 hover:text-amber-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">Pricing</Link>
              <Link href="/testimonials" className="text-slate-200 hover:text-amber-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">Testimonials</Link>
              <Link href="/about" className="text-slate-200 hover:text-amber-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">About</Link>
              <Link href="/contact" className="text-slate-200 hover:text-amber-400 transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">Contact Us</Link>
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
    </>
  )
}