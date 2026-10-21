---
name: Kinetic Retail
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#b52603'
  on-secondary: '#ffffff'
  secondary-container: '#fd5835'
  on-secondary-container: '#570c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0600'
  on-secondary-fixed-variant: '#8c1900'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  price-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.02em
  price-card:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '800'
    lineHeight: 22px
    letterSpacing: -0.015em
  price-strikethrough:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.5rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system is tailored for an ultra-fast, high-density mega marketplace merging the tactical transactional speed of modern Amazon with the sharp, editorial punch of ASOS. It balances utility, conversion immediacy, and visual polish without succumbing to visual clutter.

### Audience & Mood
The target audience spans omnivorous digital shoppers seeking instant product discovery, rapid checkout validation, and crystal-clear merchandising hierarchies. The interface evokes efficiency, decisive momentum, and trust. 

### Visual Archetype: Precision Utility & High-Contrast Commercial
The aesthetic fuses crisp modernist typography with structured border-driven compartmentalization. We reject heavy, muddy skeuomorphism in favor of high-contrast micro-delimiters, compact spacing grids, tactile interactive surfaces, and razor-sharp typographic contrasts. Surfaces remain clean white and neutral slate, allowing rich merchant imagery, high-visibility badges, and urgent conversion-focused accents to take command.

## Colors

The palette establishes an unmistakable conversion hierarchy designed for high scanability across dense product feeds.

### Roles and Application
- **Primary (`#0F172A` - Slate Navy):** The structural anchor. Governs primary navigation shells, dense product titles, primary text copy, high-priority icons, and structural divider states.
- **Secondary (`#FF5A36` - Hyper Coral):** The transactional accelerator. Reserved exclusively for direct purchase actions ("Buy Now", "Add to Bag"), countdown timers, limited stock alerts, and promotional badge highlights.
- **Tertiary (`#F59E0B` - Amber Flare):** Applied to rating star clusters, review score aggregates, loyalty tier indicators, and secondary flash-sale banners.
- **Neutral (`#64748B` - Slate Neutral):** Provides balance for secondary metadata, product SKUs, breadcrumbs, specifications labels, and inactive control boundaries.
- **Surface & Stroke Palette:**
  - Base Background: `#F8FAFC`
  - Container / Card Surface: `#FFFFFF`
  - Border Subdued: `#E2E8F0`
  - Border Distinct: `#CBD5E1`
  - Price Strike-through & Inactive Text: `#94A3B8`
  - Positive / Stock In: `#10B981`

## Typography

Typography prioritizes density, rapid eye tracking, and financial legibility. 

- **Display & Section Headers:** Set in `Plus Jakarta Sans` with tight tracking and stout geometric weights (`700` and `800`) to provide high-fashion, high-retail impact.
- **Product Text & Dense UI:** Set in `Inter` across `12px` to `16px`. Tabular numerals are enforced across all pricing, inventory stock counters, and SKU tracking blocks to preserve vertical columnar alignment.
- **Price Displays:** Live prices employ extra-bold weights (`800`) in primary slate navy or secondary hyper coral for promotional states. Historical and MSRP strike-through prices sit adjacent at `13px` regular with a `#94A3B8` strikethrough bar.

## Layout & Spacing

A disciplined, fluid 12-column grid anchors the layout on desktop screens, scaling downward into dense responsive matrices:

- **Desktop (>= 1280px):** 12-column fluid grid, max container width of `1440px`, `1rem` column gutters, and `2rem` outer page margins. Product listing grids display 4 to 6 items per row for maximum SKU density.
- **Tablet (768px - 1279px):** 8-column layout, `1rem` gutters, `1.5rem` outer margins. Product grids collapse cleanly to 3 or 4 columns.
- **Mobile (< 768px):** 4-column layout, compact `0.5rem` gutters, and `1rem` outer horizontal margins. Product feeds run strictly in 2-column compact tiles with aspect ratios optimized to keep titles and prices above the thumb-scroll fold.

Internal component gaps follow an intentional sub-scale (`4px`, `8px`, `12px`, `20px`, `32px`) preserving information density without causing interactive targets to drop below 44px on touch viewports.

## Elevation & Depth

To maintain high visual scanning speeds and avoid heavy shadow muddying across dozens of adjacent product tiles, elevation relies on clean low-contrast outlines layered with crisp, micro-depth ambient shadows:

