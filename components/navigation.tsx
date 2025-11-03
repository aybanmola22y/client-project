"use client"

import Link from "next/link"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Corporate", href: "/corporate" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
  { label: "Certification", href: "/certification" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#ffeda8] text-gray-900 shadow-md transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout */}
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-3 z-10">
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src="/logo.jpg"
                alt="786 Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium hover:text-[#CD7F32] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button on the right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-black/10 rounded-lg transition-colors z-10"
          >
            <svg
              className={`w-7 h-7 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4 text-left bg-[#ffeda8] rounded-b-lg">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium hover:bg-black/10 transition-colors ${
                  index !== navItems.length - 1 ? "border-b border-gray-300" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
