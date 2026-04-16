"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/public/images/about.jpeg"

export default function About() {
  return (
    <section className="bg-base-100 py-20 px-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-base-content">
            Locally Owned in Estero, FL
          </h2>
          <p className="mb-4 text-lg text-base-content/70">
            Blue Island was founded with a simple mission: give Southwest
            Florida homeowners the reliable, honest pool service they deserve.
            As a locally owned and operated company, we treat every pool like
            our own.
          </p>
          <p className="mb-6 text-lg text-base-content/70">
            Our team of certified pool operators brings years of hands-on
            experience in water chemistry, equipment maintenance, and customer
            care. Whether it&apos;s a routine weekly visit or an emergency
            repair, we&apos;re just a phone call away.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <figure className="card shadow-lg overflow-hidden">
            <Image
              src={aboutImg}
              alt="Pool in Estero"
              width={1200}
              height={870}
              className="w-full h-auto"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
