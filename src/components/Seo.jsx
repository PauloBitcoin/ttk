import { useEffect } from 'react'
import { SITE } from '../config/site'
import { useLocale } from '../hooks/useLocale'
import { LOCALES, HTML_LANG, localizedPath } from '../lib/locale'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    if (selector.includes('property=')) el.setAttribute('property', selector.match(/property="([^"]+)"/)[1])
    if (selector.includes('name=')) el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
    if (selector.includes('rel=')) el.setAttribute('rel', selector.match(/rel="([^"]+)"/)[1])
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setAlternateLink(hreflang, href) {
  let el = document.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Sets per-page title/description/canonical/OG/hreflang tags on route
// change. No react-helmet dependency - the app only has a handful of
// routes and this keeps the bundle small.
export function Seo({ title, description, path = '' }) {
  const { locale } = useLocale()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name
    const desc = description || SITE.description
    const url = `${SITE.url}${localizedPath(locale, path)}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', desc)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:locale"]', 'content', HTML_LANG[locale].replace('-', '_'))
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)

    LOCALES.forEach((code) => {
      setAlternateLink(HTML_LANG[code], `${SITE.url}${localizedPath(code, path)}`)
    })
    setAlternateLink('x-default', `${SITE.url}${localizedPath('pt', path)}`)
  }, [title, description, path, locale])

  return null
}
