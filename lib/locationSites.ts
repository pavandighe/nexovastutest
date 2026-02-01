/**
 * Location-wise website links for nexovatu
 * These are the location sites that mention "nexovastu"
 */

export type LocationSite = {
  name: string
  url: string
  location: string
  description?: string
}

export const LOCATION_SITES: LocationSite[] = [
  {
    name: 'Baner Real Estate',
    url: 'https://banerproperty.com',
    location: 'Baner',
    description: 'Premium properties in Baner, Pune',
  },
  {
    name: 'Punawale Properties',
    url: 'https://punawaleproperty.com',
    location: 'Punawale',
    description: 'Real estate solutions in Punawale',
  },
  {
    name: 'Ravet Properties',
    url: 'https://ravetproperty.com',
    location: 'Ravet',
    description: 'Properties in Ravet, Pune',
  },
  {
    name: 'Tathawade Properties',
    url: 'https://tathawadeproperty.com',
    location: 'Tathawade',
    description: 'Real estate in Tathawade',
  },
  {
    name: 'Wakad Properties',
    url: 'https://wakadproperty.com',
    location: 'Wakad',
    description: 'Properties in Wakad, Pune',
  },
]
