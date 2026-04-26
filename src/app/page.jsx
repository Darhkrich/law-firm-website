import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import BookingSection from "@/components/BookingSection";
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Introduction / Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            We Don't Just Practice Law. <br/>We Define the Standard.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            For over two decades, Vanguard & Sterling has stood as a bulwark for clients facing their most significant legal challenges. We believe in aggressive representation tempered by strategic foresight. We do not look for the easy way out; we look for the winning way out.
          </p>
          
        </div>
      </section>

      <CaseStudies />
      <BookingSection />

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Scale className="h-6 w-6 text-amber-600" />
              <span className="text-lg font-serif font-bold">Vanguard & Sterling</span>
            </div>
            <p className="text-sm">
              Premier legal representation for those who demand excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-amber-600"/> 100 Legal Ave, Suite 500, NY</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-amber-600"/> (212) 555-0123</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-amber-600"/> counsel@vanguardsterling.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-amber-500 cursor-pointer">Corporate Law</li>
              <li className="hover:text-amber-500 cursor-pointer">Mergers & Acquisitions</li>
              <li className="hover:text-amber-500 cursor-pointer">Real Estate</li>
              <li className="hover:text-amber-500 cursor-pointer">Family Law</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Disclaimer</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Attorney Advertising</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Vanguard & Sterling LLP. All rights reserved.
        </div>
      </footer>
    </main>
  );
}