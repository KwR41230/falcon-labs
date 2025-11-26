import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="Falcon Labs Logo" className="h-10 w-auto mr-3" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Falcon Labs
                </h1>
              </Link>
            </div>
            <nav className="flex space-x-8">
              <Link href="/" className="text-slate-200 hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/work" className="text-slate-200 hover:text-amber-400 transition-colors">Work</Link>
              <Link href="/pricing" className="text-slate-200 hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/testimonials" className="text-slate-200 hover:text-amber-400 transition-colors">Testimonials</Link>
              <Link href="/about" className="text-slate-200 hover:text-amber-400 transition-colors">About</Link>
              <Link href="/contact" className="text-slate-200 hover:text-amber-400 transition-colors">Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Empowering Businesses with Cutting-Edge Web Solutions
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Your trusted partner in full stack web development and hosting.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-8 text-amber-400">Our Mission</h3>
          <p className="text-lg text-center max-w-3xl mx-auto text-slate-300">
            At Falcon Labs, our mission is to deliver innovative, reliable, and scalable web solutions that help businesses thrive in the digital world. We combine expertise in full stack development with top-tier hosting services to create websites that not only look great but perform exceptionally.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-400">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:border-amber-400 transition-colors">
              <h4 className="text-2xl font-semibold mb-4 text-amber-400">Custom Website Development</h4>
              <p className="text-slate-300">Tailored websites built with modern technologies to meet your unique business needs.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:border-amber-400 transition-colors">
              <h4 className="text-2xl font-semibold mb-4 text-amber-400">Full Stack Development</h4>
              <p className="text-slate-300">End-to-end development from frontend to backend, ensuring seamless functionality.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-700 hover:border-amber-400 transition-colors">
              <h4 className="text-2xl font-semibold mb-4 text-amber-400">Web Hosting & Maintenance</h4>
              <p className="text-slate-300">Reliable hosting solutions with ongoing support to keep your site running smoothly.</p>
            </div>
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
          <a href="/contact" className="bg-slate-900 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}