import Link from "next/link";
import ServiceCard from "../components/ui/ServiceCard";

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* Events Page Header */}
      <section className="w-full px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Flawless <span className="text-[#93457D]">Events.</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          From conception to execution, we provide comprehensive event management, vital planning resources, and premium trade components to make your gatherings unforgettable.
        </p>
      </section>

      {/* Services Detailed Grid - Now using the ServiceCard component! */}
      <section className="w-full px-6 pb-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <ServiceCard 
          title="Management"
          description="Expert orchestration of both formal and informal gatherings. We handle the logistics, styling, and coordination so you can focus entirely on your guests."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          }
        />

        <ServiceCard 
          title="Information Resource"
          description="Deeply connected with our event planning, we provide the vital insights, vendor networks, and data resources you need to execute with precision."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          }
        />

        <ServiceCard 
          title="Component Trade"
          description="Wholesale and retail trade of premium event components. Secure the best materials, decor, and supplies directly through our specialized network."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          }
        />

      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-[#93457D]/5 py-20 px-6 border-t border-[#93457D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to plan your next event?</h2>
          <Link href="/contact" className="inline-block bg-[#93457D] text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-900 transition-colors shadow-lg shadow-[#93457D]/30">
            Get in Touch Today
          </Link>
        </div>
      </section>

    </div>
  );
}