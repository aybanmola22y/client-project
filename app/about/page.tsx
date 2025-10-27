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
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">100% Halal Meat Solutions for Your Business Needs</h1>
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Mission</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  At 786 SG, our mission is to be the trusted choice for food services, caterers, and restaurants by providing premium, cleanly processed meat. 
                  We uphold the highest standards of honesty, fairness, and quality, embracing innovation to consistently exceed client expectations. 
                  With a focus on integrity and excellence, we strive to deliver outstanding value and build lasting relationships in the food industry.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="/butcher-shop-interior-professional-meat-display.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Vision</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Our vision at 786 SG is to set the highest standards in quality, safety, and integrity, delivering innovative meat cutting solutions for caterers, food services, and restaurants. 
                  We strive to build a globally recognized brand known for exceptional service, industry advancement, and lasting relationships.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="/butcher-shop-interior-professional-meat-display.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
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
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20  flex items-center justify-center mb-6">
          <div>
            <span className="text-2xl"></span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          Quality First
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We are committed to delivering exceptional quality in every product we produce. 
          From sourcing the finest raw materials to employing rigorous quality control processes, our focus remains on ensuring that every item meets the highest standards of excellence.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 flex items-center justify-center border-4border-red-600 mb-6">
          <div className="text-center">
          
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          Safety & Integrity
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          Food safety is our top priority. We adhere to stringent safety protocols and industry regulations to ensure that our products are not only safe but also trustworthy. 
          Our commitment to integrity means we operate transparently and ethically, building trust with our customers and partners.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl"></span>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
          Innovation & Excellence
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          We continuously seek innovative solutions to enhance our processes, products, and technologies. 
          By embracing creativity and staying ahead of industry trends, we strive for excellence in every aspect of our business, from product development to customer service.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#E8E0D0] p-8 rounded-lg flex flex-col items-center text-center h-full">
        <div className="w-20 h-20 flex items-center justify-center mb-6">
          <span className="text-3xl"></span>
        </div>
        <h3 className="text-2xl font-bold text-[#1A4D2E] mb-4">
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
