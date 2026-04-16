"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Pool Maintenance",
    description:
      "Weekly cleaning, chemical balancing, and filtration checks to keep your pool sparkling year-round.",
    image: "/images/services/pool-maintenance.jpeg",
    alt: "Clean swimming pool with clear blue water",
  },
  {
    title: "Spa Maintenance",
    description:
      "Temperature management, water chemistry, and deep cleaning for your hot tub or spa.",
    image: "/images/services/spa-maintenance.jpeg",
    alt: "Luxury spa with warm water",
  },
  {
    title: "Water Diagnostics",
    description:
      "Comprehensive water testing and chemical analysis to ensure safe, balanced water quality.",
    image: "/images/services/water-diagnostics.jpeg",
    alt: "Pool water being tested with diagnostic kit",
  },
  {
    title: "Equipment Repairs",
    description:
      "Pumps, filters, heaters, and automation systems — fast diagnostics and reliable repairs.",
    image: "/images/services/equipment-repairs.jpeg",
    alt: "Pool equipment and pump system",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-base-200 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="mb-3 text-4xl font-bold text-base-content">
            Our Services
          </h2>
          <p className="text-base-content/70 text-lg">
            Everything your pool and spa need, handled by certified
            professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="card aspect-3/2 bg-base-100 shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <figure className="relative h-2/3 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-base-content">
                  {service.title}
                </h3>
                <p className="text-base-content/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn btn-primary btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
