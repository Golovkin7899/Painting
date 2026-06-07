'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Interior', 'Exterior'] as const
type Category = typeof categories[number]

const projects = [
  { id: 1, title: 'Modern Living Room Refresh', category: 'Interior', seed: 'painting1', width: 800, height: 600 },
  { id: 2, title: 'Victorian Exterior Repaint', category: 'Exterior', seed: 'house2', width: 800, height: 1000 },
  { id: 4, title: 'Kitchen Cabinet Transformation', category: 'Interior', seed: 'kitchen4', width: 800, height: 900 },
  { id: 5, title: 'Craftsman Home Exterior', category: 'Exterior', seed: 'craftsman5', width: 800, height: 600 },
  { id: 7, title: 'Open-Concept Office Interior', category: 'Interior', seed: 'office7', width: 800, height: 600 },
  { id: 8, title: 'Ranch House Full Repaint', category: 'Exterior', seed: 'ranch8', width: 800, height: 700 },
]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-navy text-cream'
                : 'bg-lightgray text-navy hover:bg-navy/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group relative break-inside-avoid overflow-hidden cursor-pointer"
            >
              <Image
                src={`https://picsum.photos/seed/${project.seed}/${project.width}/${project.height}`}
                alt={project.title}
                width={project.width}
                height={project.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 border-2 border-gold/0 group-hover:border-gold/80">
                <div>
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">
                    {project.category}
                  </p>
                  <p className="text-cream font-bold text-lg">{project.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
