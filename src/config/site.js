// Central place for brand name/copy and image asset paths. Swapping the
// logo/hero images or renaming the app again should only mean editing here.
export const SITE = {
  name: 'TakeTok',
  shortName: 'TakeTok',
  domain: 'bbft.live',
  url: 'https://bbft.live',
  tagline: "Baixar vídeo do TikTok sem marca d'água, grátis",
  description:
    "Baixar vídeo do TikTok sem marca d'água em HD, grátis e sem cadastro. Cole o link e baixe vídeos, fotos e músicas do TikTok em segundos com o TakeTok.",
}

// Paths are relative to the public/ dir; pass through lib/asset.js's asset()
// helper wherever they're used so they stay correct if a base path is ever
// reintroduced (e.g. a preview deploy under a subpath).
export const IMAGES = {
  logo: '/assets/logo-350.webp',
  heroVertical: '/assets/verti.webp',
}
