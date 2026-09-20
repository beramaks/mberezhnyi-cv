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

`vite.config.ts` sets `base: '/mberezhnyi-cv/'` for GitHub project Pages. If you use a user site (`username.github.io`), change `base` to `'/'`.

## Deploy (GitHub Pages)

1. Create a GitHub repo named `mberezhnyi-cv` (or update `base` to match).
2. Enable **Settings → Pages → Source: GitHub Actions**.
3. Push `main`. The workflow in `.github/workflows/deploy-pages.yml` builds and deploys `dist`.

URL: `https://<username>.github.io/mberezhnyi-cv/`

## Customize

Edit `src/data/cv.ts` for contact info, experience, and skills. Replace:

- `public/avatar.svg` (or `.jpg` and update `avatarSrc`)
- `public/maksym-berezhnyi-cv.pdf` with your real PDF
