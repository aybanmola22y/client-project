import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Corporate() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Corporate Partnerships with 786 SG</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Custom Meat Solutions for Your Business</h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                At 786 SG, we believe that strong partnerships are the foundation of mutual success. 
                We work closely with food services, caterers, restaurants, and industry leaders to provide premium meat solutions that meet your specific needs.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Partnering with 786 SG means more than just receiving premium meat products. 
                It’s about forming a strategic alliance that drives your success, delivers unmatched quality, and adds value to your business. 
                Let’s grow together and elevate your business to new heights.
              </p>
              <br></br>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Interested in partnering with us? Contact us today to explore how we can work together to meet your business needs.
              </p>
            </div>
            <div>
              <img
                src="/corporate-business-meeting-restaurant.jpg"
                alt="Corporate solutions"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-8">
  By partnering with us, you gain access to:
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  {[
    {
      title: "Tailored Solutions",
      description:
        "We understand that every business is unique. That’s why we offer customized meat processing and supply options to fit your operational needs, whether it's bulk orders, specialty cuts, or custom packaging solutions.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our corporate partners receive dedicated account management, ensuring seamless communication, prompt responses, and ongoing support to help you achieve your business goals.",
    },
    {
      title: "Consistent Quality",
      description:
        "When you partner with 786 SG, you’re guaranteed consistent, high-quality products that meet the highest standards of safety and cleanliness. We are committed to delivering exceptional value every time.",
    },
    {
      title: "Exclusive Benefits",
      description:
        "Enjoy access to exclusive pricing, priority service, and early updates on new products and innovations. Our corporate partners are always a step ahead, with a competitive edge in the market.",
    },
    {
      title: "Long-Term Relationships",
      description:
        "We believe in fostering strong, long-lasting relationships built on trust, reliability, and shared success. As your business grows, we are here to support you every step of the way with flexible, scalable solutions.",
    },
  ].map((item, index) => (
    <div key={index} className="bg-card p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
      <p className="text-foreground/70">{item.description}</p>
    </div>
  ))}
</div>
        </div>
      </main>

      <Footer />
    </>
  )
}
