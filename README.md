# Maksym Berezhnyi — Creative Resume

Responsive CV site built from Google Stitch desktop/mobile mocks with Vite, React, TypeScript, and Tailwind CSS.

## Develop

```bash
nvm use 22
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`vite.config.ts` sets `base: '/cv/'` and builds into `dist/cv` so the site is served at **https://mberezhnyi.com/cv/**. The deploy workflow also writes a root redirect from `/` → `/cv/`.

## Deploy (GitHub Pages)

1. Custom domain: `mberezhnyi.com` (DNS A/CNAME → GitHub Pages).
2. Enable **Settings → Pages → Source: GitHub Actions**.
3. Push `main`.

URLs:
- `https://mberezhnyi.com/cv/`
- `https://mberezhnyi.com/` (redirects to `/cv/`)

## Customize

Edit `src/data/cv.ts` for contact info, experience, and skills. Replace:

- `public/avatar.svg` (or `.jpg` and update `avatarSrc`)
- `public/maksym-berezhnyi-cv.pdf` with your real PDF
