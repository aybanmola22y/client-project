import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 text-balance">100% Halal Meat Solutions for Your Business Needs</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            At 786 SG, we provide high-quality meat cutting solutions with unmatched precision, customized for the specific needs of your operation. <br></br>
            <br></br>
            Whether you're a small butcher shop or a large-scale food service provider, we offer flexible, cost-effective services that ensure your meat products meet the highest standards in the industry. <br></br>
            <br></br>
            With cutting-edge equipment, a team of skilled professionals, and a commitment to excellence, we deliver superior results that streamline your supply chain and enhance your product offerings.
          </p>
        </div>
      </section>

      {/* Mission */}
<section className="py-20 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-green-700 mb-6">Mission</h2>
        <div className="space-y-4 text-foreground/70 leading-relaxed">
          <p>
            At 786 SG, our mission is to be the trusted choice for food services, caterers, and restaurants by providing premium, cleanly processed meat.
            We uphold the highest standards of honesty, fairness, and quality, embracing innovation to consistently exceed client expectations.
            With a focus on integrity and excellence, we strive to deliver outstanding value and build lasting relationships in the food industry.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[450px]">
        <img
          src="/misyon.jpg"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-fill rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Vision */}
<section className="py-20 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-green-700 mb-6">Vision</h2>
        <div className="space-y-4 text-foreground/70 leading-relaxed">
          <p>
            Our vision at 786 SG is to set the highest standards in quality, safety, and integrity,
            delivering innovative meat cutting solutions for caterers, food services, and restaurants.
            We strive to build a globally recognized brand known for exceptional service,
            industry advancement, and lasting relationships.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[450px]">
        <img
          src="/bisyon.jpg"
          alt="Vision"
          className="absolute inset-0 w-full h-full object-fill rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Quality Commitment Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E8E8E8]">
  <div className="max-w-7xl mx-auto">
    {/* Feature Cards Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full transition-all hover:scale-105">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Quality First
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We are committed to delivering exceptional quality in every product we produce. 
          From sourcing the finest raw materials to employing rigorous quality control processes, our focus remains on ensuring that every item meets the highest standards of excellence.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full transition-all hover:scale-105">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Safety & Integrity
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          Food safety is our top priority. We adhere to stringent safety protocols and industry regulations to ensure that our products are not only safe but also trustworthy. 
          Our commitment to integrity means we operate transparently and ethically, building trust with our customers and partners.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full transition-all hover:scale-105">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Innovation & Excellence
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We continuously seek innovative solutions to enhance our processes, products, and technologies. 
          By embracing creativity and staying ahead of industry trends, we strive for excellence in every aspect of our business, from product development to customer service.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full transition-all hover:scale-105">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Customer-Centric
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          Approach Our customers are at the heart of everything we do. We listen to their needs, respond promptly, and tailor our offerings to exceed their expectations. 
          Building strong, lasting relationships with our customers is key to our success.
        </p>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  )
}