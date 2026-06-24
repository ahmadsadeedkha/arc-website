"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersCarousel() {
  // Duplicate for infinite scroll effect
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-0.5 w-10 bg-arc-gold" />
            <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
              Trusted By
            </span>
            <div className="h-0.5 w-10 bg-arc-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-arc-blue"
          >
            Our Proud Partners
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto"
          >
            We are proud to have worked with leading organizations across
            industries and borders.
          </motion.p>
        </div>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="flex-shrink-0 w-40 h-24 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center px-4 hover:border-arc-gold hover:shadow-md transition-all duration-300 group"
            >
              {partner.logo ? (
                <div className="relative w-full h-full p-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              ) : (
                <span className="text-xs font-semibold text-gray-400 text-center group-hover:text-arc-blue transition-colors duration-300">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
