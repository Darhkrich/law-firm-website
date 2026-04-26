import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        {/* Replace with your high-res law office image */}
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
          alt="Law Office" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-amber-600/20 text-amber-500 border border-amber-600/30 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Elite Legal Representation
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Defending Your Legacy <br />
            <span className="text-amber-600">With Unwavering Resolve.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            We provide world-class legal counsel for high-stakes corporate litigation, complex family law, and estate protection. When the outcome matters most, trust Vanguard & Sterling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-amber-600 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
              Schedule Consultation <ArrowRight size={20} />
            </a>
            <a href="#case-studies" className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/10 transition-all text-center">
              View Case Results
            </a>
          </div>

          <div className="mt-16 flex gap-12 text-white/80 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-serif font-bold text-amber-500">25+</p>
              <p className="text-sm uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-amber-500">$500M+</p>
              <p className="text-sm uppercase tracking-wider mt-1">Recovered for Clients</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-amber-500">98%</p>
              <p className="text-sm uppercase tracking-wider mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}