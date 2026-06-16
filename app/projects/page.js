"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const categories = ["all", "commercial", "industrial"];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

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
                Our Work
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              Completed Projects
            </h1>
            <p className="text-gray-300 mt-4 max-w-xl text-lg">
              A showcase of our work across industrial, commercial, and
              high-rise construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${
                  active === cat
                    ? "bg-arc-blue text-white shadow-lg"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-arc-blue hover:text-arc-blue"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-arc-blue aspect-[4/3]">
                      {project.images?.[0] ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
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

                      {/* Arrow */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-arc-gold">
                        <span className="text-white text-lg">→</span>
                      </div>

                      {/* Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-xl mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {project.location}
                        </p>
                        <p className="text-arc-gold text-xs mt-1 font-medium">
                          {project.area}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
