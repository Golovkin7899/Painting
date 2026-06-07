import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Our Services | Jimenez Painting & Design',
  description:
    'Explore the full range of painting services offered by Jimenez Painting & Design — interior, exterior, cabinet painting, drywall, and commercial work.',
}

const services = [
  {
    icon: '🎨',
    title: 'Interior Painting',
    description:
      'We bring life to your living spaces with precision prep, premium paints, and clean, flawless results. Walls, ceilings, trim, crown molding — no detail is too small.',
    features: ['Accent walls & custom colors', 'Trim & crown molding', 'Ceiling painting', 'Odor-free low-VOC options'],
  },
  {
    icon: '🏠',
    title: 'Exterior Painting',
    description:
      "Your home's exterior is its first impression. We apply durable, weather-resistant coatings that stand up to Colorado's sun, wind, and snow — and look stunning year-round.",
    features: ['Full exterior repaints', 'Deck & fence staining', 'Siding & trim', 'Power washing & surface prep'],
  },
  {
    icon: '🪚',
    title: 'Cabinet Painting',
    description:
      'Transform your kitchen or bathroom without a full renovation. Our cabinet specialists deliver a factory-smooth finish that breathes new life into existing cabinetry.',
    features: ['Kitchen & bath cabinets', 'Deglossing & primer sealing', 'Spray-applied finish', 'Hardware re-installation'],
  },
  {
    icon: '🔧',
    title: 'Drywall & Repairs',
    description:
      'Before the paint goes on, the canvas has to be perfect. We handle drywall installation, patching, texturing, and skim-coating to ensure every surface is smooth and ready.',
    features: ['Drywall installation', 'Hole & crack patching', 'Texture matching', 'Skim coat finishing'],
  },
  {
    icon: '🏢',
    title: 'Commercial Painting',
    description:
      'We work with property managers, contractors, and business owners to deliver professional commercial painting on schedule — minimizing downtime and maximizing results.',
    features: ['Office & retail spaces', 'Multi-unit properties', 'Flexible scheduling', 'Large-volume pricing'],
  },
]

export default function ServicesPage() {
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
            Services
          </p>
          <h1 className="text-cream font-bold text-5xl md:text-7xl leading-none tracking-tight">
            OUR SERVICES
          </h1>
          <p className="text-cream/60 mt-6 text-lg max-w-xl leading-relaxed">
            From a single accent wall to a full commercial buildout — we bring professional-grade craft to every scope of work.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative bg-cream border border-lightgray p-8 flex flex-col gap-5 hover:border-gold hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Hover accent */}
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h2 className="text-navy font-bold text-xl mb-3">{service.title}</h2>
                  <p className="text-navy/60 text-sm leading-relaxed">{service.description}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy/70">
                      <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="bg-brown py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-xs font-semibold tracking-widest uppercase text-center mb-12">Our Process</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Estimate', desc: 'We visit your site, assess the project, and provide a detailed written quote — at no cost.' },
              { step: '02', title: 'Proposal & Scheduling', desc: 'Review our scope, approve the plan, and lock in your start date with a clear timeline.' },
              { step: '03', title: 'Expert Execution', desc: 'Our crew shows up on time, protects your space, and delivers exceptional workmanship.' },
              { step: '04', title: 'Final Walkthrough', desc: 'We do a thorough review with you to ensure every detail meets our mutual high standards.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="text-gold/30 font-bold text-5xl leading-none">{item.step}</span>
                <h3 className="text-cream font-bold text-lg">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
