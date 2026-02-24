'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LOCATION_SITES } from '@/lib/locationSites'

type HeroNavbarLink = {
  href: string
  label: string
}

const leftLinks: HeroNavbarLink[] = [
  { href: '#home', label: 'HOME' },
  { href: '#locations', label: 'LOCATIONS' },
  { href: '#lead-form', label: 'PROPERTIES' },
]

const rightLinks: HeroNavbarLink[] = [
  { href: '#lead-form', label: 'CONTACT' },
  { href: 'https://wa.me/918830460132?text=Hi%20Nexovastu%2C%20I%20am%20interested%20in%20your%20services.', label: 'WHATSAPP' },
]

const allLinks = [...leftLinks, ...rightLinks]

export default function HeroNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">
          {/* Left links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase text-white/90">
            {leftLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="ui-transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Center brand */}
          <Link
            href="#home"
            className="flex flex-col items-center gap-1 text-white ui-transition hover:text-white/95"
            aria-label="Nexovastu Home"
          >
            <span className="text-xl sm:text-2xl tracking-[0.35em] font-light">
              Nexovastu
            </span>
            <span className="text-[10px] tracking-[0.45em] uppercase text-white/80">
              BY PSD
            </span>
          </Link>

          {/* Right links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase text-white/90">
            {rightLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="ui-transition hover:text-white"
                {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white ui-transition"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'max-h-[600px] opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 pb-4 border-t border-white/20 pt-4">
            {allLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.22em] uppercase text-white/90 hover:text-white ui-transition py-2"
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Location Sites in Mobile Menu */}
            <div className="pt-4 border-t border-white/20 mt-2">
              <div className="text-xs tracking-[0.22em] uppercase text-white/70 mb-3">OUR LOCATIONS</div>
              <div className="flex flex-col gap-2 pl-2">
                {LOCATION_SITES.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs tracking-[0.15em] uppercase text-white/80 hover:text-white ui-transition py-1.5"
                  >
                    {site.location}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}


