import { Camera, Smartphone, Recycle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Camera,
    title: "Camera IoT Technology",
    description:
      "Advanced camera system automatically identifies waste type, validates proper segregation, and measures weight with 98% accuracy - no manual verification needed.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description:
      "Track your waste disposal, view reward points, redeem at partner stores like 7-11, and monitor your environmental impact through our intuitive mobile app.",
  },
  {
    icon: Recycle,
    title: "Smart Lid System",
    description:
      "Intelligent lid only opens when correct waste type is detected, ensuring proper segregation. Built-in compaction reduces volume and odor control keeps bins fresh.",
  },
  {
    icon: TrendingUp,
    title: "Real Rewards",
    description:
      "Earn points for every proper disposal, redeemable at local stores and partner establishments. Your waste becomes valuable community currency.",
  },
];

export default function WhyJuanaBin() {
  return (
    <section id="why-juanabin" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why JuanaBin?
          </h2>
          <p className="text-lg text-slate-600">
            Smart technology that makes waste segregation effortless, 
            rewarding, and impactful for every Filipino household.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
