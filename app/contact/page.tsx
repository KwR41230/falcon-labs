'use client'

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you ${name}! We will contact you at ${email} regarding: ${message}`)
    // Reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/logo.svg" alt="Falcon Labs Logo" className="h-10 w-auto mr-3" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Falcon Labs
                </h1>
              </a>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-slate-200 hover:text-amber-400 transition-colors">Home</a>
              <a href="/work" className="text-slate-200 hover:text-amber-400 transition-colors">Work</a>
              <a href="/about" className="text-slate-200 hover:text-amber-400 transition-colors">About</a>
              <a href="/contact" className="text-slate-200 hover:text-amber-400 transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-amber-400">Contact Us</h2>
          <p className="text-xl text-center mb-12 text-slate-300">
            Get in touch for a free consultation on building your custom website.
          </p>
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 py-3 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}