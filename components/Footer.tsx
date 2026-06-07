import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold tracking-widest text-cream mb-1">JIMENEZ</p>
            <p className="text-gold text-xs font-semibold tracking-wider mb-4">PAINTING & DESIGN</p>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Built with precision. Painted with pride. Serving Colorado with craftsmanship you can count on.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
                { label: 'Get a Free Quote', href: '/contact' },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Contact Us</p>
            <address className="not-italic flex flex-col gap-3 text-sm text-cream/60">
              <p>
                <span className="text-cream/40 text-xs uppercase tracking-wider block mb-1">Phone</span>
                <a href="tel:+17205550190" className="hover:text-gold transition-colors duration-200">
                  (720) 555-0190
                </a>
              </p>
              <p>
                <span className="text-cream/40 text-xs uppercase tracking-wider block mb-1">Email</span>
                <a href="mailto:info@jimenezpainting.com" className="hover:text-gold transition-colors duration-200">
                  info@jimenezpainting.com
                </a>
              </p>
              <p>
                <span className="text-cream/40 text-xs uppercase tracking-wider block mb-1">Service Area</span>
                Longmont, CO and surrounding areas
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Jimenez Painting &amp; Design. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs tracking-wider">Licensed &middot; Insured &middot; Colorado</p>
        </div>
      </div>
    </footer>
  )
}
