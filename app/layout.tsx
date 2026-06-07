import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jimenez Painting & Design | Professional Painting & Construction in Colorado',
  description:
    'Jimenez Painting & Design delivers expert interior painting, exterior painting, cabinet painting, drywall, and commercial services across Longmont, CO and surrounding areas. Licensed, insured, and committed to excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased bg-cream text-navy">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
