import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* About Header */}
      <section className="w-full px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          The vision behind <br className="hidden md:block" />
          <span className="text-[#93457D]">The Dezyn Place.</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          We are a multifaceted consultancy built on the belief that a truly exceptional environment requires flawless execution across all disciplines.
        </p>
      </section>

      {/* The "Why Hybrid" Section */}
      <section className="w-full px-6 pb-24 max-w-5xl mx-auto">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Hybrid Approach</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              Originally founded as DezynFlo Consultants, The Dezyn Place was born from a simple observation: managing a space or an event shouldn't require juggling a dozen disconnected vendors. 
            </p>
            <p>
              By integrating <strong className="text-slate-900">Event Management</strong>, <strong className="text-slate-900">Professional Cleaning</strong>, and <strong className="text-slate-900">Aesthetic Beautification</strong> into one cohesive framework, we ensure that every transition, from the initial setup, to the event itself, down to the post-event teardown and deep clean, is seamless.
            </p>
            <p>
              Whether we are curating a botanical arrangement for your corporate lobby, supplying wholesale components for a trade show, or deep-cleaning a commercial facility, our standard of excellence remains entirely uncompromised.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="w-full px-6 pb-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-[#93457D]/10 mx-auto flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-[#93457D]">01</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Precision</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Exactness in our logistics, from resource planning to occasion-specific sanitation.</p>
        </div>
        
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-[#93457D]/10 mx-auto flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-[#93457D]">02</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Elegance</h3>
          <p className="text-slate-600 text-sm leading-relaxed">An unwavering commitment to premium aesthetics in our art, craft, and event execution.</p>
        </div>

        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-full bg-[#93457D]/10 mx-auto flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-[#93457D]">03</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Integration</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Providing a unified, hybrid service that eliminates friction for our clients.</p>
        </div>
      </section>

    </div>
  );
}