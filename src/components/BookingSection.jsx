'use client';

export default function BookingSection() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Secure Your Future. <br/>Book a Consultation.</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Time is often critical in legal matters. Submit your details below, and our senior intake team will review your case and contact you within 2 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg">Case Evaluation</h4>
                  <p className="text-slate-400 text-sm">Preliminary review of facts and conflict check.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center text-amber-500 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg">Strategic Roadmap</h4>
                  <p className="text-slate-400 text-sm">We outline the legal path to your desired outcome.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl text-slate-900">
            <h3 className="text-2xl font-serif font-bold mb-6 text-slate-900">Request Appointment</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all" placeholder="Emma" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all" placeholder="Smith" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all" placeholder="emma@example.com" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Practice Area</label>
                <select className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-amber-600 transition-all bg-white">
                  <option>Corporate Litigation</option>
                  <option>Estate Planning</option>
                  <option>Intellectual Property</option>
                  <option>Criminal Defense</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Case Details</label>
                <textarea rows="4" className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all" placeholder="Briefly describe your situation..."></textarea>
              </div>

              <button type="button" className="w-full bg-amber-600 text-white font-bold py-4 hover:bg-amber-700 transition-all shadow-lg mt-2">
                Submit Request
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                All communications are strictly confidential. By clicking submit, you agree to our privacy policy.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}