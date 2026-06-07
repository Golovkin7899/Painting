import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact & Free Quote | Jimenez Painting & Design',
  description:
    'Request a free estimate from Jimenez Painting & Design. Serving Longmont, CO and surrounding areas. Call, email, or fill out our quick quote form.',
}

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="text-cream font-bold text-5xl md:text-7xl leading-none tracking-tight">
            GET IN TOUCH
          </h1>
          <p className="text-cream/60 mt-6 text-lg max-w-xl leading-relaxed">
            Ready to start your project? We&apos;ll get back to you within one business day with a free, no-pressure estimate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Contact Information</p>

              <address className="not-italic flex flex-col gap-8">
                <div>
                  <p className="text-navy/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:+17205550190"
                    className="text-navy font-bold text-2xl hover:text-gold transition-colors duration-200"
                  >
                    (720) 555-0190
                  </a>
                  <p className="text-navy/50 text-sm mt-1">Mon–Sat, 7am–6pm</p>
                </div>

                <div>
                  <p className="text-navy/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:info@jimenezpainting.com"
                    className="text-navy font-semibold text-lg hover:text-gold transition-colors duration-200"
                  >
                    info@jimenezpainting.com
                  </a>
                </div>

                <div>
                  <p className="text-navy/40 text-xs uppercase tracking-wider mb-1">Service Area</p>
                  <p className="text-navy font-semibold">Longmont, CO</p>
                  <p className="text-navy/60 text-sm mt-1 leading-relaxed">
                    Boulder &middot; Loveland &middot; Broomfield &middot; Erie &middot; Firestone &middot; Frederick
                  </p>
                </div>

                <div>
                  <p className="text-navy/40 text-xs uppercase tracking-wider mb-1">License</p>
                  <p className="text-navy/60 text-sm">
                    Licensed General Contractor &middot; Colorado<br />
                    Fully Insured &middot; Bonded
                  </p>
                </div>
              </address>
            </div>

            {/* Map Placeholder */}
            <div>
              <p className="text-navy/40 text-xs uppercase tracking-wider mb-3">Our Area</p>
              <div className="bg-lightgray border border-lightgray h-56 flex items-center justify-center relative overflow-hidden">
                <iframe
                  title="Jimenez Painting & Design service area map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97574.23!2d-105.1!3d40.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf1e63fb879af%3A0xe9dc4f5af0c76dfc!2sLongmont%2C%20CO!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Trust badges */}
            <div className="border-t border-lightgray pt-8">
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Our Promise</p>
              <ul className="flex flex-col gap-3">
                {[
                  '100% free estimates — no obligation',
                  'Response within 1 business day',
                  'Transparent, itemized quotes',
                  'Work doesn\'t begin until you approve',
                ].map((promise) => (
                  <li key={promise} className="flex items-start gap-3 text-sm text-navy/70">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="lg:col-span-3">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">Request a Free Quote</p>
            <h2 className="text-navy font-bold text-3xl md:text-4xl mb-8 leading-tight">
              Tell Us About<br />Your Project
            </h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
