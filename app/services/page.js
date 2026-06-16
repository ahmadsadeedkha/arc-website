"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-arc-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-arc-dark via-arc-blue/80 to-arc-dark" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-arc-orange" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-arc-gold" />
              <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                What We Offer
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Our Services
            </h1>
            <p className="text-gray-300 mt-4 max-w-xl text-lg">
              End-to-end construction solutions delivered with precision,
              quality, and commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row gap-10 items-center p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {/* Icon side */}
                <div
                  className={`flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-5xl bg-arc-blue/5 border-2 border-arc-gold/20 ${
                    i % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                      0{i + 1}
                    </span>
                    <div className="h-0.5 w-8 bg-arc-gold" />
                  </div>
                  <h2 className="text-3xl font-black text-arc-blue mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-arc-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-arc-dark via-arc-blue/80 to-arc-dark" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-arc-orange" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Why ARC
              </span>
              <div className="h-0.5 w-10 bg-arc-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white"
            >
              Why Choose Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Quality First",
                desc: "We maintain the highest standards of workmanship on every project we undertake.",
              },
              {
                icon: "⏱️",
                title: "On Time Delivery",
                desc: "We are committed to delivering every project on schedule without compromising quality.",
              },
              {
                icon: "🔒",
                title: "Safety Standards",
                desc: "Safety is our top priority on every site, ensuring zero compromise on protocols.",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "We integrate advanced construction methodologies and industry best practices.",
              },
              {
                icon: "🤝",
                title: "Client Focus",
                desc: "Transparency, reliability, and timely delivery at every stage of the project lifecycle.",
              },
              {
                icon: "📊",
                title: "Cost Effective",
                desc: "Value engineering ensures your project is cost effective while meeting lifetime projections.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-arc-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-arc-blue mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Contact us today and let's discuss how we can bring your project
              to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-arc-gold hover:bg-arc-orange text-white font-semibold px-10 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
