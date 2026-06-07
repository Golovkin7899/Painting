import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryGrid from '@/components/GalleryGrid'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Project Gallery | Jimenez Painting & Design',
  description:
    'Browse completed painting projects by Jimenez Painting & Design — interior, exterior, cabinet, and commercial work across Colorado.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
        <div className="absolute right-0 top-0 w-1/4 h-full bg-brown/20 [clip-path:polygon(40%_0,100%_0,100%_100%,0%_100%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            <Link href="/" className="hover:text-cream transition-colors duration-200">Home</Link>
            <span className="mx-2 text-cream/20">/</span>
            Gallery
          </p>
          <h1 className="text-cream font-bold text-5xl md:text-7xl leading-none tracking-tight">
            OUR WORK
          </h1>
          <p className="text-cream/60 mt-6 text-lg max-w-xl leading-relaxed">
            Every project tells a story. Here&apos;s a look at the spaces we&apos;ve transformed across Colorado.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>

      {/* Similar Project CTA */}
      <section className="bg-lightgray py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Inspired by What You See?</p>
          <h2 className="text-navy font-bold text-3xl md:text-4xl mb-6">
            Request a Similar Project
          </h2>
          <p className="text-navy/60 text-base mb-8 leading-relaxed">
            Share the style you love and we&apos;ll bring it to your home or business. Our team is ready to make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy text-cream font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-navy/90 transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
