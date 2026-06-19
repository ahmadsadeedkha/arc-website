'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { qualityPolicy } from '@/data/content'
import { CheckCircle } from 'lucide-react'

export default function QualityPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Banner */}
      <section className="bg-arc-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-arc-dark via-arc-blue/80 to-arc-dark" />
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
                Our Standards
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Quality Policy
            </h1>
            <p className="text-gray-300 mt-4 max-w-xl text-lg">
              Our unwavering commitment to excellence in every project
              we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-arc-gold" />
              <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                Our Commitment
              </span>
              <div className="h-0.5 w-10 bg-arc-gold" />
            </div>
            <h2 className="text-4xl font-black text-arc-blue mb-6">
              Building Quality, Delivering Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {qualityPolicy.intro}
            </p>
          </motion.div>

          {/* Commitments */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-arc-blue mb-6"
            >
              We are committed to:
            </motion.h3>
            {qualityPolicy.commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-arc-gold hover:shadow-sm transition-all duration-300 group"
              >
                <CheckCircle
                  size={22}
                  className="text-arc-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-arc-blue rounded-2xl p-10 text-center"
          >
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              {qualityPolicy.closing}
            </p>
            <p className="text-arc-gold font-bold text-xl italic">
              "{qualityPolicy.slogan}"
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Ahmad Rafique Construction Company — Management Commitment
            </p>
          </motion.div>

        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Our Pillars
              </span>
              <div className="h-0.5 w-10 bg-arc-gold" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-black text-arc-blue"
            >
              What Quality Means to Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏗️', title: 'Precision Engineering', desc: 'Every structure is built with meticulous attention to detail and engineering precision.' },
              { icon: '🛡️', title: 'Safety First', desc: 'Uncompromising safety standards on every site protect our workers and clients.' },
              { icon: '⏱️', title: 'Timely Delivery', desc: 'We honour our commitments and deliver every project on schedule.' },
              { icon: '🌱', title: 'Sustainability', desc: 'Durable, cost-effective, and sustainable construction for long-term value.' },
              { icon: '📋', title: 'Compliance', desc: 'Full compliance with all regulatory, statutory, and contractual obligations.' },
              { icon: '🔄', title: 'Continuous Improvement', desc: 'We constantly evolve our processes through innovation and best practices.' },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-arc-gold transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-lg font-bold text-arc-blue mb-3 group-hover:text-arc-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {pillar.desc}
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
              Experience the ARC Difference
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Let us show you what quality construction truly looks like.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-arc-gold hover:bg-arc-orange text-white font-semibold px-10 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}