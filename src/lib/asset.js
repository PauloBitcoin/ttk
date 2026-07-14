// Prefixes a public/ asset path with Vite's configured base (e.g. '/ttk/'),
// so hardcoded references work whether the app is served from a domain root
// or a GitHub Pages subpath.
export function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
