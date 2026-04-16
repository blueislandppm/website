"use client";

import { motion } from "framer-motion";
import ContactButton from "@/app/components/ContactButton";

const weeklyServices = [
  {
    title: "Check & Balance Pool Chemistry",
    description:
      "We test and adjust pH, chlorine, alkalinity, and other chemical levels to keep your water safe and crystal clear.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Brush Pool Walls & Bottom",
    description:
      "Thorough brushing prevents algae buildup and staining, keeping your pool surfaces smooth and clean.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Brush/Clean Tiles",
    description:
      "We remove calcium deposits and scale from your tile line to maintain a polished, well-kept appearance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Clean Skimmer Basket",
    description:
      "A clear skimmer basket ensures proper water circulation and prevents strain on your pump system.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    title: "Skim Pool Surface",
    description:
      "We remove leaves, insects, and debris from the surface to keep your pool looking inviting and pristine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Monitor Equipment",
    description:
      "We inspect your pump, filter, heater, and automation systems each visit to catch issues before they become costly repairs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const asNeededServices = [
  {
    title: "Backwash Filter",
    description: "Reversing flow through your filter to flush out trapped debris and restore filtration efficiency.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Adjust Pool Water Level",
    description: "Adding or draining water to maintain the optimal level for skimmer function and equipment health.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  {
    title: "Algae Control",
    description: "Targeted treatment to eliminate algae blooms and restore your pool to a clear, swimmable state.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Clean Pump Strainer",
    description: "Clearing the pump strainer basket of debris to ensure proper water flow and prevent pump damage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Vacuum Pool",
    description: "Manual or automatic vacuuming to remove settled debris from the pool floor for a spotless finish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Shock Pool",
    description: "A concentrated chlorine treatment to rapidly raise sanitizer levels and eliminate contaminants.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Clean Filter Cartridge",
    description: "Removing and hosing down your filter cartridge to restore optimal water flow and filtration quality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.1 },
};

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <section className="bg-primary py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="mb-4 text-4xl font-bold text-primary-content md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Maintenance Program
          </motion.h1>
          <motion.p
            className="text-lg text-primary-content/80 md:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Our weekly service plans are designed and customized to meet the
            needs of the pool and the pool owner.
          </motion.p>
        </div>
      </section>

      {/* Weekly Services */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <span className="badge badge-primary badge-lg mb-4">Every Visit</span>
            <h2 className="mb-2 text-3xl font-bold text-base-content md:text-4xl">
              Weekly Pool Services
            </h2>
            <p className="text-base-content/70 text-lg">
              Performed on every scheduled maintenance visit to keep your pool in
              top condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {weeklyServices.map((service, i) => (
              <motion.div
                key={service.title}
                className="card bg-base-100 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="card-body">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-base-content text-lg">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* As-Needed Services */}
      <section className="bg-base-300 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <span className="badge badge-secondary badge-lg mb-4">
              Included in Standard Pricing
            </span>
            <h2 className="mb-2 text-3xl font-bold text-base-content md:text-4xl">
              As-Needed Pool Services
            </h2>
            <p className="text-base-content/70 text-lg">
              These services are included in our standard pricing and provided on
              an as-needed basis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {asNeededServices.map((service, i) => (
              <motion.div
                key={service.title}
                className="card bg-base-100 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="card-body">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-base-content text-lg">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          {...fadeUp}
        >
          <h2 className="mb-4 text-3xl font-bold text-base-content">
            Ready for a Cleaner Pool?
          </h2>
          <p className="mb-8 text-lg text-base-content/70">
            Get a free estimate and let us handle the rest.
          </p>
          <ContactButton className="btn btn-primary btn-lg">
            Get a Free Quote
          </ContactButton>
        </motion.div>
      </section>
    </div>
  );
}
