"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How often should my pool be serviced?",
    answer:
      "We recommend weekly service for most residential pools to maintain proper water chemistry, clean debris, and inspect equipment. During peak summer months or heavy-use periods, more frequent visits may be beneficial.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Estero, Bonita Springs, Naples, Fort Myers, Sanibel, and surrounding communities in Southwest Florida.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes! All of our technicians are Certified Pool Operators (CPO) with extensive training in water chemistry, equipment maintenance, and safety standards.",
  },
  {
    question: "Do you offer emergency pool service?",
    answer:
      "Absolutely. We offer emergency service for issues like equipment failures, algae blooms, and storm damage. Call us anytime and we'll get someone out to you as quickly as possible.",
  },
  {
    question: "What's included in a standard weekly visit?",
    answer:
      "Each visit includes water chemistry testing and balancing, skimming and vacuuming, brush and tile cleaning, filter and equipment inspection, and a detailed service report left at your door.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a free estimate by clicking the Contact Us button on our site, calling us directly, or sending us an email. We'll schedule a quick on-site assessment and provide a transparent, no-obligation quote.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-base-200 py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-base-content"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-2 min-h-[580]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="collapse collapse-arrow bg-base-100 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-lg font-semibold text-base-content">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
