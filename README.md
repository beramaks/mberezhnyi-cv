# Maksym Berezhnyi — Creative Resume

Responsive CV site (Vite + React + TypeScript + Tailwind) at **https://mberezhnyi.com/cv/**.

## Develop

```bash
nvm use 24
npm install
npm run dev
```

Local preview uses Vite’s `base` (`/cv/`), so open the `/cv/` path the terminal prints.

## Build

```bash
npm run build
npm run preview
```

`vite.config.ts` sets `base: '/cv/'` and builds into `dist/cv`. The GitHub Actions workflow also writes a root redirect from `/` → `/cv/`.

## Deploy (GitHub Pages)

1. Custom domain: `mberezhnyi.com` (Cloudflare DNS A + `www` CNAME → GitHub Pages, DNS only).
2. **Settings → Pages → Source: GitHub Actions**.
3. Push `main`.

URLs:
- `https://mberezhnyi.com/cv/`
- `https://mberezhnyi.com/` (redirects to `/cv/`)

## Customize

Edit `src/data/cv.ts` for contact info, experience, skills, and projects.

Assets in `public/`:

- `avatar.jpg` — profile photo (+ Open Graph image)
- `Maksym_Berezhnyi_CV.pdf` — Download CV
- Favicons: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-512x512.png`, `apple-touch-icon.png`
