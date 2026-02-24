import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Nexovastu | Premium Real Estate in Baner, Punawale, Ravet, Tathawade & Wakad – Pune",
  description: "Nexovastu by PSD is Pune's trusted real estate partner. Find premium properties in Baner, Punawale, Ravet, Tathawade and Wakad. Browse listings, get expert guidance and find your dream home today.",
  keywords: [
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
    'property solutions pune',
    'maharashtra real estate',
  ].join(', '),
  authors: [{ name: 'Nexovastu by PSD' }],
  creator: 'Nexovastu',
  publisher: 'Nexovastu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexovastu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexovastu | Premium Real Estate in Pune',
    description: "Find premium properties in Baner, Punawale, Ravet, Tathawade and Wakad. Pune's trusted real estate partner.",
    url: 'https://nexovastu.com',
    siteName: 'Nexovastu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexovastu - Premium Real Estate Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexovastu | Premium Real Estate in Pune',
    description: "Find premium properties in Baner, Punawale, Ravet, Tathawade and Wakad. Pune's trusted real estate partner.",
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
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Nexovastu | Premium Real Estate in Pune" />
        <meta property="og:description" content="Find premium properties in Baner, Punawale, Ravet, Tathawade and Wakad. Pune's trusted real estate partner." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexovastu.com" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Nexovastu',
              alternateName: 'Nexovastu',
              description: 'Premium real estate platform providing property solutions across Pune',
              url: 'https://nexovastu.com',
              logo: 'https://nexovastu.com/logo.png',
              image: 'https://nexovastu.com/og-image.jpg',
              telephone: '+91-8830460132',
              email: 'info@nexovastu.com',
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
              name: 'Nexovastu',
              url: 'https://nexovastu.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://nexovastu.com/search?q={search_term_string}',
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
              name: 'Nexovastu',
              image: 'https://nexovastu.com/og-image.jpg',
              '@id': 'https://nexovastu.com',
              url: 'https://nexovastu.com',
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


