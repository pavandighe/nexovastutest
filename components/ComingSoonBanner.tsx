'use client'

import LeadForm from './LeadForm'
import { LOCATION_SITES } from '@/lib/locationSites'

export default function ComingSoonBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary via-blue-600 to-primary-light overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent"></div>

      {/* Floating Shapes with Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        {/* Logo/Brand */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-white/20 group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 via-white/10 to-primary-light/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-white to-white/90 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-all duration-500 hover:scale-110 group/logo">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 to-primary-dark/30 rounded-2xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-primary-dark font-bold text-4xl md:text-5xl">NV</span>
                </div>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-3 bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
                Nexovastu
              </h1>
              <p className="text-white/95 text-xl sm:text-2xl font-semibold tracking-wide">BY PSD</p>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl relative">
            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              Premium Real Estate Services
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </h2>
          <p className="text-2xl sm:text-3xl text-white/98 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover verified properties across Pune with expert guidance from Nexovastu.
          </p>
          <div className="inline-block px-8 py-4 bg-white/25 backdrop-blur-xl rounded-full border-2 border-white/40 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-white/30 group">
            <p className="text-white font-bold text-lg flex items-center gap-2">
              <span>Connect with our team today!</span>
              <span className="text-2xl transform group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            </p>
          </div>
        </div>

        {/* Location Highlights */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Explore Our Premium Locations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {LOCATION_SITES.map((site, index) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white/15 backdrop-blur-xl rounded-xl p-4 border-2 border-white/25 hover:border-white/40 hover:bg-white/25 hover:scale-110 transition-all duration-300 transform group shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-white font-bold text-sm md:text-base group-hover:text-white transition-colors flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></span>
                  {site.location}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <LeadForm />
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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


