'use client'

import { useState, useEffect } from 'react'

interface GoogleReview {
  authorName: string
  rating: number
  text: string
  time: string
  profilePhotoUrl?: string
}

export default function GoogleReviewsScroller() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews')
        if (!response.ok) throw new Error('Failed to fetch reviews')

        const data = await response.json()
        setReviews(data.reviews || [])
      } catch (err) {
        setError('Unable to load reviews')
        console.error('Error fetching reviews:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (error || reviews.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-6 text-center">
        <p className="text-slate-400">
          {error || 'No reviews available at this time.'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Google Reviews
      </h3>

            <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* Duplicate reviews for seamless scrolling */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.authorName}-${index}`}
              className="flex-shrink-0 w-80 mx-4 bg-slate-700 rounded-lg p-4"
            >
              <div className="flex items-center mb-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'text-amber-400' : 'text-slate-600'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-slate-400">
                  {new Date(review.time).toLocaleDateString()}
                </span>
              </div>

              <p className="text-slate-200 text-sm mb-3 line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center">
                {review.profilePhotoUrl && (
                  <img
                    src={review.profilePhotoUrl}
                    alt={review.authorName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <span className="text-slate-300 font-medium text-sm">
                  {review.authorName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}