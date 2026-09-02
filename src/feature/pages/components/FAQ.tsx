import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do households need a bank account or crypto experience?",
    answer:
      "No. The intended experience is designed to be mobile-first and simple for users without prior blockchain knowledge. Authentication can be handled through Kinde, while Stellar provides the underlying transaction infrastructure.",
  },
  {
    question: "Is JBIN a speculative crypto asset?",
    answer:
      "JBIN is designed as a utility reward within the JuanaBin ecosystem rather than as an investment product. Rewards are intended for redemption within the program for eligible local artisan products and community goods.",
  },
  {
    question: "How does this help my barangay?",
    answer:
      "JuanaBin is designed to encourage household waste segregation, create small community-level incentives, improve waste diversion records, and provide a transparent digital record of verified collection activity.",
  },
  {
    question: "Why use Stellar instead of a traditional database?",
    answer:
      "A traditional database can manage records efficiently, while Stellar can provide an additional public transaction layer for reward movements that need transparent and independently verifiable records.",
  },
  {
    question: "Is the dashboard using real blockchain data?",
    answer:
      "The landing page uses demo/testnet data unless connected to the JuanaBin backend. The production dashboard can retrieve and display actual Stellar transactions.",
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
