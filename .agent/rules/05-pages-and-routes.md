# Pages, Routes & Stitch Mapping

| Route | Page | Stitch reference folder |
|---|---|---|
| `/` | Home | `docs/design/screens/marketplace_homepage` |
| `/search?q=&category=` | Catalog / Search results | `docs/design/screens/product_catalog_search` |
| `/product/:id` | Product detail | `docs/design/screens/product_detail_page` |
| `/cart` and `/checkout` | Cart + checkout flow | `docs/design/screens/cart_checkout_flow` |
| `/login`, `/register` | Auth | `docs/design/screens/login_register` |
| `/account/*` | Profile, orders, wishlist, addresses | `docs/design/screens/user_profile_dashboard` |

## Shared across all pages
- Header: logo, delivery location, category-prefixed search with autocomplete flyout, wishlist, track orders, cart count badge.
- Secondary nav bar with categories.
- Footer (dark navy) with 3 link columns + trust strip.

## Build order (follow it)
1. Tailwind tokens + fonts + layout shell (Header/Footer)
2. UI primitives (Button, Badge, Rating, PriceTag, Chip)
3. Mock data + services
4. Home -> Catalog -> Product detail -> Cart/Checkout -> Auth -> Account
5. Responsive pass, accessibility pass, final cleanup
