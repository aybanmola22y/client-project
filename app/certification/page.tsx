import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Certification() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 text-balance">
            Quality Assurance
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            786-SG maintains the highest standards of quality, safety, and compliance. Our certifications reflect
            our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-16 text-balance">
            Quality Assurance Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Supplier Verification",
                description: "We verify all suppliers meet our quality and safety standards before partnership.",
              },
              {
                step: "2",
                title: "Receiving Inspection",
                description: "All incoming products are inspected for quality, temperature, and packaging integrity.",
              },
              {
                step: "3",
                title: "Processing Control",
                description: "Strict protocols ensure proper handling, cutting, and packaging throughout processing.",
              },
              {
                step: "4",
                title: "Final Inspection",
                description: "Products undergo final quality checks before delivery to ensure customer satisfaction.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Analysis */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-16 text-balance">Testing & Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Microbiological Testing",
                description: "Regular testing for pathogens and harmful bacteria to ensure product safety.",
              },
              {
                title: "Chemical Analysis",
                description: "Testing for pesticides, antibiotics, and other chemical residues.",
              },
              {
                title: "Nutritional Analysis",
                description: "Verification of nutritional content and labeling accuracy.",
              },
              {
                title: "Sensory Evaluation",
                description: "Expert assessment of color, texture, aroma, and overall quality.",
              },
              {
                title: "Temperature Monitoring",
                description: "Continuous monitoring of storage and transport temperatures.",
              },
              {
                title: "Traceability Testing",
                description: "DNA testing and tracking to verify product origin and authenticity.",
              },
            ].map((test, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md transition-all hover:scale-105">
                <h3 className="text-lg font-bold text-green-700 mb-3">{test.title}</h3>
                <p className="text-foreground/70">{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Documentation */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-16 text-balance">Documentation & Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Audit Reports",
                description: "Annual third-party audits verify compliance with all standards and regulations.",
              },
              {
                title: "Test Results",
                description: "Complete documentation of all microbiological and chemical testing results.",
              },
              {
                title: "Supplier Records",
                description: "Comprehensive records of all suppliers and their certifications.",
              },
              {
                title: "Training Documentation",
                description: "Records of employee training in food safety and handling procedures.",
              },
            ].map((doc, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-md transition-all hover:scale-105">
                <h3 className="text-xl font-bold text-green-700 mb-3">{doc.title}</h3>
                <p className="text-foreground/70 mb-6">{doc.description}</p>
                <button className="text-green-700 font-semibold hover:text-green-600 transition-colors">
                  Request Documentation →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Confidence in Quality</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Our comprehensive certifications and rigorous quality assurance processes ensure you receive only the finest
            products.
          </p>
          <button className="inline-block px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors">
            Learn More About Our Standards
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}