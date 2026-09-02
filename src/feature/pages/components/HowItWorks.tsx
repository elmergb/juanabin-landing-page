import { Leaf, Scan, WalletCards } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: Leaf,
      title: "Segregate at Home",
      description:
        "Separate household waste into accepted categories such as biodegradable, recyclable paper, and recyclable plastic.",
    },
    {
      icon: Scan,
      title: "Scan & Log",
      description:
        "Barangay officers verify and weigh collected materials, then record the transaction digitally. Authentication is handled through Kinde, while the reward transaction is recorded on Stellar.",
    },
    {
      icon: WalletCards,
      title: "Earn & Redeem",
      description:
        "Verified households receive JBIN utility rewards through a Stellar wallet and can redeem eligible rewards for local artisan products and community goods.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How Segregate-to-Earn Works
          </h2>
          <p className="text-lg text-slate-600">
            A simple three-step process connecting household waste segregation,
            barangay verification, and transparent digital rewards.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-emerald-50 rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            {[
              "Waste",
              "Barangay Verification",
              "JBIN Reward",
              "Stellar Wallet",
              "Community Goods",
            ].map((label, idx) => (
              <div key={label} className="contents">
                <div
                  className={`text-sm font-semibold ${idx === 4 ? "text-emerald-600" : "text-slate-700"}`}
                >
                  {label}
                </div>
                {idx < 4 && (
                  <div className="text-slate-300 text-2xl hidden md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
