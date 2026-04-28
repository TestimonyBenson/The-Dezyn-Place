import Link from "next/link";
import ServiceCard from "../components/ui/ServiceCard";

export default function BeautificationPage() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* Beautification Page Header */}
      <section className="w-full px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Elevated <span className="text-[#93457D]">Aesthetics.</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Transform your spaces through curated art and craft integration, bespoke botanical styling, and expert-led training programs designed to inspire creativity.
        </p>
      </section>

      {/* Services Detailed Grid */}
      <section className="w-full px-6 pb-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <ServiceCard 
          title="Art & Craft"
          description="Sourcing and installation of premium art and craft goods. We provide bespoke artistic services tailored to enhance the visual appeal of any residential or commercial space."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
          }
        />

        <ServiceCard 
          title="Plants & Flowers"
          description="Expert botanical styling and maintenance. We integrate vibrant plant life and custom floral arrangements to breathe fresh energy and natural beauty into your environments."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          }
        />

        <ServiceCard 
          title="Training & Instruction"
          description="Comprehensive workshops and instructional sessions. Learn the principles of space beautification, floral arrangement, and creative crafting from our experienced professionals."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
            </svg>
          }
        />

      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-[#93457D]/5 py-20 px-6 border-t border-[#93457D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to transform your space?</h2>
          <Link href="/contact" className="inline-block bg-[#93457D] text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-900 transition-colors shadow-lg shadow-[#93457D]/30">
            Consult With Us
          </Link>
        </div>
      </section>

    </div>
  );
}