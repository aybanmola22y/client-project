import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "• Precision Cutting",
      description:
        "Modern equipment allows us to cut meat to exact specifications, including cubing, slicing, and mincing.",
      features: [],
    },
    {
      title: "• Expert Butchers",
      description:
        "Our skilled butchers can adjust thickness and customize cuts based on client needs.",
      features: [],
    },
    {
      title: "• High Standards",
      description:
        "We ensure top-tier service and product quality, whether you choose standard cuts or custom orders.",
      features: [],
    },
    {
      title: "• Convenient Packaging",
      description:
        "We offer a variety of prepackaged meats in serving sizes ideal for restaurants and catering services.",
      features: [],
    },
    {
      title: "• Bulk Packaging Option",
      description:
        "Bulk packaging is available upon request for larger orders.",
      features: [],
    },
    {
      title: "• Strict Food Safety",
      description:
        "Our products are stored at optimal temperatures to maintain freshness, with stringent food safety regulations in place to ensure top quality.",
      features: [],
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 text-balance">Our Services at 786 SG</h1>
              <p className="text-xl text-foreground/70 italic mb-6">
                Custom Meat Solutions for Your Business
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Modern equipment in our facility enables us to cut meat to the exact specifications you specify. Whether it is cubing, slicing, or mincing, we can do it precisely.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Our knowledgeable butchers can expertly modify each product's thickness to meet the demands of our clients.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Our procedures will guarantee that you receive the highest standards of service and high-quality products, regardless of whether you are purchasing standard cuts or specially customized meat cuts.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                We offer a variety of prepackaged meats in handy serving sizes that are appropriate for both restaurants and catering services and are also capable of packaging items in bulk if required.
              </p>
              <p className="text-lg text-foreground/70">
                Our products are maintained at the ideal temperature and condition to preserve their quality as if they were packed at the source thanks to our stringent adherence to food safety and handling regulations.
              </p>
            </div>
            <div className="relative">
              <img
                src="/COOOOOW.png"
                alt="Meat cutting and halal certification"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Ready to Upgrade Your Meat Supply?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and find the perfect service package for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}