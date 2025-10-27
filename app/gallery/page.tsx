"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    {
      category: "products",
      title: "Premium Beef Cuts",
      description: "Selection of our finest beef cuts",
      image: "/gallery-premium-beef-cuts.jpg",
    },
    {
      category: "products",
      title: "Fresh Pork Selection",
      description: "High-quality pork products",
      image: "/gallery-fresh-pork-selection.jpg",
    },
    {
      category: "products",
      title: "Specialty Lamb Cuts",
      description: "Premium lamb offerings",
      image: "/gallery-specialty-lamb-cuts.jpg",
    },
    {
      category: "products",
      title: "Poultry Excellence",
      description: "Premium poultry products",
      image: "/gallery-poultry-excellence.jpg",
    },
    {
      category: "facility",
      title: "Modern Processing Facility",
      description: "State-of-the-art meat processing",
      image: "/gallery-modern-processing-facility.jpg",
    },
    {
      category: "facility",
      title: "Cold Storage Systems",
      description: "Temperature-controlled storage",
      image: "/gallery-cold-storage-systems.jpg",
    },
    {
      category: "facility",
      title: "Quality Control Lab",
      description: "Advanced testing facilities",
      image: "/gallery-quality-control-lab.jpg",
    },
    {
      category: "facility",
      title: "Packaging Department",
      description: "Professional packaging operations",
      image: "/gallery-packaging-department.jpg",
    },
    {
      category: "team",
      title: "Expert Butchers",
      description: "Our skilled team at work",
      image: "/gallery-expert-butchers.jpg",
    },
    {
      category: "team",
      title: "Team Training",
      description: "Continuous professional development",
      image: "/gallery-team-training.jpg",
    },
    {
      category: "team",
      title: "Customer Service",
      description: "Dedicated support team",
      image: "/gallery-customer-service.jpg",
    },
    {
      category: "events",
      title: "Industry Conference",
      description: "Networking with industry leaders",
      image: "/gallery-industry-conference.jpg",
    },
  ]

  const categories = [
    { id: "all", label: "All" },
    { id: "products", label: "Products" },
    { id: "facility", label: "Facility" },
    { id: "team", label: "Team" },
    { id: "events", label: "Events" },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Gallery</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Explore our premium products, state-of-the-art facilities, and dedicated team that makes Prime Cuts the
            industry leader.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16 text-balance">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Lbs Processed Weekly" },
              { number: "100+", label: "Product Varieties" },
              { number: "15,000", label: "Sq Ft Facility" },
              { number: "25+", label: "Skilled Professionals" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16 text-balance">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "786 has been our trusted supplier for over 10 years. The quality and consistency are unmatched.",
                author: "Chef Marcus",
                restaurant: "The Grill House",
              },
              {
                quote:
                  "Their custom cutting service has transformed our menu offerings. Highly professional and reliable.",
                author: "Sarah Chen",
                restaurant: "Upscale Bistro",
              },
              {
                quote:
                  "Exceptional quality, competitive pricing, and outstanding customer service. We couldn't ask for better.",
                author: "David Thompson",
                restaurant: "Fine Dining Restaurant",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.restaurant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