- **Level 0 (Flat Ground):** `#F8FAFC` base application background. Flat, zero elevation.
- **Level 1 (Product Cards & List Panels):** Surface `#FFFFFF` enclosed by a continuous `1px` solid border in `#E2E8F0`. Hovering lifts the tile with a zero-delay transition: border transitions to `#CBD5E1` with a micro ambient shadow `0 4px 12px -2px rgba(15, 23, 42, 0.08)`.
- **Level 2 (Dropdowns, Autocomplete & Quick Bins):** Surface `#FFFFFF`, border `#CBD5E1`, shadow `0 10px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.
- **Level 3 (Sticky Merchandising Bars & Modals):** Surface `#FFFFFF`, framed with subtle `#CBD5E1` strokes and high-intensity structural shadow `0 20px 30px -10px rgba(15, 23, 42, 0.2)`. Modals deploy a backdrop filter blur `backdrop-blur-sm` over a `#0F172A` scrim at 40% opacity.

## Shapes

The design system adopts a crisp, modern `Soft (1)` corner geometry (`4px` base radius). 

- **Cards, Input Shells & Product Tiles:** Set to `4px` (`0.25rem`). This provides structural rigor, allows high image bleed efficiency, and prevents wasted pixel space in multi-column listing grids.
- **Buttons & Filter Badges:** Set to `4px` for structural consistency.
- **Pill Exceptions:** Pure pill shapes (`9999px`) are strictly reserved for compact status tags ("FLASH DEAL", "-40%", "PRIME ELIGIBLE", "TRENDING") to immediately differentiate non-clickable indicators from active rectangular button controls.

## Components

### Buttons
- **Primary CTA ("Add to Bag" / "Proceed to Checkout"):** Solid `#FF5A36`, label in pure white `#FFFFFF` (`label-md`), full height `44px` desktop / `48px` mobile. Hover: `#E04826`. Active: `#C93A1B`.
- **Secondary Action ("Buy Now" Instant):** Solid `#0F172A`, white text, high visual tension. Hover: `#1E293B`.
- **Tertiary / Outline ("Save for Later" / Filter Clear):** Border `1px` solid `#CBD5E1`, background `#FFFFFF`, text `#0F172A`. Hover: background `#F1F5F9`.

### Product Cards
- Contained within a `1px` `#E2E8F0` border.
- Image area: 1:1 or 3:4 aspect ratio with top corners flush (`4px`). Includes an absolute top-left pill badge stack (`margin: 8px`) and top-right wishlist heart toggle button.
- Metadata block: Compact vertical gap of `4px` containing brand subtitle in `#64748B`, title truncated to 2 lines in `#0F172A`, star rating cluster with numeric review count in parentheses, and the price grouping.

### Price Displays & Strike-Throughs
- Sale price displayed prominently in `price-card` weight (`Plus Jakarta Sans 800`) in `#FF5A36` or `#0F172A`.
- Strike-through list price sits inline or stacked in `13px` `#94A3B8` with an active strikethrough line (`text-decoration: line-through`).
- Percentage discount badge sits immediately adjacent: `#FF5A36` background, `#FFFFFF` text, `11px` bold uppercase, `2px 6px` padding, `9999px` radius.

### Rating Stars
- Star icons rendered at `14px` height with a fixed `2px` spacing gap.
- Active fill: `#F59E0B`. Empty outline / track: `#E2E8F0`.
- Fractional ratings rendered via CSS clipping masks. Aggregate review volume displays in `#64748B` (`Inter 12px`) immediately following the cluster.

### Search Bar & Autocomplete Panel
- Height: `44px`. Border: `1.5px` solid `#CBD5E1`, transitioning to `#0F172A` on focus with no glowing ring.
- Category prefix dropdown nested directly inside the left border.
- Autocomplete Flyout: Detached surface anchored `4px` beneath input. Two-column layout: Left column covers query matching strings with bolded matching prefixes; Right column renders live miniature product cards (32x32px thumbnails, real-time prices, stock status) for zero-click instant conversion.

### Badges & Chips
- **Merchandising Badges:** Flat solid background with high contrast (`#FF5A36` for flash promotions, `#0F172A` for market exclusives, `#10B981` for in-stock guarantees). Font size `11px` all-caps.
- **Filter Chips:** Height `32px`, border `1px` solid `#E2E8F0`, background `#FFFFFF`, text `#0F172A`. Selected state: `#0F172A` background with white text and an embedded close (`×`) icon.

### Form Inputs, Checkboxes & Radios
- **Inputs:** `1px` `#CBD5E1` border, `8px 12px` inner padding, placeholder in `#94A3B8`.
- **Checkboxes:** `18x18px` square with `3px` radius. Checked state fills `#0F172A` with a crisp white checkmark icon.
- **Radio Buttons:** `18x18px` circle with a solid `#0F172A` concentric dot when selected.