import Link from "next/link";
import ServiceCard from "../components/ui/ServiceCard";

export default function CleaningPage() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* Cleaning Page Header */}
      <section className="w-full px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Immaculate <span className="text-[#93457D]">Spaces.</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          From deep domestic sanitation to specialized commercial maintenance, we provide total cleaning solutions, premium tools, and occasion-specific services tailored to your environment.
        </p>
      </section>

      {/* Services Detailed Grid */}
      <section className="w-full px-6 pb-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <ServiceCard 
          title="Domestic & Commercial"
          description="Flexible partial or total cleaning for homes and businesses. We ensure your living and working spaces maintain the highest standards of hygiene and presentation."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          }
        />

        <ServiceCard 
          title="Tools & Consumables"
          description="Direct sales of professional-grade cleaning equipment, tools, and heavy-duty consumables to keep your private inventory fully stocked."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          }
        />

        <ServiceCard 
          title="Occasion-Specific"
          description="Pre- and post-event sanitation services. We handle the intense clean-up required for special occasions, moving days, or rapid turnarounds."
          icon={
            <svg className="w-7 h-7 text-[#93457D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          }
        />

      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-[#93457D]/5 py-20 px-6 border-t border-[#93457D]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a specialized cleaning quote?</h2>
          <Link href="/contact" className="inline-block bg-[#93457D] text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-900 transition-colors shadow-lg shadow-[#93457D]/30">
            Request a Service
          </Link>
        </div>
      </section>

    </div>
  );
}