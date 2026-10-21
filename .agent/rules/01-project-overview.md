# Project Overview

**Name:** NEXUS Market
**Type:** Front-end e-commerce clone (Flipkart / Amazon style) with mock data. No real payments.
**Goal:** Fully navigable shopping flow: browse -> search/filter -> product detail -> cart -> checkout -> account.

## In scope
- Homepage with hero, category tiles, lightning-deals carousel with countdown, curated sections
- Product listing/search with filters, sort, pagination or infinite scroll
- Product detail page: gallery, variants, price/discount, ratings, add to bag, buy now
- Cart and multi-step checkout (address -> delivery -> payment UI -> review -> success)
- Login / register (client-side validation, mock auth)
- User dashboard: profile, orders, wishlist, addresses
- Responsive: desktop (>=1280), tablet (768-1279), mobile (<768)

## Out of scope (unless the user asks)
- Real backend, real payments, admin panel, seller portal
- Server-side rendering

## Data
- All data comes from `src/data/*.js` mock files and a service layer in `src/services/` so a real API can replace it later.
- Persist cart, wishlist, and auth session in `localStorage`.
