'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import StatsBar from '@/components/StatsBar'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

function SectionReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    number: '01',
    title: 'Interior Painting',
    description:
      'We transform living spaces with meticulous prep work, premium paints, and flawless finishing — walls, ceilings, trim, and more.',
  },
  {
    number: '02',
    title: 'Exterior Painting',
    description:
      "Protect and beautify your home's exterior with weather-resistant coatings and expert application from ground to peak.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        {/* Brush texture overlay */}
        <div className="absolute inset-0 brush-texture pointer-events-none" />
        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brown/20 [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)] pointer-events-none" />
        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-gold text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Longmont, CO &amp; Surrounding Areas
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-cream font-bold text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-tight"
            >
              WE BUILD.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-gold font-bold text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-tight"
            >
              WE PAINT.
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-cream/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Professional painting &amp; construction across Colorado — delivered with craftsmanship, integrity, and pride.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/gallery"
              className="inline-block bg-gold text-navy font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold/90 transition-colors duration-200"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-cream text-cream font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-cream hover:text-navy transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <StatsBar />

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="text-navy font-bold text-4xl md:text-5xl leading-tight mb-16 max-w-xl">
              End-to-End Craftsmanship
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SectionReveal key={service.number}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ServiceCard
                    number={service.number}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block text-navy font-semibold text-sm tracking-widest uppercase border-b-2 border-gold pb-1 hover:text-gold transition-colors duration-200"
            >
              View All Services &rarr;
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-lightgray py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Why Choose Us</p>
            <h2 className="text-navy font-bold text-4xl md:text-5xl leading-tight">
              Every Wall<br />Tells a Story.
            </h2>
            <div className="mt-8 w-16 h-1 bg-gold" />
            <p className="text-navy/60 mt-8 text-base leading-relaxed max-w-md">
              We don&apos;t just apply paint — we take pride in every surface we touch. Our team treats your property like our own, leaving nothing to chance and everything to craft.
            </p>
          </SectionReveal>

          <SectionReveal>
            <ul className="flex flex-col gap-6">
              {[
                { title: 'Licensed & Insured', desc: 'Full liability coverage and proper licensing for every project, large or small.' },
                { title: 'Free Estimates', desc: 'No pressure, no cost — just an honest assessment of your project and a clear quote.' },
                { title: 'Premium Materials', desc: "We source top-tier paints, sealers, and materials proven for Colorado's climate." },
                { title: 'On-Time Delivery', desc: 'We respect your schedule. Projects are completed on deadline, every time.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-5 items-start">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center border-2 border-gold text-gold font-bold text-xs">
                    ✓
                  </span>
                  <div>
                    <p className="text-navy font-semibold text-base">{item.title}</p>
                    <p className="text-navy/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner />
    </>
  )
}
