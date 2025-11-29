import { Metadata } from 'next'
import TestimonialSubmissionForm from '../../components/TestimonialSubmissionForm'

export const metadata: Metadata = {
  title: 'Client Testimonials | Falcon Labs',
  description: 'See what our clients say about our web development services. Real testimonials from businesses we\'ve helped grow online.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jaki Rivera",
      company: "Jakimade",
      role: "Founder & CEO",
      content: "Falcon Labs built us a world-class e-commerce platform that handles everything from payment processing to automated shipping. Our conversion rate doubled and we now process orders seamlessly with Stripe, Shipengine, and real-time inventory management. Kevin's expertise in full-stack development and cloud infrastructure is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Falcon Labs transformed our online presence completely. Their e-commerce platform improved our sales in the first quarter. The custom features they implemented, such as shipping and inventory management, have made a huge difference.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Local Fitness Pro",
      role: "Owner",
      content: "Kevin delivered exactly what we needed - a fast, professional website that converts visitors into clients. Highly recommend!",
      rating: 5
    },
    {
      name: "Jennifer Davis",
      company: "Artisan Crafts Co.",
      role: "Founder",
      content: "The attention to detail and technical expertise is outstanding. Our new website perfectly represents our brand.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Real results from real businesses we&apos;ve helped grow online
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-amber-400 transition-colors">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div>
                  <div className="font-semibold text-amber-400">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Submission Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-slate-300">
              Have you worked with Falcon Labs? We&apos;d love to hear your story!
            </p>
          </div>
          <TestimonialSubmissionForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let&apos;s discuss how we can help grow your business online
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}