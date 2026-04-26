import { Gavel, TrendingUp, ShieldCheck } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: "Corporate Merger Dispute",
    category: "Corporate Law",
    challenge: "A hostile takeover attempt threatened to devalue our client's 40-year family business assets by 60%.",
    result: "Successfully blocked the takeover and negotiated a merger that increased shareholder value by 200%.",
    amount: "$125M Value Protected",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "High-Asset Divorce",
    category: "Family Law",
    challenge: "Complex cross-border asset tracing required to ensure fair division of marital property.",
    result: "Secured 100% of requested assets and full custody rights through strategic mediation.",
    amount: "Full Asset Retention",
    icon: Gavel
  },
  {
    id: 3,
    title: "Intellectual Property Theft",
    category: "IP Litigation",
    challenge: "A competitor infringed on a patent crucial to our client's market dominance.",
    result: "Obtained a permanent injunction and maximum statutory damages within 6 months.",
    amount: "$12M Settlement",
    icon: ShieldCheck
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-3">Proven Track Record</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Recent Victories</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.id} className="group relative bg-slate-50 border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-amber-600 transition-colors" />
              
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>

              <div className="text-xs font-bold text-slate-400 uppercase mb-2">{item.category}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 font-serif">{item.title}</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-bold text-slate-900">The Challenge:</p>
                  <p className="text-slate-600 text-sm">{item.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">The Victory:</p>
                  <p className="text-slate-600 text-sm">{item.result}</p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mt-auto">
                <p className="text-amber-600 font-bold font-serif text-lg">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}