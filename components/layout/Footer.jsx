'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/data/content'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Partners', href: '/partners' },
  { name: 'Quality Policy', href: '/quality' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-arc-dark text-white">

      {/* Top CTA Banner */}
      <div className="bg-arc-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mt-2">
                Get in touch with us today for a free consultation and quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-arc-gold hover:bg-arc-orange text-white font-semibold px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <span className="text-3xl font-black text-white">ARC</span>
                <p className="text-arc-gold text-xs font-semibold tracking-widest mt-1">
                  CONSTRUCTION
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {companyInfo.tagline}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Delivering excellence in industrial and commercial construction
                since our founding.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-6 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-arc-gold" />
              </h4>
              <ul className="space-y-3 mt-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-arc-gold transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Faisalabad Office */}
            <div>
              <h4 className="text-white font-bold text-base mb-6 relative">
                Faisalabad Office
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-arc-gold" />
              </h4>
              <ul className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    P-286, Zeeshan Road, T-Street, Khayaban Colony #2, Madina Town, Faisalabad.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  <a href="tel:0092418755112" className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200">
                    0092-41-8755112
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  <a href="tel:03004327821" className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200">
                    0300-4327821
                  </a>
                </li>
              </ul>
            </div>

            {/* Lahore Office */}
            <div>
              <h4 className="text-white font-bold text-base mb-6 relative">
                Lahore Office
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-arc-gold" />
              </h4>
              <ul className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    7/1, Shan Arcade, Barkat Market, New Garden Town, Lahore.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  <a href="tel:009242323191521" className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200">
                    0092-42-32319152
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  <a href="tel:03006127821" className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200">
                    0300-6127821
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  
                    <a href="https://wa.me/923008885367" className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200">
                    0300-8885367
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-arc-gold flex-shrink-0 mt-0.5" />
                  
                    <a href="mailto:ahmedrafiqueconstructionco@gmail.com"
                    className="text-gray-400 hover:text-arc-gold text-sm transition-colors duration-200 break-all"
                  >
                    ahmedrafiqueconstructionco@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahmad Rafique Construction Company Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            NTN: {companyInfo.ntn}
          </p>
        </div>
      </div>

    </footer>
  )
}