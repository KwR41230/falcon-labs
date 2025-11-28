import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Falcon Labs - Custom Web Development Services & Full Stack Solutions',
  description: 'Professional custom web development services with 10+ years experience. Full stack development, e-commerce solutions, and reliable hosting. Get your free consultation today.',
  keywords: [
    'custom web development services',
    'web development company',
    'full stack development',
    'web development agency',
    'custom website development',
    'e-commerce development',
    'web hosting services',
    'Next.js development',
    'React development',
    'TypeScript development',
    'professional web development',
    'business website development',
    'web application development',
    'frontend development',
    'backend development',
    'responsive web design',
    'web development',
    'full stack developer',
    'e-commerce',
    'React',
    'Next.js',
    'Node.js',
    'web hosting',
    'business websites',
    'custom software',
    'digital solutions'
  ],
  authors: [{ name: 'Kevin Rasmussen' }],
  creator: 'Kevin Rasmussen',
  publisher: 'Falcon Labs',
  metadataBase: new URL('https://falconlabs.dev'),
  openGraph: {
    title: 'Falcon Labs - Custom Web Development Services & Full Stack Solutions',
    description: 'Professional custom web development services with 10+ years experience. Full stack development, e-commerce solutions, and reliable hosting.',
    url: 'https://falconlabs.dev',
    siteName: 'Falcon Labs',
    images: [
      {
        url: '/falconlab-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Falcon Labs - Custom Web Development Services Homepage',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falcon Labs - Custom Web Development Services & Full Stack Solutions',
    description: 'Professional custom web development services with 10+ years experience. Full stack development, e-commerce solutions, and reliable hosting.',
    images: ['/falconlab-screenshot.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Favicon */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Falcon Labs",
              "description": "Professional custom web development services with 10+ years experience. Full stack development, e-commerce solutions, and reliable hosting.",
              "url": "https://falconlabs.tech",
              "telephone": "+1-856-693-3979", // Replace with your phone
              "email": "kevin@falconlabs.tech",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7408 Albany Dr", // Replace with your address
                "addressLocality": "Amarillo",
                "addressRegion": "TX",
                "postalCode": "79118",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "XX.XXXXXX", // Replace with your coordinates
                "longitude": "XX.XXXXXX"
              },
              "openingHours": "Mo-Fr 09:00-17:00", // Replace with your hours
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "USD",
              "sameAs": [
                "https://www.linkedin.com/in/your-profile", // Replace with your LinkedIn
                "https://github.com/kwr41230" // Replace with your GitHub
              ]
            })
          }}
        />
              "name": "Falcon Labs",
              "url": "https://falconlabs.tech",
              "logo": "https://falconlabs.tech/logo.svg",
              "description": "Professional custom web development services with 10+ years experience. Full stack development, e-commerce solutions, and reliable hosting.",
              "founder": {
                "@type": "Person",
                "name": "Kevin Rasmussen"
              },
              "serviceType": ["Web Development", "Full Stack Development", "E-commerce Development", "Web Hosting"],
              "areaServed": "Global",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/falconlabs",
                "https://linkedin.com/company/falconlabs"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Custom Web Development Services",
              "description": "Professional custom website development, full stack applications, and e-commerce solutions built with modern technologies.",
              "provider": {
                "@type": "Organization",
                "name": "Falcon Labs"
              },
              "serviceType": "Web Development",
              "areaServed": "Global",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Website Development",
                      "description": "Tailored websites built with modern technologies to meet unique business needs."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Stack Development",
                      "description": "End-to-end development from frontend to backend, ensuring seamless functionality."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Hosting & Maintenance",
                      "description": "Reliable hosting solutions with ongoing support to keep sites running smoothly."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="bg-slate-900 text-slate-100 font-sans">{children}</body>
    </html>
  )
}