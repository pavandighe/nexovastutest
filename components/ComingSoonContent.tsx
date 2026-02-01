'use client'

import Link from 'next/link'
import LeadForm from './LeadForm'
import { LOCATION_SITES } from '@/lib/locationSites'

export default function ComingSoonContent() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-4xl">NV</span>
            </div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Nexovatu
              </h2>
              <p className="text-lg text-gray-600 font-medium">BY PSD</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Premium real estate platform coming soon. Your trusted partner for property solutions across Pune, Maharashtra.
          </p>
        </div>

        {/* Location Highlights */}
        <div id="locations" className="max-w-6xl mx-auto mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 mb-4">
              Our Premium Locations
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of premium properties across Pune
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {LOCATION_SITES.map((site, index) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl px-6 py-3 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-gray-900 font-semibold text-sm md:text-base flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {site.location}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="max-w-2xl mx-auto mb-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#lead-form"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-800 px-10 py-4 text-sm tracking-[0.2em] uppercase text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/60 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get Notified
          </Link>
          <a
            href="https://wa.me/918830460132?text=Hi%20Nexovatu%2C%20I%20am%20interested%20in%20your%20premium%20real%20estate%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 px-10 py-4 text-sm tracking-[0.2em] uppercase text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Lead Form Section */}
        <div id="lead-form" className="max-w-2xl mx-auto mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 mb-4">
              Get Notified First
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Be the first to know when we launch. Fill in your details and we'll contact you!
            </p>
          </div>
          <LeadForm />
        </div>

        {/* Location Sites Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mb-4">
              Explore Our Properties
            </h3>
            <p className="text-lg text-gray-600">
              Discover premium real estate solutions across Pune
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATION_SITES.map((site, index) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {site.location}
                    </h4>
                  </div>
                  {site.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {site.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Properties</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
