import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the Camera IoT technology work?",
    answer:
      "JuanaBin's smart bin uses advanced camera sensors and AI to automatically identify waste types (plastic, paper, organic, metal, glass), validate proper segregation, and measure weight with 98% accuracy. The smart lid only opens when the correct waste type is detected.",
  },
  {
    question: "What rewards can I earn and where can I redeem them?",
    answer:
      "You earn points for every proper waste disposal (100 points = 1kg of recyclable plastic). Points are redeemable at partner stores like 7-11, local artisan shops, and community stores for products and goods.",
  },
  {
    question: "How does this help my barangay and the environment?",
    answer:
      "JuanaBin encourages proper household waste segregation, reduces landfill waste, improves recycling rates, creates community-level incentives, and provides data to help barangays track their environmental impact and waste diversion efforts.",
  },
  {
    question: "Do I need any technical knowledge to use JuanaBin?",
    answer:
      "No technical knowledge required! Simply segregate your waste at home and dispose it in the JuanaBin smart bin. The bin's Camera IoT handles all detection and validation automatically. Track your points through our easy-to-use mobile app.",
  },
  {
    question: "What types of waste does JuanaBin accept?",
    answer:
      "JuanaBin smart bins accept biodegradable waste, recyclable paper, PET plastic bottles, sachets, metal cans, and glass containers. Each bin can identify and validate the waste type automatically using Camera IoT technology.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-left font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t px-6 py-4 bg-slate-50">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
