'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import SplitText from '../components/SplitText'

export default function Home() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const toggleTechExpansion = (techName: string) => {
    setExpandedTech(expandedTech === techName ? null : techName)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const techName = entry.target.getAttribute('data-tech')
            if (techName) {
              setVisibleCards(prev => new Set(prev).add(techName))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    // Observe all cards
    cardRefs.current.forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const setCardRef = (techName: string) => (el: HTMLDivElement | null) => {
    if (el) {
      cardRefs.current.set(techName, el)
    } else {
      cardRefs.current.delete(techName)
    }
  }

  const techDetails = {
    'React': {
      description: 'A powerful JavaScript library for building user interfaces with reusable components. Enables fast, interactive web applications with virtual DOM for optimal performance.',
      benefits: ['Component reusability', 'Virtual DOM efficiency', 'Rich ecosystem', 'Strong community support']
    },
    'Next.js': {
      description: 'A React framework that enables server-side rendering, static site generation, and API routes. Perfect for SEO-optimized, fast-loading web applications.',
      benefits: ['Server-side rendering', 'Static generation', 'API routes', 'Built-in optimization']
    },
    'TypeScript': {
      description: 'A typed superset of JavaScript that adds static type checking. Catches errors at compile time and improves code quality and developer experience.',
      benefits: ['Type safety', 'Better IDE support', 'Easier refactoring', 'Reduced runtime errors']
    },
    'Node.js': {
      description: 'A JavaScript runtime built on Chrome\'s V8 engine. Enables server-side JavaScript execution and scalable network applications.',
      benefits: ['JavaScript everywhere', 'Non-blocking I/O', 'NPM ecosystem', 'High performance']
    },
    'Tailwind CSS': {
      description: 'A utility-first CSS framework that provides low-level utility classes. Enables rapid UI development without writing custom CSS.',
      benefits: ['Rapid prototyping', 'Consistent design', 'Small bundle size', 'Highly customizable']
    },
    'JavaScript': {
      description: 'The programming language of the web. Essential for interactive websites and the foundation of modern web development.',
      benefits: ['Universal language', 'Browser native', 'Versatile applications', 'Active evolution']
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.5'%3E%3Ccircle cx='12.5' cy='12.5' r='1.5'/%3E%3Ccircle cx='25' cy='12.5' r='1.5'/%3E%3Ccircle cx='37.5' cy='12.5' r='1.5'/%3E%3Ccircle cx='12.5' cy='25' r='1.5'/%3E%3Ccircle cx='25' cy='25' r='1.5'/%3E%3Ccircle cx='37.5' cy='25' r='1.5'/%3E%3Ccircle cx='12.5' cy='37.5' r='1.5'/%3E%3Ccircle cx='25' cy='37.5' r='1.5'/%3E%3Ccircle cx='37.5' cy='37.5' r='1.5'/%3E%3Crect x='12.5' y='11.5' width='12.5' height='1'/%3E%3Crect x='25' y='11.5' width='12.5' height='1'/%3E%3Crect x='11.5' y='12.5' width='1' height='12.5'/%3E%3Crect x='23.5' y='12.5' width='1' height='12.5'/%3E%3Crect x='36' y='12.5' width='1' height='12.5'/%3E%3Crect x='12.5' y='23.5' width='12.5' height='1'/%3E%3Crect x='25' y='23.5' width='12.5' height='1'/%3E%3Crect x='11.5' y='25' width='1' height='12.5'/%3E%3Crect x='23.5' y='25' width='1' height='12.5'/%3E%3Crect x='36' y='25' width='1' height='12.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px',
            animation: 'ripple 8s ease-in-out infinite'
          }}></div>
        </div>
        <style jsx>{`
          @keyframes ripple {
            0%, 100% {
              opacity: 0.4;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SplitText
            text="Empowering Businesses with Cutting-Edge Web Solutions"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          />
          <p className="text-xl text-slate-300 mb-8">
            Your trusted partner in full stack web development and hosting.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-8 text-amber-400 animate-slide-up">Our Mission</h3>
          <p className="text-lg text-center max-w-3xl mx-auto text-slate-300 animate-slide-up-delayed">
            At Falcon Labs, our mission is to deliver innovative, reliable, and scalable web solutions that help businesses thrive in the digital world. We combine expertise in full stack development with top-tier hosting services to create websites that not only look great but perform exceptionally.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-400">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-amber-400 p-3 rounded-lg mr-4 group-hover:bg-amber-300 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-slate-900 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Custom Website Development</h4>
              </div>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Tailored websites built with modern technologies to meet your unique business needs.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-amber-400 p-3 rounded-lg mr-4 group-hover:bg-amber-300 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-slate-900 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Full Stack Development</h4>
              </div>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">End-to-end development from frontend to backend, ensuring seamless functionality.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-amber-400 p-3 rounded-lg mr-4 group-hover:bg-amber-300 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-slate-900 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Web Hosting & Maintenance</h4>
              </div>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Reliable hosting solutions with ongoing support to keep your site running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-400">Our Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techDetails).map(([techName, details]) => (
              <div
                key={techName}
                ref={setCardRef(techName)}
                data-tech={techName}
                className={`bg-slate-800 rounded-lg border border-slate-600 hover:border-amber-400 transition-all duration-300 cursor-pointer overflow-hidden ${
                  visibleCards.has(techName) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                onClick={() => toggleTechExpansion(techName)}
              >
                <div className="p-6 text-center">
                  <div className={`p-3 rounded-lg mx-auto w-fit mb-3 transition-colors ${
                    techName === 'React' ? 'bg-blue-500' :
                    techName === 'Next.js' ? 'bg-slate-900' :
                    techName === 'TypeScript' ? 'bg-blue-600' :
                    techName === 'Node.js' ? 'bg-green-600' :
                    techName === 'Tailwind CSS' ? 'bg-blue-400' :
                    'bg-yellow-500'
                  }`}>
                    {techName === 'React' && (
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89zM7.37 16.15c.69 0 1.38-.59 1.38-1.31 0-.72-.69-1.31-1.38-1.31s-1.38.59-1.38 1.31c0 .72.69 1.31 1.38 1.31zm9.26 0c.69 0 1.38-.59 1.38-1.31 0-.72-.69-1.31-1.38-1.31s-1.38.59-1.38 1.31c0 .72.69 1.31 1.38 1.31z"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                    {techName === 'Next.js' && (
                      <span className="text-2xl font-bold text-amber-400">N</span>
                    )}
                    {techName === 'TypeScript' && (
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm-1 0c0 6.07 4.93 11 11 11s11-4.93 11-11S18.07 1 12 1 1 5.93 1 12z"/>
                        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TS</text>
                      </svg>
                    )}
                    {techName === 'Node.js' && (
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    )}
                    {techName === 'Tailwind CSS' && (
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.5 7.6l-1.9-.4c.6-1.1 1.1-2.3 1.4-3.6L20 4.1c-.3 1.3-.8 2.5-1.5 3.5z"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                    {techName === 'JavaScript' && (
                      <svg className="w-8 h-8 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-100 mb-1">{techName}</h4>
                  <p className="text-sm text-slate-400 mb-3">
                    {techName === 'React' ? 'Frontend Framework' :
                     techName === 'Next.js' ? 'React Framework' :
                     techName === 'TypeScript' ? 'Type Safety' :
                     techName === 'Node.js' ? 'Backend Runtime' :
                     techName === 'Tailwind CSS' ? 'Styling Framework' :
                     'Programming Language'}
                  </p>
                  <div className="flex items-center justify-center text-amber-400">
                    <span className="text-sm mr-2">
                      {expandedTech === techName ? 'Click to collapse' : 'Click to learn more'}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedTech === techName ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`px-6 pb-6 transition-all duration-300 ${
                  expandedTech === techName ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                      {details.description}
                    </p>
                    <div className="space-y-2">
                      <h5 className="text-amber-400 font-medium text-sm">Key Benefits:</h5>
                      <ul className="space-y-1">
                        {details.benefits.map((benefit, index) => (
                          <li key={index} className="text-slate-400 text-sm flex items-center">
                            <svg className="w-3 h-3 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-4 text-slate-900">Ready to Get Started?</h3>
          <p className="text-xl mb-8 text-slate-800">
            Contact us today for a free consultation on your web development project.
          </p>
          <a href="/contact" className="bg-slate-900 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:text-amber-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300 inline-block transform">
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}