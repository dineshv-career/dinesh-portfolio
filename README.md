# Dinesh V — Portfolio (Next.js)

Converted from the original static `index.html` into a Next.js 14 (App Router) project.

## What changed vs. the original HTML

- **Structure**: markup split into `app/page.js` (all sections) and `app/layout.js` (root shell, `<head>`, metadata).
- **Fonts**: Google Fonts (Space Grotesk, Inter, JetBrains Mono) now load via `next/font/google` instead of a `<link>` tag — self-hosted automatically by Next.js, no layout shift.
- **Styles**: the original `<style>` block is now `app/globals.css`, unchanged except font-family values point at the CSS variables `next/font` generates.
- **Theme toggle** (`light` / `system` / `dark`, persisted to `localStorage`): moved into `components/ThemeToggle.jsx`, a client component. The "no flash of wrong theme" inline script still runs from `app/layout.js` before paint, same as before.
- **Scroll-reveal animation**: moved into `components/ScrollReveal.jsx`, a client component using the same `IntersectionObserver` logic.
- Everything else — copy, layout, section order, contact links — is a 1:1 port.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js       # fonts, metadata, theme-init script
  page.js          # all page sections (nav, hero, about, skills, work, experience, education, contact)
  globals.css      # ported styles
components/
  ThemeToggle.jsx  # light/system/dark toggle (client component)
  ScrollReveal.jsx # IntersectionObserver reveal-on-scroll (client component)
```

## Notes

- The `LinkedIn ↗` link in the footer still points at `#` — the original HTML never wired it to an actual URL. Update `href="#"` in `app/page.js` (footer section) once you have the link.
- Deploys as-is on [Vercel](https://vercel.com) — just import the repo.
