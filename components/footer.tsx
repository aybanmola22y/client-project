import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-green-700 text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">786 SG</h3>
            <p className="text-sm text-primary-foreground/80 whitespace-pre-line">
              {
                `1009 Aljunied ave 4
                #01-28/30
                Singapore 389910
                
                Monday to Friday: 8 AM – 5 PM
                Saturday: 8 AM – 2 PM
                Sun & PHs: Closed`
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-accent transition-colors">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/certification" className="hover:text-accent transition-colors">
                  Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Shipping & Returns 
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy;2024 786 SG Pte Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}