"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - swap this div's bg with an actual image later */}
      <div className="absolute inset-0 bg-arc-dark">
        {/* Diagonal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-arc-dark via-arc-blue/90 to-arc-dark/80" />

        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(201,168,76,0.3) 40px,
              rgba(201,168,76,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Orange accent line - left side like in the PDF */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-arc-orange" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-12 bg-arc-gold" />
            <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
              Ahmad Rafique Construction
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Crafting
            <span className="text-arc-gold"> Structures,</span>
            <br />
            Creating
            <span className="text-arc-gold"> Trust.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Delivering excellence in industrial and commercial construction.
            From concept to completion, we build durable, efficient, and
            future-ready structures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="bg-arc-gold hover:bg-arc-orange text-white font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-base"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:border-arc-gold text-white hover:text-arc-gold font-semibold px-8 py-4 rounded transition-all duration-300 text-base"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "20+", label: "Proud Partners" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-arc-gold">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-arc-gold/50"
        />
      </motion.div>
    </section>
  );
}
