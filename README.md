# Lily Aguirre — Portfolio

Personal portfolio built with **React + Vite + TypeScript + TailwindCSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build

## Customization

- **Profile photo**: replace `public/profile.jpg` with your own image (square works best). A generated initials avatar is used as a fallback.
- **Social links**: edit the `href` values in `src/components/Hero.tsx` (GitHub, LinkedIn, email).
- **Nav sections**: extend `NAV_ITEMS` in `src/components/Navbar.tsx` and add matching `<section id="...">` blocks in `App.tsx`.
- **Brand color**: tweak the `brand` palette in `tailwind.config.js`.

## Structure

```
src/
  App.tsx
  main.tsx
  index.css
  components/
    Navbar.tsx
    Hero.tsx
```
