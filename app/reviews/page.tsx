"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Reviews() {
  const [showForm, setShowForm] = useState(false)

  const reviews = [
    {
      id: 1,
      name: "Chef Marco Santos",
      role: "Restaurant Owner, Manila",
      feedback:
        "786-SG consistently provides top-quality halal meat products. Their service and delivery are always reliable — our customers love the freshness and taste!",
      date: "October 23, 2025",
      rating: 5,
      image: "/review1.webp",
    },
    {
      id: 2,
      name: "Amira Hassan",
      role: "Home Chef",
      feedback:
        "I’m impressed with their attention to halal compliance. The meat is always tender and well-packed. Highly recommended for home cooks like me!",
      date: "September 15, 2025",
      rating: 5,
      image: "/review2.webp",
    },
    {
      id: 3,
      name: "Resto 88",
      role: "Food Supplier Partner",
      feedback:
        "Partnering with 786-SG has been a great business decision. They prioritize sustainability and quality — it’s a partnership we truly value.",
      date: "August 30, 2025",
      rating: 4,
      image: "/review3.webp",
    },
    {
      id: 4,
      name: "Resto 88",
      role: "Food Supplier Partner",
      feedback:
        "Partnering with 786-SG has been a great business decision. They prioritize sustainability and quality — it’s a partnership we truly value.",
      date: "August 30, 2025",
      rating: 4,
      image: "/review3.webp",
    },
    {
      id: 5,
      name: "Resto 88",
      role: "Food Supplier Partner",
      feedback:
        "Partnering with 786-SG has been a great business decision. They prioritize sustainability and quality — it’s a partnership we truly value.",
      date: "August 30, 2025",
      rating: 4,
      image: "/review3.webp",
    },
    {
      id: 6,
      name: "Resto 88",
      role: "Food Supplier Partner",
      feedback:
        "Partnering with 786-SG has been a great business decision. They prioritize sustainability and quality — it’s a partnership we truly value.",
      date: "August 30, 2025",
      rating: 4,
      image: "/review3.webp",
    },
    {
      id: 7,
      name: "Resto 88",
      role: "Food Supplier Partner",
      feedback:
        "Partnering with 786-SG has been a great business decision. They prioritize sustainability and quality — it’s a partnership we truly value.",
      date: "August 30, 2025",
      rating: 4,
      image: "/review3.webp",
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 text-balance">Customer Reviews</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Hear from our valued clients and partners about their experience with 786-SG.
          </p>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105">
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src={reviews[0].image || "/placeholder.svg"}
                alt={reviews[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: reviews[0].rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.808a1 1 0 00.95.69h4.011c.969 0 1.371 1.24.588 1.81l-3.247 2.36a1 1 0 00-.364 1.118l1.234 3.808c.3.921-.755 1.688-1.54 1.118l-3.247-2.36a1 1 0 00-1.176 0l-3.247 2.36c-.785.57-1.84-.197-1.54-1.118l1.234-3.808a1 1 0 00-.364-1.118L2.266 9.235c-.783-.57-.38-1.81.588-1.81h4.011a1 1 0 00.95-.69l1.234-3.808z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">{reviews[0].name}</h2>
              <p className="text-lg text-foreground/70 mb-3 italic">“{reviews[0].feedback}”</p>
              <p className="text-sm text-foreground/60 mb-4">{reviews[0].role}</p>
              <span className="text-sm text-foreground/50">{reviews[0].date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(1).map((review) => (
              <div
                key={review.id}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 overflow-hidden p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-700 mb-1">{review.name}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{review.role}</p>
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.808a1 1 0 00.95.69h4.011c.969 0 1.371 1.24.588 1.81l-3.247 2.36a1 1 0 00-.364 1.118l1.234 3.808c.3.921-.755 1.688-1.54 1.118l-3.247-2.36a1 1 0 00-1.176 0l-3.247 2.36c-.785.57-1.84-.197-1.54-1.118l1.234-3.808a1 1 0 00-.364-1.118L2.266 9.235c-.783-.57-.38-1.81.588-1.81h4.011a1 1 0 00.95-.69l1.234-3.808z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground/70 italic mb-4">“{review.feedback}”</p>
                  <span className="text-sm text-foreground/50">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Review Form */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Want to Share Your Experience?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            We’d love to hear your feedback! Let us know how 786-SG has helped your business or home cooking experience.
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-block px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
          >
            {showForm ? "Close Form" : "Leave a Review"}
          </button>

          {showForm && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you for submitting your review!")
                setShowForm(false)
              }}
              className="mt-10 bg-white text-foreground rounded-lg shadow-lg max-w-lg mx-auto p-8 space-y-5 text-left"
            >
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Your Review</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Share your experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
