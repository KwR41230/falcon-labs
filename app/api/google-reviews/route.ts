import { NextRequest, NextResponse } from 'next/server'

// Cache reviews for 1 hour to avoid hitting API limits
let cachedReviews: any[] | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

export async function GET(request: NextRequest) {
  try {
    // Check if we have cached reviews that are still fresh
    const now = Date.now()
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({ reviews: cachedReviews })
    }

    // TODO: Replace with your actual Google Business Profile API implementation
    // You'll need:
    // 1. Google Cloud Console project with Business Profile API enabled
    // 2. API key or OAuth credentials
    // 3. Your business location ID

    // For now, return mock data structure
    const mockReviews = [
      {
        authorName: "John Smith",
        rating: 5,
        text: "Excellent service! Highly recommend for any web development needs.",
        time: new Date().toISOString(),
        profilePhotoUrl: "https://example.com/photo.jpg"
      },
      {
        authorName: "Sarah Johnson",
        rating: 5,
        text: "Professional, timely, and great results. Will definitely work with them again.",
        time: new Date().toISOString(),
        profilePhotoUrl: "https://example.com/photo2.jpg"
      }
    ]

    // Cache the results
    cachedReviews = mockReviews
    cacheTimestamp = now

    return NextResponse.json({ reviews: mockReviews })

  } catch (error) {
    console.error('Google Reviews API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}