// Central place for brand name/copy and image asset paths. Swapping the
// logo/hero images or renaming the app again should only mean editing here.
export const SITE = {
  name: 'TakeTok',
  shortName: 'TakeTok',
  domain: 'bbft.live',
  tagline: 'Download TikTok videos without watermark free.',
  description:
    'Download TikTok videos without watermark! TakeTok is the best app to download videos and music from TikTok without watermark, online, free and without ads.',
}

// Paths are relative to the public/ dir; pass through lib/asset.js's asset()
// helper wherever they're used so they stay correct if a base path is ever
// reintroduced (e.g. a preview deploy under a subpath).
export const IMAGES = {
  logo: '/assets/logo-350.webp',
  heroVertical: '/assets/verti.webp',
}
