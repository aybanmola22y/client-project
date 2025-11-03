"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
    alert("Thank you for your message. We'll be in touch soon!")
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Get in touch with our team. We're here to answer your questions and discuss how 786-SG can serve your
            business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Phone",
                content: "6970 9786",
                subtext: "Mon-Fri, 8AM-6PM",
              },
              {
                title: "Email",
                content: "order@786-sg.com",
                subtext: "We'll respond within 24 hours",
              },
              {
                title: "Address",
                content: "1009 Aljunied Ave 4 #01-28/30",
                subtext: "Singapore 389910",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-md text-center transition-all hover:scale-105">
                <h3 className="text-xl font-bold text-green-700 mb-3">{item.title}</h3>
                <p className="text-lg font-semibold text-foreground mb-2">{item.content}</p>
                <p className="text-sm text-foreground/60">{item.subtext}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-700"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-700"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-green-700"
                  >
                    <option value="">Select a subject</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="custom">Custom Cuts Request</option>
                    <option value="delivery">Delivery Services</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-700 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Hours */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-md h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.757739323982!2d103.88740407584737!3d1.3211210616656919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da182219b00001%3A0x4134b14208b6b897!2s786%20Sg%20Pte.%20Ltd.!5e0!3m2!1sen!2sph!4v1761573215411!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                    { day: "Emergency Orders", hours: "24/7 Available" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-3 border-b border-border last:border-b-0"
                    >
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className="text-foreground/70">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}