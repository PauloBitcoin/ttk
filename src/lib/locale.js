export const LOCALES = ['pt', 'en', 'es']
export const DEFAULT_LOCALE = 'pt'

export const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' }

// pt lives unprefixed at the domain root (it's the site's original,
// already-indexed language) - only en/es get a path prefix.
export function getLocaleFromPath(pathname) {
  const segment = pathname.split('/')[1]
  return LOCALES.includes(segment) ? segment : DEFAULT_LOCALE
}

// /en/faq -> /faq, /faq -> /faq
export function stripLocalePrefix(pathname) {
  const segment = pathname.split('/')[1]
  if (LOCALES.includes(segment) && segment !== DEFAULT_LOCALE) {
    return pathname.slice(segment.length + 1) || '/'
  }
  return pathname
}

// localizedPath('en', '/faq') -> '/en/faq', localizedPath('pt', '/faq') -> '/faq'
export function localizedPath(locale, path) {
  const clean = path === '/' ? '' : path
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`
}
