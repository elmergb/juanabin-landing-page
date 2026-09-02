import { useState } from 'react';
import { ChevronDown, Leaf, Zap, Users, Clock, ShieldCheck, Scan, WalletCards } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import { siteConfig } from '../../config/site';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const { links: LINKS } = siteConfig;
const Counter = AnimatedCounter;

// Hero Section
const Hero = () => {
  const scrollToSection = useScrollToSection();
  
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-xs font-semibold text-emerald-600 tracking-wide">
                STELLAR-POWERED • BARANGAY CLIMATE FINTECH
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Build on Stellar.
              <br />
              Operate with JuanaBin.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Transform household waste segregation into instant, transparent micro-rewards—helping Philippine barangays reduce waste while expanding financial inclusion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#activity')}
                className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
              >
                Launch Pilot Dashboard
              </button>
              <a
                href={LINKS.stellarExplorer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition-colors"
              >
                View Stellar Explorer
              </a>
            </div>
          </motion.div>
          
          {/* Right Visual - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 border border-emerald-100">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-xs font-semibold text-emerald-600 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  VERIFIED ON STELLAR
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-slate-500 mb-2">WASTE COLLECTED</p>
                  <p className="text-4xl font-bold text-slate-900">2.4 kg</p>
                </div>
                
                <div className="pt-6 border-t">
                  <p className="text-sm text-slate-500 mb-2">ESTIMATED REWARD</p>
                  <p className="text-3xl font-bold text-emerald-600">+ 1.85 JBIN</p>
                </div>
                
                <div className="mt-6">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 text-xs text-emerald-600"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Transaction recorded
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Metrics Ticker
const MetricsTicker = () => {
  const metrics = [
    { label: 'Waste Diverted', value: 15.4, suffix: ' kg' },
    { label: 'On-Chain Transactions', value: 50, suffix: '+' },
    { label: 'Active Pilot Households', value: 10, suffix: '+' },
    { label: 'CO₂e Estimated Avoided', value: 32.5, suffix: ' kg' },
  ];
  
  return (
    <section className="bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-2">
                <Counter end={String(metric.value)} suffix={metric.suffix} />
              </p>
              <p className="text-sm text-slate-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => {
  const steps = [
    {
      icon: Leaf,
      title: 'Segregate at Home',
      description: 'Separate household waste into accepted categories such as biodegradable, recyclable paper, and recyclable plastic.',
    },
    {
      icon: Scan,
      title: 'Scan & Log',
      description: 'Barangay officers verify and weigh collected materials, then record the transaction digitally. Authentication is handled through Kinde, while the reward transaction is recorded on Stellar.',
    },
    {
      icon: WalletCards,
      title: 'Earn & Redeem',
      description: 'Verified households receive JBIN utility rewards through a Stellar wallet and can redeem eligible rewards for local artisan products and community goods.',
    },
  ];
  
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How Segregate-to-Earn Works</h2>
          <p className="text-lg text-slate-600">A simple three-step process connecting household waste segregation, barangay verification, and transparent digital rewards.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Flow visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-emerald-50 rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-sm font-semibold text-slate-700">Waste</div>
            <div className="text-slate-300 text-2xl hidden md:block">→</div>
            <div className="text-sm font-semibold text-slate-700">Barangay Verification</div>
            <div className="text-slate-300 text-2xl hidden md:block">→</div>
            <div className="text-sm font-semibold text-slate-700">JBIN Reward</div>
            <div className="text-slate-300 text-2xl hidden md:block">→</div>
            <div className="text-sm font-semibold text-slate-700">Stellar Wallet</div>
            <div className="text-slate-300 text-2xl hidden md:block">→</div>
            <div className="text-sm font-semibold text-emerald-600">Community Goods</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Interactive Calculator
const Calculator = () => {
  const [petKg, setPetKg] = useState(3);
  const [sachetKg, setSachetKg] = useState(2);
  const [organicKg, setOrganicKg] = useState(5);
  
  const petJbin = petKg * 1.0;
  const sachetJbin = sachetKg * 0.5;
  const organicJbin = organicKg * 0.2;
  const totalJbin = petJbin + sachetJbin + organicJbin;
  
  const petCO2 = petKg * 3.0;
  const sachetCO2 = sachetKg * 2.0;
  const organicCO2 = organicKg * 0.5;
  const totalCO2 = petCO2 + sachetCO2 + organicCO2;
  
  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Turn Waste Into Impact</h2>
          <p className="text-lg text-slate-600">Adjust the amount of waste collected to see an illustrative estimate of potential JBIN rewards and CO₂e avoided.</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {/* Sliders */}
          <div className="space-y-8 mb-12">
            {/* PET Plastic */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-semibold text-slate-900">PET Plastic</label>
                <span className="text-sm font-bold text-emerald-600">{petKg} kg</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={petKg}
                onChange={(e) => setPetKg(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>1.0 JBIN/kg</span>
                <span>3.0 kg CO₂e/kg</span>
              </div>
            </div>
            
            {/* Sachet/Film */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-semibold text-slate-900">Sachet / Film</label>
                <span className="text-sm font-bold text-emerald-600">{sachetKg} kg</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={sachetKg}
                onChange={(e) => setSachetKg(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>0.5 JBIN/kg</span>
                <span>2.0 kg CO₂e/kg</span>
              </div>
            </div>
            
            {/* Organic Waste */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-semibold text-slate-900">Organic Waste</label>
                <span className="text-sm font-bold text-emerald-600">{organicKg} kg</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="0.1"
                value={organicKg}
                onChange={(e) => setOrganicKg(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>0.2 JBIN/kg</span>
                <span>0.5 kg CO₂e/kg</span>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="grid md:grid-cols-2 gap-6 pt-8 border-t">
            <motion.div
              key={totalJbin}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6"
            >
              <p className="text-sm text-slate-600 mb-2">Estimated JBIN Earned</p>
              <p className="text-4xl font-bold text-emerald-600">{totalJbin.toFixed(2)} JBIN</p>
            </motion.div>
            
            <motion.div
              key={totalCO2}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6"
            >
              <p className="text-sm text-slate-600 mb-2">Estimated CO₂e Avoided</p>
              <p className="text-4xl font-bold text-slate-900">{totalCO2.toFixed(2)} kg</p>
            </motion.div>
          </div>
          
          <p className="text-xs text-slate-500 mt-6 text-center">
            Illustrative estimates only. Actual rewards depend on verified barangay collection rates and program rules.
          </p>
        </div>
      </div>
    </section>
  );
};

// Why Stellar
const WhyStellar = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Low Transaction Costs',
      description: "Stellar's low transaction costs make blockchain-based micro-rewards practical for small-value community transactions.",
    },
    {
      icon: Users,
      title: 'Financial Inclusion',
      description: 'A simple mobile-first authentication experience can provision access to a Stellar wallet without requiring users to understand blockchain infrastructure.',
    },
    {
      icon: Clock,
      title: 'Fast Settlement',
      description: 'Stellar transactions are designed for fast settlement, making them suitable for near-real-time reward distribution.',
    },
    {
      icon: ShieldCheck,
      title: 'Auditability',
      description: 'Verified collection events can be associated with immutable on-chain transaction records, creating a transparent audit trail.',
    },
  ];
  
  return (
    <section id="why-stellar" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Stellar?</h2>
          <p className="text-lg text-slate-600">Infrastructure built for small, frequent, transparent community payments.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Live Activity Dashboard
const ActivityDashboard = () => {
  const transactions = [
    { time: '21:42', officer: 'BRGY-014', type: 'PET Plastic', weight: '850 g', jbin: 0.85 },
    { time: '21:37', officer: 'BRGY-009', type: 'Sachet', weight: '420 g', jbin: 0.21 },
    { time: '21:31', officer: 'BRGY-021', type: 'Organic', weight: '1.2 kg', jbin: 0.24 },
    { time: '21:25', officer: 'BRGY-006', type: 'PET Plastic', weight: '650 g', jbin: 0.65 },
  ];
  
  return (
    <section id="activity" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
            <span className="text-xs font-semibold text-emerald-700">Stellar Testnet</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Live Activity</h2>
          <p className="text-lg text-slate-600">See how verified collection events can be recorded transparently on Stellar Testnet.</p>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Timestamp</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Officer ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Waste Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Weight</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">JBIN</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600">Stellar Tx</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <tr key={idx} className="border-b hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-900">{tx.time}</td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-mono">{tx.officer}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{tx.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{tx.weight}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-600">{tx.jbin}</td>
                    <td className="px-6 py-4">
                      <a
                        href={LINKS.stellarExplorer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {transactions.map((tx, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-4 border">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500">{tx.time}</span>
                  <a
                    href={LINKS.stellarExplorer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 underline"
                  >
                    View
                  </a>
                </div>
                <p className="font-semibold text-slate-900 mb-1">{tx.type}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{tx.weight}</span>
                  <span className="font-semibold text-emerald-600">{tx.jbin} JBIN</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
            DEMO DATA
          </span>
        </div>
      </div>
    </section>
  );
};

// Compliance Section
const Compliance = () => {
  return (
    <section id="compliance" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for Transparent Barangay Operations</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              JuanaBin is designed to help organize waste diversion records, household participation, collection weights, reward distribution records, digital audit trails, and exportable reports for LGU administrators and environmental officers.
            </p>
            
            <ul className="space-y-4">
              {[
                'Waste diversion records',
                'Household participation tracking',
                'Collection weights and verification',
                'Reward distribution records',
                'Digital audit trails',
                'Exportable reports',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-slate-500 mt-8">
              Designed to support documentation and reporting workflows related to RA 9003 and the EPR Act.
            </p>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-xs font-semibold text-slate-500 mb-4">BARANGAY WASTE DIVERSION REPORT</p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Reporting Period</p>
                  <p className="text-lg font-bold text-slate-900">August 2026</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Total Waste Collected</p>
                    <p className="text-xl font-bold text-slate-900">128.4 kg</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Households Participating</p>
                    <p className="text-xl font-bold text-slate-900">47</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Estimated CO₂e Avoided</p>
                    <p className="text-xl font-bold text-slate-900">214.6 kg</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">JBIN Distributed</p>
                    <p className="text-xl font-bold text-emerald-600">86.7</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-3 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                  Export CSV
                </button>
                <button className="flex-1 px-3 py-2 bg-slate-200 text-slate-900 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors">
                  Generate PDF
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FAQ Accordion
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  const faqs = [
    {
      q: 'Do households need a bank account or crypto experience?',
      a: 'No. The intended experience is designed to be mobile-first and simple for users without prior blockchain knowledge. Authentication can be handled through Kinde, while Stellar provides the underlying transaction infrastructure.',
    },
    {
      q: 'Is JBIN a speculative crypto asset?',
      a: 'JBIN is designed as a utility reward within the JuanaBin ecosystem rather than as an investment product. Rewards are intended for redemption within the program for eligible local artisan products and community goods.',
    },
    {
      q: 'How does this help my barangay?',
      a: 'JuanaBin is designed to encourage household waste segregation, create small community-level incentives, improve waste diversion records, and provide a transparent digital record of verified collection activity.',
    },
    {
      q: 'Why use Stellar instead of a traditional database?',
      a: 'A traditional database can manage records efficiently, while Stellar can provide an additional public transaction layer for reward movements that need transparent and independently verifiable records.',
    },
    {
      q: 'Is the dashboard using real blockchain data?',
      a: 'The landing page uses demo/testnet data unless connected to the JuanaBin backend. The production dashboard can retrieve and display actual Stellar transactions.',
    },
  ];
  
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="text-left font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t px-6 py-4 bg-slate-50"
                >
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTA = () => {
  const scrollToSection = useScrollToSection();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Ready to make every kilogram count?</h2>
          <p className="text-xl text-slate-600 mb-8">Bring transparent waste rewards to your barangay.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#activity')}
              className="px-8 py-4 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              Launch Pilot Dashboard
            </button>
            <a
              href={LINKS.contact}
              className="px-8 py-4 rounded-lg border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
            >
              Contact Buslo Builders
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main App
export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <MetricsTicker />
      <HowItWorks />
      <Calculator />
      <WhyStellar />
      <ActivityDashboard />
      <Compliance />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}