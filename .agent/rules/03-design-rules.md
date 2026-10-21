# Design Rules (Stitch -> React)

Source of truth: `docs/design/DESIGN.md` and `docs/design/screens/*`.

## How to convert a Stitch screen
1. Open `screens/<name>/screen.png` to see the target look.
2. Open `screens/<name>/code.html` for exact Tailwind classes and structure.
3. Split into reusable components (header, card, badge...) — never paste the whole HTML into one page file.
4. Convert `class` -> `className`, self-close tags, move inline scripts into hooks/handlers.
5. Reuse the Tailwind config from the Stitch files; do not duplicate it per page.
6. Compare the result to `screen.png` at 1440px and 390px widths.

## Hard rules
- Colors: use Tailwind token names only. No raw hex in components.
- **Hex conflict to resolve:** the DESIGN.md frontmatter lists primary `#000000` and secondary `#b52603`, but the written spec (and screenshots) use **Slate Navy `#0F172A`** and **Hyper Coral `#FF5A36`**. Use the written spec values and add them to Tailwind as `brand.navy`, `brand.coral`, `brand.amber`, `brand.slate`.
- Hyper Coral is ONLY for purchase actions, timers, stock alerts and promo badges.
- Amber `#F59E0B` is ONLY for rating stars and loyalty/review scores.
- Radius: 4px for cards, inputs and buttons. Pill (9999px) ONLY for status tags (FLASH DEAL, -40%, TRENDING).
- Cards: 1px `#E2E8F0` border; hover -> `#CBD5E1` border + `0 4px 12px -2px rgba(15,23,42,.08)`.
- Prices: Plus Jakarta Sans 800, tabular numerals; strikethrough 13px `#94A3B8`.
- Touch targets >= 44px on mobile. Search bar 44px high, focus border `#0F172A`, no glow ring.
- Product grid: 4-6 columns desktop, 3-4 tablet, strictly 2 on mobile.
- Max container 1440px, outer margin 2rem (1rem mobile).
- Do not add new visual styles, gradients, or shadows that are not in DESIGN.md.
