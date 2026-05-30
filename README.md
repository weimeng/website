# Wei Meng's website

Personal site built with [Astro](https://astro.build/). Content is written in AsciiDoc under `src/documents/`.

## Development (WSL)

Requires Node.js 22+.

```bash
cd /home/weimeng/dev/website
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Content

- AsciiDoc sources: `src/documents/`
- Navigation: `src/data/navigation.yaml`
- Production URL: https://weimeng.co

The Windows Gatsby tree at `C:\Users\weimeng\Dev\website` is reference-only for porting content and styles.

## Deploy

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`. Custom domain is configured with `public/CNAME`.
