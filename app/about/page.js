"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ceoMessage, introduction, mission } from "@/data/content";

export default function AboutPage() {
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
                Who We Are
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              About ARC
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-10 bg-arc-gold" />
                <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                  Introduction
                </span>
              </div>
              <h2 className="text-4xl font-black text-arc-blue mb-6">
                Building the Future, One Structure at a Time
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {introduction}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-arc-blue/10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-arc-blue to-arc-dark flex items-center justify-center">
                  <span className="text-8xl opacity-20">🏗️</span>
                </div>
              </div>
              {/* Decorative box */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-arc-gold rounded-xl -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-arc-gold/10 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-10 bg-arc-gold" />
                <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                  Our Mission
                </span>
                <div className="h-0.5 w-10 bg-arc-gold" />
              </div>
              <h2 className="text-4xl font-black text-arc-blue mb-8">
                What Drives Us
              </h2>
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 relative">
                <div className="text-6xl text-arc-gold/20 font-serif absolute top-4 left-6">
                  "
                </div>
                <p className="text-gray-600 text-xl leading-relaxed relative z-10">
                  {mission}
                </p>
                <div className="text-6xl text-arc-gold/20 font-serif absolute bottom-0 right-6">
                  "
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* CEO Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden bg-arc-blue relative">
                <div className="absolute inset-0 bg-gradient-to-br from-arc-blue to-arc-dark flex items-center justify-center">
                  <span className="text-8xl opacity-20">👤</span>
                </div>
                {/* Swap with real CEO image later */}
                {/* <Image src="/images/ceo.jpg" alt="CEO" fill className="object-cover" /> */}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-arc-gold text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-2xl font-black">15+</div>
                <div className="text-xs font-medium">Years Experience</div>
              </div>
            </motion.div>

            {/* CEO Message */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-10 bg-arc-gold" />
                <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                  CEO Message
                </span>
              </div>
              <h2 className="text-4xl font-black text-arc-blue mb-2">
                {ceoMessage.name}
              </h2>
              <p className="text-arc-gold font-medium mb-8">
                {ceoMessage.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {ceoMessage.message}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-arc-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "20+", label: "Proud Partners" },
              { number: "2", label: "Office Locations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-arc-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
