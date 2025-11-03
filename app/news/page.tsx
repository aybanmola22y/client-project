import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function News() {
  const articles = [
    {
      id: 1,
      title: "Halal Meat Solution",
      excerpt:
        "We are a halal meat solution that specialises in products catering to individuals' dietary requirements following Islamic dietary laws. These solutions ensure that the meat produced and processed adheres to the strict guidelines set forth by Islamic teachings. Halal meat is prepared by following specific procedures, including the way the animal is slaughtered and the absence of certain prohibited ingredients.",
      date: "October 23, 2025",
      category: "Techniques",
      image: "/meat.webp",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Sustainable Sourcing: Our Commitment to Ethical Farming",
      excerpt:
        "Learn about P786-SG partnership with sustainable farms and our dedication to ethical meat sourcing practices.",
      date: "March 10, 2025",
      category: "Sustainability",
      image: "/meat.webp",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "786-SG Wins Industry Excellence Award",
      excerpt:
        "We're proud to announce that 786-SG has been recognized with the prestigious Industry Excellence Award for quality and service.",
      date: "March 5, 2025",
      category: "News",
      image: "/meat.webp",
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "Chef's Guide: Selecting the Perfect Cut for Your Menu",
      excerpt:
        "Expert tips from our team on choosing the right meat cuts to elevate your restaurant's menu and impress your guests.",
      date: "February 28, 2025",
      category: "Guides",
      image: "/meat.webp",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "New Premium Wagyu Selection Now Available",
      excerpt:
        "Introducing our exclusive selection of premium Japanese Wagyu beef, now available for our valued restaurant partners.",
      date: "February 20, 2025",
      category: "Products",
      image: "/meat.webp",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Behind the Scenes: A Day at 786-SG",
      excerpt:
        "Take a virtual tour of our state-of-the-art facility and meet the dedicated team that ensures quality at every step.",
      date: "February 15, 2025",
      category: "Company",
      image: "/meat.webp",
      readTime: "8 min read",
    },
    {
      id: 7,
      title: "Behind the Scenes: A Day at 786-SG",
      excerpt:
        "Take a virtual tour of our state-of-the-art facility and meet the dedicated team that ensures quality at every step.",
      date: "February 15, 2025",
      category: "Company",
      image: "/meat.webp",
      readTime: "8 min read",
    },
  ]

  const categories = ["All", "News", "Techniques", "Guides", "Products", "Sustainability", "Company"]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 text-balance">News & Articles</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Stay informed with the latest industry insights, company updates, and expert tips from the 786-SG team.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105">
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-700 text-white text-sm font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-sm text-foreground/60">{articles[0].date}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4 text-balance">{articles[0].title}</h2>
              <p className="text-lg text-foreground/70 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-6">
                <span className="text-sm text-foreground/60">{articles[0].readTime}</span>
                <Link
                  href={`/news/${articles[0].id}`}
                  className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg font-medium transition-colors hover:bg-green-700 hover:text-white text-foreground/70"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-green-700 uppercase">{article.category}</span>
                    <span className="text-xs text-foreground/60">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">{article.date}</span>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-green-700 font-semibold hover:text-green-600 transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-4 text-balance">Stay Updated</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Subscribe to our newsletter for the latest industry insights, product updates, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-foreground/60 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-16 text-balance">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Meat Selection Guide",
                description: "Comprehensive guide to selecting the right cuts for different cooking methods.",
                icon: (
                  <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Storage & Handling",
                description: "Best practices for storing and handling meat products to maintain quality.",
                icon: (
                  <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: "Cooking Tips",
                description: "Expert tips and techniques for preparing premium meat products.",
                icon: (
                  <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex justify-center mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-green-700 mb-3">{resource.title}</h3>
                <p className="text-foreground/70 mb-6">{resource.description}</p>
                <Link href="#" className="text-green-700 font-semibold hover:text-green-600 transition-colors">
                  Download →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Have Questions?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Our team is here to help. Contact us for more information about our products and services.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}