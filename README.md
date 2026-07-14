# DinoTok Downloader

TikTok video/music downloader — Vite + React + Tailwind CSS v4. Deployed at
[bbft.live](https://bbft.live) via GitHub Pages.

## Development

```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Structure

- `src/pages/` — route-level pages (Home, Download, FAQ, Privacy Policy, Terms of Service, Contact)
- `src/components/` — shared UI (Navbar, MenuModal, Toast, ShareFabs, InstallPrompt)
- `src/hooks/` — `useTikTokDownload`, `useDarkMode`, `useInstallPrompt`
- `src/content/` — long-form legal text for the Privacy Policy / Terms of Service pages
- `src/config/site.js` — central brand name/copy and image asset paths
- `public/` — static assets served as-is (favicons, manifest, service worker, `CNAME`)

`legacy-static/` is the previous plain HTML/CSS/jQuery site, kept for reference during
the migration. It is not built or deployed; it can be deleted once the React app has
been running in production without issues.
