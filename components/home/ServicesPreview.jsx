"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-0.5 w-10 bg-arc-gold" />
            <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
              What We Do
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
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 max-w-xl mx-auto text-base"
          >
            From planning to execution, we deliver end-to-end construction
            solutions tailored to your needs.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-arc-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="text-4xl mb-5">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-arc-blue mb-3 group-hover:text-arc-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                {service.description}
              </p>

              {/* Bottom arrow */}
              <div className="mt-6 flex items-center gap-2 text-arc-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block border-2 border-arc-blue text-arc-blue hover:bg-arc-blue hover:text-white font-semibold px-8 py-3.5 rounded transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
