"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-0.5 w-10 bg-arc-gold" />
              <span className="text-arc-gold text-sm font-semibold tracking-widest uppercase">
                Our Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-arc-blue"
            >
              Featured Projects
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-block border-2 border-arc-blue text-arc-blue hover:bg-arc-blue hover:text-white font-semibold px-6 py-3 rounded transition-all duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-xl bg-arc-blue aspect-[4/3]">
                  {/* Image */}
                  {project.images?.[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    /* Placeholder when no image yet */
                    <div className="absolute inset-0 bg-gradient-to-br from-arc-blue to-arc-dark flex items-center justify-center">
                      <span className="text-6xl opacity-20">🏗️</span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-arc-dark/40 group-hover:bg-arc-dark/60 transition-colors duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-arc-gold text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-arc-gold">
                    <span className="text-white text-lg">→</span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                    <p className="text-arc-gold text-xs mt-1 font-medium">
                      {project.area}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
