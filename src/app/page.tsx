import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Header */}
      <section className="w-full px-6 py-28 md:py-36 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Elevate your <br className="hidden md:block" />
          <span className="text-[#93457D]">Space & Events.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          DezynFlo Consultants provides premium hybrid services across complete Event Management, Professional Cleaning, and Aesthetic Beautification.
        </p>
      </section>

      {/* Services Grid - With updated hover state */}
      <section className="w-full px-6 pb-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Events Card */}
        <Link 
          href="/events" 
          className="group flex flex-col justify-between p-9 md:p-11 rounded-3xl bg-white border border-slate-100 hover:border-[#93457D] hover:shadow-2xl transition-all duration-300"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-950 mb-4 group-hover:underline decoration-2 underline-offset-4 decoration-[#93457D]">Events</h2>
            <p className="text-slate-700 leading-relaxed">
              Complete management for formal and informal gatherings, strategic resource planning, and trade components.
            </p>
          </div>
          <div className="mt-8 text-sm font-semibold text-[#93457D] transition-colors">
            Explore Events &rarr;
          </div>
        </Link>

        {/* Cleaning Card */}
        <Link 
          href="/cleaning" 
          className="group flex flex-col justify-between p-9 md:p-11 rounded-3xl bg-white border border-slate-100 hover:border-[#93457D] hover:shadow-2xl transition-all duration-300"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-950 mb-4 group-hover:underline decoration-2 underline-offset-4 decoration-[#93457D]">Cleaning</h2>
            <p className="text-slate-700 leading-relaxed">
              Comprehensive domestic and commercial cleaning, specialized tools, and occasion-specific sanitation.
            </p>
          </div>
          <div className="mt-8 text-sm font-semibold text-[#93457D] transition-colors">
            Explore Cleaning &rarr;
          </div>
        </Link>

        {/* Beautification Card */}
        <Link 
          href="/beautification" 
          className="group flex flex-col justify-between p-9 md:p-11 rounded-3xl bg-white border border-slate-100 hover:border-[#93457D] hover:shadow-2xl transition-all duration-300"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-950 mb-4 group-hover:underline decoration-2 underline-offset-4 decoration-[#93457D]">Beautification</h2>
            <p className="text-slate-700 leading-relaxed">
              Art and craft integration, custom plant and flower styling, alongside expert training and instruction.
            </p>
          </div>
          <div className="mt-8 text-sm font-semibold text-[#93457D] transition-colors">
            Explore Beautification &rarr;
          </div>
        </Link>

      </section>
    </div>
  );
}