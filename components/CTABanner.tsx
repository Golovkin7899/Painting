'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-navy py-24 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          Let&apos;s Get Started
        </p>
        <h2 className="text-cream font-bold text-4xl md:text-5xl leading-tight mb-6">
          Ready to Transform<br />Your Space?
        </h2>
        <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
          From a single room to a full commercial buildout — we bring the same standard of excellence to every project.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-navy font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold/90 transition-colors duration-200"
        >
          Get a Free Quote
        </Link>
      </motion.div>
    </section>
  )
}
