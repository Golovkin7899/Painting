'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ number, title, description, href = '/services' }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-cream border border-lightgray p-8 flex flex-col gap-4 hover:border-gold transition-colors duration-300 overflow-hidden"
    >
      {/* Gold left border on hover */}
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

      <span className="text-brown/30 font-bold text-5xl leading-none select-none">{number}</span>
      <h3 className="text-navy font-bold text-xl">{title}</h3>
      <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
      <Link
        href={href}
        className="text-gold font-semibold text-sm tracking-wider hover:text-brown transition-colors duration-200 mt-auto inline-flex items-center gap-1"
      >
        Learn More <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </Link>
    </motion.div>
  )
}
