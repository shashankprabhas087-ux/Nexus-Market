# Coding Standards

- Functional components + hooks only.
- Small components (< 150 lines). Extract when a section repeats twice.
- Props destructured, with PropTypes (or TS types).
- No inline styles; use Tailwind classes. Use `clsx` only if already installed.
- Accessibility: semantic tags, labels on inputs, `aria-label` on icon buttons, visible focus state, keyboard-operable menus and modals.
- Performance: lazy-load route pages with `React.lazy`, `loading="lazy"` on below-the-fold images, debounce search (300ms).
- Forms: validate on blur + submit; show inline error text in `error` token color.
- Error/empty/loading states are required for every list and page (skeletons, "No results", retry).
- Money: store prices as numbers; format with `formatPrice()` (INR by default, switchable).
- Never leave `console.log`, dead code, or TODOs without a matching entry in `docs/DECISIONS.md`.
- After each feature: run `npm run dev`, confirm no console errors, then run `npm run build`.
