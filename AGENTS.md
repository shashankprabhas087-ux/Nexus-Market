# NEXUS Market — Agent Entry Point

You are building **NEXUS Market**, a Flipkart/Amazon-style e-commerce clone (React front end).
Read these files BEFORE writing any code, in this order:

1. `.agent/rules/01-project-overview.md` — what we're building and scope
2. `.agent/rules/02-tech-stack.md` — allowed libraries and folder structure
3. `.agent/rules/03-design-rules.md` — how to follow the Stitch design
4. `.agent/rules/04-coding-standards.md` — code style and quality bar
5. `.agent/rules/05-pages-and-routes.md` — screens, routes, and which Stitch file maps to each
6. `docs/design/DESIGN.md` — the design system (colors, type, spacing, components)
7. `docs/design/screens/<screen>/code.html` + `screen.png` — pixel reference for each page

## Non-negotiables
- Never ask the user to repeat instructions that exist in these files.
- Do not invent colors, fonts, or spacing. Use design tokens only.
- Work one page/feature at a time. After each, run the app and fix errors before moving on.
- If rules conflict, `docs/design/DESIGN.md` prose wins for visual decisions; `.agent/rules/` wins for code decisions.
- If something is genuinely unspecified, pick the simplest option, note it in `docs/DECISIONS.md`, and continue.
