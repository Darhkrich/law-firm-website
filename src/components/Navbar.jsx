'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scale className={`h-8 w-8 ${isScrolled ? 'text-slate-900' : 'text-amber-600'}`} />
          <span className={`text-xl font-serif font-bold ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            Vanguard & Sterling
          </span>
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-8 ${
          isScrolled ? 'text-slate-700' : 'text-slate-200'
        }`}>
          <Link href="#practice-areas" className="hover:text-amber-500 transition-colors">Practice Areas</Link>
          <Link href="#case-studies" className="hover:text-amber-500 transition-colors">Case Results</Link>
          <Link href="#attorneys" className="hover:text-amber-500 transition-colors">Our Team</Link>
          <Link 
            href="#contact" 
            className="bg-amber-600 text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-amber-700 transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-amber-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full w-full shadow-lg py-6 px-6 flex flex-col gap-4">
          <Link href="#practice-areas" className="text-slate-900 py-2 border-b border-slate-100">Practice Areas</Link>
          <Link href="#case-studies" className="text-slate-900 py-2 border-b border-slate-100">Case Results</Link>
          <Link href="#contact" className="bg-amber-600 text-white text-center py-3 rounded-sm">Book Consultation</Link>
        </div>
      )}
    </nav>
  );
}