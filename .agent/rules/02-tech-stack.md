# Tech Stack & Structure

## Stack (do not add other libraries without asking)
- React 18 + Vite (JavaScript, or TypeScript if the project already uses it — follow the project)
- Tailwind CSS (tokens defined in `tailwind.config.js` from DESIGN.md)
- React Router v6
- State: React Context + `useReducer` for cart/auth/wishlist (no Redux)
- Icons: Material Symbols Outlined (same as Stitch) via Google Fonts link in `index.html`
- Fonts: Inter (body/UI) and Plus Jakarta Sans (display, prices, headings)

## Folder structure
```
src/
  components/
    ui/          # Button, Badge, Chip, Input, Rating, PriceTag, Modal
    layout/      # Header, Footer, NavBar, SearchBar, PageShell
    product/     # ProductCard, ProductGrid, Gallery, VariantPicker
    cart/        # CartItem, OrderSummary, CheckoutSteps
  pages/         # Home, Catalog, ProductDetail, Cart, Checkout, Login, Account
  context/       # CartContext, AuthContext, WishlistContext
  data/          # products.js, categories.js, deals.js
  services/      # productService.js, authService.js (wrap mock data, async)
  hooks/         # useCountdown, useDebounce, useLocalStorage
  utils/         # formatPrice, calcDiscount
  styles/        # index.css (Tailwind layers, font setup)
```

## Conventions
- One component per file, PascalCase filename, default export.
- Pages compose components; pages contain no hard-coded product data.
- Images: use real URLs already present in the Stitch `code.html` files, or neutral placeholders. Always set `alt` and width/height.
