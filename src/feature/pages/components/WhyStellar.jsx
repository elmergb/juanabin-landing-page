import { Clock, ShieldCheck, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: Zap, title: 'Ultra-Low Transaction Costs', description: "Stellar's low transaction costs make blockchain-based micro-rewards practical for small-value community transactions." },
  { icon: Users, title: 'Financial Inclusion', description: 'A simple mobile-first authentication experience can provision access to a Stellar wallet without requiring users to understand blockchain infrastructure.' },
  { icon: Clock, title: 'Fast Settlement', description: 'Stellar transactions are designed for fast settlement, making them suitable for near-real-time reward distribution.' },
  { icon: ShieldCheck, title: 'Auditability', description: 'Verified collection events can be associated with immutable on-chain transaction records, creating a transparent audit trail.' },
]

export default function WhyStellar() {
  return <section id="why-stellar" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-7xl mx-auto"><div className="text-center mb-16"><h2 className="text-4xl font-bold text-slate-900 mb-4">Why Stellar?</h2><p className="text-lg text-slate-600">Infrastructure built for small, frequent, transparent community payments.</p></div>
      <div className="grid md:grid-cols-2 gap-8">{features.map((feature, idx) => { const Icon = feature.icon; return <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"><div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6"><Icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3><p className="text-slate-600 leading-relaxed">{feature.description}</p></motion.div> })}</div>
    </div>
  </section>
}
