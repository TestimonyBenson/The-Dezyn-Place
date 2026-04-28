export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* Contact Header */}
      <section className="w-full px-6 py-20 md:py-28 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Let's <span className="text-[#93457D]">Connect.</span>
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Whether you need a consultation for an upcoming event, a commercial cleaning quote, or bespoke beautification services, our team is ready to assist.
        </p>
      </section>

      {/* Contact Layout */}
      <section className="w-full px-6 pb-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Office Headquarters</h3>
              <p className="text-lg text-slate-900 font-medium">Ibadan, Nigeria</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Direct Email</h3>
              <a href="mailto:hello@thedezynplace.com" className="text-lg text-[#93457D] font-medium hover:underline underline-offset-4 transition-all">
                thedezynplaceng@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone Inquiries</h3>
              <p className="text-lg text-slate-900 font-medium">+234 (0) 807 983 33345</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                <input type="text" id="firstName" className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#93457D] focus:border-transparent transition-all" placeholder="Jane" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                <input type="text" id="lastName" className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#93457D] focus:border-transparent transition-all" placeholder="Doe" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
              <input type="email" id="email" className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#93457D] focus:border-transparent transition-all" placeholder="jane@example.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Required</label>
              <select id="service" className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#93457D] focus:border-transparent transition-all text-slate-700">
                <option value="">Select a service...</option>
                <option value="events">Events Management</option>
                <option value="cleaning">Professional Cleaning</option>
                <option value="beautification">Beautification & Styling</option>
                <option value="multiple">Multiple / Hybrid Service</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message</label>
              <textarea id="message" rows={5} className="px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#93457D] focus:border-transparent transition-all resize-none" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" className="mt-2 w-full bg-[#93457D] text-white font-bold text-lg py-4 rounded-xl hover:bg-slate-900 transition-colors shadow-lg shadow-[#93457D]/20">
              Send Message
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}