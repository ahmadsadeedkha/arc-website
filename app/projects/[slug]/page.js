"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { use } from "react";

export default function ProjectDetailPage({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

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
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-arc-gold hover:text-white text-sm font-medium mb-6 transition-colors duration-200"
            >
              ← Back to Projects
            </Link>
            <span className="block text-arc-gold text-sm font-semibold tracking-widest uppercase mb-3 capitalize">
              {project.category}
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <span className="text-gray-400 text-xs uppercase tracking-widest">
                  Location
                </span>
                <p className="text-white font-semibold mt-1">
                  {project.location}
                </p>
              </div>
              <div>
                <span className="text-gray-400 text-xs uppercase tracking-widest">
                  Area
                </span>
                <p className="text-white font-semibold mt-1">{project.area}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-arc-blue mb-6"
          >
            {project.images?.[0] ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-arc-blue to-arc-dark flex items-center justify-center">
                <span className="text-9xl opacity-20">🏗️</span>
              </div>
            )}
          </motion.div>

          {/* Additional images grid */}
          {project.images?.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-arc-blue"
                >
                  <Image
                    src={img}
                    alt={`${project.title} ${i + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-arc-blue mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Details Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit">
              <h3 className="text-lg font-bold text-arc-blue mb-6">
                Project Details
              </h3>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">
                    Project Name
                  </span>
                  <span className="text-arc-blue font-semibold">
                    {project.title}
                  </span>
                </li>
                <li className="flex flex-col gap-1 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">
                    Location
                  </span>
                  <span className="text-arc-blue font-semibold">
                    {project.location}
                  </span>
                </li>
                <li className="flex flex-col gap-1 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">
                    Area
                  </span>
                  <span className="text-arc-blue font-semibold">
                    {project.area}
                  </span>
                </li>
                <li className="flex flex-col gap-1 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">
                    Category
                  </span>
                  <span className="text-arc-blue font-semibold capitalize">
                    {project.category}
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block mt-8 bg-arc-gold hover:bg-arc-orange text-white text-center font-semibold px-6 py-3 rounded transition-all duration-300"
              >
                Start a Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-arc-blue mb-10">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/projects/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-arc-blue">
                      {p.images?.[0] ? (
                        <Image
                          src={p.images[0]}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-arc-blue to-arc-dark flex items-center justify-center">
                          <span className="text-5xl opacity-20">🏗️</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-arc-dark/40 group-hover:bg-arc-dark/60 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-lg">
                          {p.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{p.location}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
