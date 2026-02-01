'use client'

import Image from 'next/image'
import HeroNavbar from '@/components/layout/HeroNavbar'

// Optimized image URL - balanced size for performance
// Using 1920px for desktop quality, but with optimized quality setting
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=75&w=1920&auto=format&fit=crop'

export default function PremiumHero() {
  return (
    <section id="coming-soon" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-black">
      {/* Background with fallback color */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" aria-hidden="true">
        <Image
          src={HERO_IMAGE_URL}
          alt="Premium Real Estate"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Soft cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        {/* Additional gradient overlay for brand colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/20 via-transparent to-primary-dark/30" />
      </div>

      {/* Sobha-style hero navbar */}
      <HeroNavbar />

      {/* Centered hero content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-none">
              Something Big
            </h1>
            <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-none">
              Is Coming
            </h2>
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide">
              At Your Service
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
