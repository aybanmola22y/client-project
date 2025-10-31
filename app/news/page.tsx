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
      image: "/news-dry-aging-beef.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Sustainable Sourcing: Our Commitment to Ethical Farming",
      excerpt:
        "Learn about P786-SG partnership with sustainable farms and our dedication to ethical meat sourcing practices.",
      date: "March 10, 2025",
      category: "Sustainability",
      image: "/news-sustainable-farming.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "786-SG Wins Industry Excellence Award",
      excerpt:
        "We're proud to announce that 786-SG has been recognized with the prestigious Industry Excellence Award for quality and service.",
      date: "March 5, 2025",
      category: "News",
      image: "/news-industry-award.jpg",
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "Chef's Guide: Selecting the Perfect Cut for Your Menu",
      excerpt:
        "Expert tips from our team on choosing the right meat cuts to elevate your restaurant's menu and impress your guests.",
      date: "February 28, 2025",
      category: "Guides",
      image: "/news-chefs-guide.jpg",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "New Premium Wagyu Selection Now Available",
      excerpt:
        "Introducing our exclusive selection of premium Japanese Wagyu beef, now available for our valued restaurant partners.",
      date: "February 20, 2025",
      category: "Products",
      image: "/news-wagyu-selection.jpg",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Behind the Scenes: A Day at 786-SG",
      excerpt:
        "Take a virtual tour of our state-of-the-art facility and meet the dedicated team that ensures quality at every step.",
      date: "February 15, 2025",
      category: "Company",
      image: "/news-behind-scenes.jpg",
      readTime: "8 min read",
    },
    {
      id: 7,
      title: "Behind the Scenes: A Day at 786-SG",
      excerpt:
        "Take a virtual tour of our state-of-the-art facility and meet the dedicated team that ensures quality at every step.",
      date: "February 15, 2025",
      category: "Company",
      image: "/news-behind-scenes.jpg",
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
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">News & Articles</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Stay informed with the latest industry insights, company updates, and expert tips from the 786-SG team.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-sm text-foreground/60">{articles[0].date}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{articles[0].title}</h2>
              <p className="text-lg text-foreground/70 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-6">
                <span className="text-sm text-foreground/60">{articles[0].readTime}</span>
                <Link
                  href={`/news/${articles[0].id}`}
                  className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
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
                className="px-4 py-2 rounded-lg font-medium transition-colors hover:bg-muted text-foreground/70 hover:text-foreground"
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
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
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
                    <span className="text-xs font-semibold text-accent uppercase">{article.category}</span>
                    <span className="text-xs text-foreground/60">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">{article.date}</span>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-primary font-semibold hover:text-primary/80 transition-colors"
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
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Stay Updated</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Subscribe to our newsletter for the latest industry insights, product updates, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
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
          <h2 className="text-4xl font-bold text-center text-foreground mb-16 text-balance">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Meat Selection Guide",
                description: "Comprehensive guide to selecting the right cuts for different cooking methods.",
                icon: "📋",
              },
              {
                title: "Storage & Handling",
                description: "Best practices for storing and handling meat products to maintain quality.",
                icon: "❄️",
              },
              {
                title: "Cooking Tips",
                description: "Expert tips and techniques for preparing premium meat products.",
                icon: "👨‍🍳",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{resource.title}</h3>
                <p className="text-foreground/70 mb-6">{resource.description}</p>
                <Link href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Download →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Have Questions?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Our team is here to help. Contact us for more information about our products and services.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
