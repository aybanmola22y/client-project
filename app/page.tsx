import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Trusted Halal Premium Meat Supplier
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Whether you’re a restaurant, hotel, catering service, or retailer, we provide exceptional quality meats that meet the highest standards of taste and Halal compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/halal2.jpg"
                alt="Premium meat cuts"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lamb",
                description:
                  "From juicy lamb chops to tender shanks, our Halal-certified lamb is ideal for fine dining and catering.",
              },
              {
                title: "Beef",
                description:
                  "Grass-fed, tender cuts from ribeye to brisket, perfect for steaks, roasts, and gourmet dishes.",
              },
              {
                title: "Poultry",
                description:
                  "Fresh, plump chicken and turkey, free from additives and perfect for a variety of cuisines.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                100% Halal Meat Solutions for Your Business Needs
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                At 786SG, we are dedicated to delivering the finest selection of Halal-certified, premium meats to businesses across various industries. 
                Whether you’re a restaurant, hotel, catering service, or retailer, we provide exceptional quality meats that meet the highest standards of taste and Halal compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="/halal.jpg"
                alt="Premium meat cuts"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quality Commitment Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E8E8E8]">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 mb-12">
      {/* Left Column - Heading */}
      <div>
        <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
          Our Commitment to Quality
        </h2>
        <p className="text-xl text-muted-foreground italic mb-8">
          Custom Meat Solutions for Your Business
        </p>
        <button className="px-8 py-4 bg-[#B8935E] hover:bg-[#A17F4D] text-white font-semibold rounded-full transition-colors">
          Know More
        </button>
      </div>

      {/* Right Column - Description */}
      <div className="space-y-6">
        <p className="text-foreground/80 leading-relaxed">
          At 786SG, we are passionate about providing premium Halal-certified meats with a commitment to quality, authenticity, and exceptional service. With years of expertise in the industry, we supply businesses across the food service, hospitality, and retail sectors with a wide range of high-quality meats tailored to their specific needs.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Our mission is to be the trusted partner for businesses seeking ethically sourced, fresh, and flavorful meats that meet the highest standards. We believe in building long-lasting relationships with our clients by delivering consistent excellence in every order, backed by reliable service and competitive pricing.
        </p>
      </div>
    </div>

    {/* Feature Cards Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-16 h-16 border-4 border-[#1A4D2E] rounded-full flex items-center justify-center">
            <span className="text-2xl">🕌</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          100% Halal-Certified Premium Meats
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          Our commitment to authentic Halal processes ensures that every cut of meat we provide is carefully sourced, processed, and certified according to Islamic guidelines.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-red-600 mb-6">
          <div className="text-center">
            <p className="text-xs font-bold text-red-600 leading-tight">HIGH<br/>QUALITY<br/>MEAT</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          Unmatched Quality & Freshness
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We take pride in offering only the best quality meat, expertly selected and handled to maintain freshness and flavor. Our wide range of premium cuts is perfect for discerning businesses that prioritize excellence.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl">💰</span>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          Competitive Pricing & Reliable Delivery
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We believe that premium quality shouldn't come at a premium price. Our competitively priced products, coupled with our reliable delivery services, make it easy for your business to receive top-tier meat on time, every time.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 bg-sky-400 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl">🐄</span>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          Sustainably Sourced
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We are committed to ethical and sustainable sourcing. Our meats come from farms that prioritize animal welfare and environmental responsibility, ensuring that your business supports a sustainable food supply chain.
        </p>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  )
}
