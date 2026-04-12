# Tiffany Ho — Personal Portfolio

Personal portfolio website built with React, TypeScript, and Vite. Features a two-panel split layout with animated tab navigation powered by Framer Motion.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build tool
- **Framer Motion** — tab slide animations and sliding indicator
- **Plain CSS** — no UI libraries or Tailwind

## Project Structure

```
src/
  data/
    projects.ts       ← add/edit projects here
    experience.ts     ← add/edit experience here
  components/
    LeftPanel.tsx     ← name, philosophy, tagline
    StatusBar.tsx     ← availability dot + social icons
    RightPanel.tsx    ← tab bar + animated tab switching
    tabs/
      Home.tsx        ← About me content
      Experience.tsx  ← reads from data/experience.ts
      Projects.tsx    ← reads from data/projects.ts
      Gallery.tsx     ← gallery grid
  styles/
    tokens.css        ← all colors, fonts, spacing (edit here first)
    components.css    ← reusable classes (.card, .tag, .section-head etc.)
  App.tsx             ← root layout
  index.css           ← global reset + component styles
```

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## How to Edit Content

**Add a project** — open `src/data/projects.ts` and add an object to the array:
```ts
{
  name: 'Your Project',
  description: 'What it is and what you did.',
  tags: ['Tag1', 'Tag2'],
}
```

**Add an experience entry** — open `src/data/experience.ts` and add an object:
```ts
{
  date: '2025',
  role: 'Your Role',
  company: 'Company Name · Co-op',
  description: 'What you did there.',
}
```

**Change colors** — open `src/styles/tokens.css` and update any variable under `:root`. Changes apply everywhere automatically.

**Edit About me text** — open `src/components/tabs/Home.tsx`.

**Update social links** — open `src/components/StatusBar.tsx` and replace the `href` values.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).
