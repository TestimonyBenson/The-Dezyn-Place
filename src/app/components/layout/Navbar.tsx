"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      {/* Defined Navbar height (h-24 = 96px) */}
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12 relative">
        
        {/* Logo Container */}
        <Link href="/" className="flex items-center h-full py-3" onClick={closeMenu}>
          <Image 
            src="/images/logo.jpeg" 
            alt="The Dezyn Place Logo" 
            width={300} 
            height={100} 
            className="h-full w-auto object-contain mix-blend-multiply" 
            priority
          />
        </Link>

        {/* Desktop Navigation (Unaffected) */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
          <Link href="/about" className="hover:text-[#93457D] transition-colors">About</Link>
          <Link href="/events" className="hover:text-[#93457D] transition-colors">Events</Link>
          <Link href="/cleaning" className="hover:text-[#93457D] transition-colors">Cleaning</Link>
          <Link href="/beautification" className="hover:text-[#93457D] transition-colors">Beautification</Link>
          <Link href="/contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-[#93457D] transition-all">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-sm font-semibold px-5 py-2 rounded-full border border-slate-200 text-slate-900 hover:border-[#93457D] hover:text-[#93457D] transition-all"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl flex flex-col py-6 px-6 gap-6 animate-in slide-in-from-top-2 duration-200">
          <Link href="/about" onClick={closeMenu} className="text-lg font-semibold text-slate-900 hover:text-[#93457D]">
            About
          </Link>
          <Link href="/events" onClick={closeMenu} className="text-lg font-semibold text-slate-900 hover:text-[#93457D]">
            Events
          </Link>
          <Link href="/cleaning" onClick={closeMenu} className="text-lg font-semibold text-slate-900 hover:text-[#93457D]">
            Cleaning
          </Link>
          <Link href="/beautification" onClick={closeMenu} className="text-lg font-semibold text-slate-900 hover:text-[#93457D]">
            Beautification
          </Link>
          <hr className="border-slate-100" />
          <Link href="/contact" onClick={closeMenu} className="text-center text-lg font-semibold bg-slate-900 text-white py-3 rounded-xl hover:bg-[#93457D] transition-colors">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}