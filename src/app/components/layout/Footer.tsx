import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // Dynamically grab the current year for the copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand & Bio */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo.jpeg" 
                alt="The Dezyn Place Logo" 
                width={150} 
                height={50} 
                className="w-auto h-12 object-contain mix-blend-multiply opacity-90" 
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed pr-4">
              Premium hybrid services across complete Event Management, Professional Cleaning, and Aesthetic Beautification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/" className="hover:text-[#93457D] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#93457D] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#93457D] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><Link href="/events" className="hover:text-[#93457D] transition-colors">Events</Link></li>
              <li><Link href="/cleaning" className="hover:text-[#93457D] transition-colors">Cleaning</Link></li>
              <li><Link href="/beautification" className="hover:text-[#93457D] transition-colors">Beautification</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li>Ibadan, Nigeria</li>
              <li>thedezynplaceng@gmail.com</li>
              <li>+234 (0) 807 983 3345</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {currentYear} The Dezyn Place. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://instagram.com/thedezynplaceng" className="hover:text-[#93457D] transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}