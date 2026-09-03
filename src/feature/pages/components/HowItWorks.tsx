import { Leaf, Scan, WalletCards } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: Leaf,
      title: "Approach the Bin",
      description:
        "Walk up to the JuanaBin PH smart bin with your segregated waste - biodegradable, non-biodegradable, or high-value recyclables like PET bottles and sachets.",
    },
    {
      icon: Scan,
      title: "Shoot Like Basketball",
      description:
        '"Shoot" your trash toward the basketball-hoop opening. AI sensors detect the waste type in real-time. Sort right? The hoop opens and you score. Sort wrong? The bin stays closed - no penalty, just try the correct bin.',
    },
    {
      icon: WalletCards,
      title: "Earn QR Rewards",
      description:
        "Get instant QR code rewards redeemable like cash at partner convenience stores (7-11). Repeated correct action builds automatic habits. Over time, segregation becomes natural.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How JuanaBin PH Works
          </h2>
          <p className="text-lg text-slate-600">
            A simple three-step process: segregate at home, let our smart bin
            validate with Camera IoT, and earn instant rewards.
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
              "Approach Bin",
              "Shoot Trash 🏀",
              "AI Detects",
              "Hoop Opens",
              "Earn QR Reward",
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
