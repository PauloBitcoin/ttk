# TokTokDJ Downloader

TikTok video/music downloader - Vite + React + Tailwind CSS v4. Deployed at
[bbft.live](https://bbft.live).

## Development

```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Structure

- `src/pages/` - route-level pages (Home, FAQ, Privacy Policy, Terms of Service, Contact). The
  download flow itself isn't a route - it's a modal driven by a `?url=` search param on Home.
- `src/components/` - shared UI (Navbar, Sidebar, Footer, DownloadModal, VideoPlayer,
  ImageCarousel, Toast, ShareFabs, InstallPrompt, AdSlot)
- `src/hooks/` - `useTikTokDownload`, `useTheme`, `useDialogA11y`, `useInstallPrompt`
- `src/lib/` - `recentDownloads` (localStorage-backed "last 10 downloads" list), `asset`
- `src/content/` - long-form legal text for the Privacy Policy / Terms of Service pages
- `src/config/site.js` - central brand name/copy and image asset paths
- `public/` - static assets served as-is (favicons, manifest, service worker, `CNAME`)
