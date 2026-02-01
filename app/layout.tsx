import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexovatu - Coming Soon | Premium Real Estate Platform | Pune Properties',
  description: 'Nexovatu is coming soon. Your trusted partner for premium real estate solutions across Pune. Explore our location-wise sites for Baner, Punawale, Ravet, Tathawade, and Wakad. Get notified first and be part of the premium property revolution.',
  keywords: [
    'nexovatu',
    'nexovastu',
    'real estate pune',
    'pune properties',
    'premium real estate',
    'baner properties',
    'punawale properties',
    'ravet properties',
    'tathawade properties',
    'wakad properties',
    'pune real estate',
    'property investment pune',
    'luxury homes pune',
    'apartments pune',
    'residential properties pune',
    'commercial properties pune',
    'PSD real estate',
    'buy property pune',
    'real estate coming soon',
    'property solutions pune',
    'maharashtra real estate',
  ].join(', '),
  authors: [{ name: 'Nexovatu by PSD' }],
  creator: 'Nexovatu',
  publisher: 'Nexovatu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexovatu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexovatu - Coming Soon | Premium Real Estate Platform',
    description: 'Your trusted partner for premium real estate solutions across Pune. Explore properties in Baner, Punawale, Ravet, Tathawade, and Wakad.',
    url: 'https://nexovatu.com',
    siteName: 'Nexovatu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexovatu - Premium Real Estate Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexovatu - Coming Soon | Premium Real Estate Platform',
    description: 'Your trusted partner for premium real estate solutions across Pune.',
    images: ['/og-image.jpg'],
    creator: '@nexovastu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'Real Estate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Nexovatu',
              alternateName: 'Nexovastu',
              description: 'Premium real estate platform providing property solutions across Pune',
              url: 'https://nexovatu.com',
              logo: 'https://nexovatu.com/logo.png',
              image: 'https://nexovatu.com/og-image.jpg',
              telephone: '+91-8830460132',
              email: 'info@nexovatu.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Baner',
                },
                {
                  '@type': 'City',
                  name: 'Punawale',
                },
                {
                  '@type': 'City',
                  name: 'Ravet',
                },
                {
                  '@type': 'City',
                  name: 'Tathawade',
                },
                {
                  '@type': 'City',
                  name: 'Wakad',
                },
              ],
              sameAs: [
                'https://www.facebook.com/nexovastu',
                'https://www.instagram.com/nexovastu',
                'https://www.linkedin.com/company/nexovastu',
                'https://wa.me/918830460132',
              ],
            }),
          }}
        />
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Nexovatu',
              url: 'https://nexovatu.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://nexovatu.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Nexovatu',
              image: 'https://nexovatu.com/og-image.jpg',
              '@id': 'https://nexovatu.com',
              url: 'https://nexovatu.com',
              telephone: '+91-8830460132',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                postalCode: '411000',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 18.5204,
                longitude: 73.8567,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
