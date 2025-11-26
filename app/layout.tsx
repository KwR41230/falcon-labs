import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Falcon Labs - Full Stack Web Development & E-commerce Solutions',
  description: 'Expert full stack web development, e-commerce platforms, and hosting solutions. 10+ years experience building scalable web applications with React, Next.js, Node.js, and cloud infrastructure.',
  keywords: ['web development', 'full stack developer', 'e-commerce', 'React', 'Next.js', 'Node.js', 'web hosting', 'business websites', 'custom software', 'digital solutions'],
  authors: [{ name: 'Kevin Rasmussen' }],
  creator: 'Kevin Rasmussen',
  publisher: 'Falcon Labs',
  openGraph: {
    title: 'Falcon Labs - Full Stack Web Development & E-commerce Solutions',
    description: 'Expert full stack web development, e-commerce platforms, and hosting solutions. 10+ years experience building scalable web applications.',
    url: 'https://falconlabs.dev',
    siteName: 'Falcon Labs',
    images: [
      {
        url: '/founder-photo.jpg',
        width: 800,
        height: 600,
        alt: 'Kevin Rasmussen - Founder of Falcon Labs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Falcon Labs - Full Stack Web Development & E-commerce Solutions',
    description: 'Expert full stack web development, e-commerce platforms, and hosting solutions.',
    images: ['/founder-photo.jpg'],
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
      </head>
      <body className="bg-slate-900 text-slate-100 font-sans">{children}</body>
    </html>
  )
}