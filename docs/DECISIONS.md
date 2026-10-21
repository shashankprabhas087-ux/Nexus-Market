# Decisions Log
(Agent: append one line per assumption or deviation, with date.)

- 2026-10-21: Workspace initialized with React 18 (18.3.1), Vite (5.4.x), React Router v6 (6.28.0), and Tailwind CSS v3 (3.4.14) strictly conforming to `02-tech-stack.md` with no extraneous libraries.
- 2026-10-21: Color token conflict resolved in favor of DESIGN.md written spec and `03-design-rules.md` (Navy `#0F172A`, Coral `#FF5A36`, Amber `#F59E0B`, Slate `#64748B`), added as `brand.*` and overriding semantic primary/secondary.
- 2026-10-21: Typography, spacing, border radii (4px base, 9999px pills), and elevation shadows mapped directly from DESIGN.md into `tailwind.config.js`.
- 2026-10-21: Layout shell structured with `Header` (with `SearchBar`), `NavBar`, and `Footer` (composed with modular `TrustStrip` to adhere to <150 line coding standard).
- 2026-10-21: Routes from `05-pages-and-routes.md` established using `React.lazy` code-splitting and `Suspense` with brand loading state under a unified `PageShell`.
- 2026-10-21: Added responsive mobile search bar toggling in Header for viewport accessibility (<768px).
- 2026-10-21: Implemented `CartContext` and `WishlistContext` with localStorage persistence and default mockup state (Cart 3 items, Wishlist indicator) wired to Header and interactive CTAs.
- 2026-10-21: Built Homepage matching `docs/design/screens/marketplace_homepage/` with HeroBanner, CategoryTiles, LightningDeals (with stock claim progress and live countdown), and BentoCuration (editorial streetwear lookbook with quick-shop tags + Amazon-style recommended items + Nexus Prime promo).
- 2026-10-21: Built Catalog / Search page matching `docs/design/screens/product_catalog_search/` with faceted sidebar filters (Prime, review rating, price slider, brand search, features, color swatches), active filter chips with individual remove & clear all, grid/list view density switcher, sorting, pagination, and recently viewed recommendations.
- 2026-10-21: Built Product Detail Page matching `docs/design/screens/product_detail_page/` with zoomable gallery, interactive color/style variant selector, sticky buy box, frequently bought together bundle deal, technical specifications table, and verified customer review breakdown.
- 2026-10-21: Built Cart and multi-step Checkout flow matching `docs/design/screens/cart_checkout_flow/` with live quantity adjustments, saved-for-later management, free shipping progress bar, promo vouchers, address & payment forms, and automated order confirmation creation stored in account history.
- 2026-10-21: Built Auth flow (Login & Register) matching `docs/design/screens/login_register/` with segmented controls, demo credentials, biometric passkey hooks, and Nexus Prime perks showcase.
- 2026-10-21: Built User Dashboard matching `docs/design/screens/user_profile_dashboard/` with account sidebar, active shipment tracker, order history with reordering, interactive wishlist management, saved addresses editor, and profile credential updating.
