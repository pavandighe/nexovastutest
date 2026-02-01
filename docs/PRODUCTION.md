# Production Checklist

## What You Have for Production

- **Build**: `npm run build` — creates optimized production build
- **Start**: `npm run start` — runs the production server
- **SEO**: Meta title, description, keywords, Open Graph, Twitter cards, structured data (JSON-LD)
- **Lead collection**: Saves to `data/leads.json` and optionally to Google Sheet via webhook

## Environment Variables for Production

Set these in your hosting provider (Vercel, Netlify, etc.):

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_SHEET_WEBHOOK_URL` | No | Your Google Apps Script Web App URL so leads are sent to your sheet. If not set, leads are only saved locally. |

**Vercel:** Project → Settings → Environment Variables  
**Netlify:** Site → Build & deploy → Environment

## Keywords (Already in `app/layout.tsx`)

Current SEO keywords:

- nexovatu, nexovastu  
- real estate pune, pune properties, premium real estate  
- baner properties, punawale properties, ravet properties, tathawade properties, wakad properties  
- pune real estate, property investment pune  
- luxury homes pune, apartments pune  
- residential properties pune, commercial properties pune  
- PSD real estate  
- buy property pune, real estate coming soon, property solutions pune, maharashtra real estate  

No need to add more unless you want location-specific or campaign keywords.

## Before Going Live

1. **Set `GOOGLE_SHEET_WEBHOOK_URL`** in production env if you want leads in Google Sheet.
2. **Domain**: Ensure your custom domain (e.g. nexovatu.com) is set in the host and in `metadataBase` in `app/layout.tsx` if needed.
3. **OG image**: Add `public/og-image.jpg` (1200×630) for social sharing.
4. **Verification** (optional): In `app/layout.tsx` → `metadata.verification`, add your Google Search Console / Bing verification code when you have it.

## Deploy (e.g. Vercel)

```bash
npm run build
```

Then connect the repo to Vercel (or your host); use `npm run build` as build command and `npm run start` as start command (or the host’s default for Next.js).
