import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Falcon Labs - Full Stack Web Development',
  description: 'Specializing in full stack web development and hosting for businesses.',
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