'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { partners } from '@/data/partners'

export default function PartnersPage() {
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
                Collaborations
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Our Proud Partners
            </h1>
            <p className="text-gray-300 mt-4 max-w-xl text-lg">
              We are honoured to have worked alongside some of the most
              respected organizations across industries and borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-arc-blue py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Global Partners" },
              { number: "5+", label: "Countries" },
              { number: "15+", label: "Years of Trust" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl font-black text-arc-gold">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
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
                Our Network
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
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 mt-4 max-w-xl mx-auto"
            >
              From multinational corporations to local industry giants, our
              partnerships reflect the trust and quality we deliver.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-arc-gold hover:shadow-lg transition-all duration-300 group aspect-square"
              >
                {partner.logo ? (
                  <div className="relative w-full h-24">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-arc-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-arc-blue font-black text-lg">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-arc-gold" />
              <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                Join Us
              </span>
              <div className="h-0.5 w-10 bg-arc-gold" />
            </div>
            <h2 className="text-4xl font-black text-arc-blue mb-4">
              Become a Partner
            </h2>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              We are always looking for new partnerships that drive mutual
              growth and deliver exceptional value. Let's build something great
              together.
            </p>
            <a
              href="mailto:ahmedrafiqueconstructionco@gmail.com"
              className="inline-block bg-arc-gold hover:bg-arc-orange text-white font-semibold px-10 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}