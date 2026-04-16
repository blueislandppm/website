"use client";

import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div
        className="hero min-h-[calc(80vh-4rem)]"
        style={{
          backgroundImage:
            "url(/images/hero.jpeg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-primary/60" />
        <div
          className="absolute inset-0 z-[1] overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-3/5 -translate-y-1/2 w-[120vw] h-[80vh] rounded-[50%] -rotate-100"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(from var(--color-accent) l c h / 0.75) 0%, oklch(from var(--color-accent) l c h / 0.60) 30%, oklch(from var(--color-primary) l c h / 0.30) 55%, oklch(from var(--color-primary) l c h / 0) 72%)",
              filter: "brightness(0.70)",
            }}
          />
        </div>
        <div className="hero-content p-8 xl:w-6xl text-primary-content relative z-10">
          <motion.div
            className="max-w-2xl mr-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h1 className="mb-5 text-5xl font-bold md:text-7xl">
              Professional Pool Maintenance
            </h1>
            <p className="mb-8 text-lg md:text-2xl font-light whitespace-pre-line">
              {`Crystal-clear pools & worry-free service.\nServing Southwest Florida with pride.`}
            </p>
            <ContactButton className="btn btn-secondary btn-lg">
              Get Your Free Estimate
            </ContactButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
