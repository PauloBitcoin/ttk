import { useEffect } from 'react'
import { SITE } from '../config/site'

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

// Sets per-page title/description/canonical/OG tags on route change. No
// react-helmet dependency - the app only has a handful of routes and this
// keeps the bundle small.
export function Seo({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name
    const desc = description || SITE.description
    const url = `${SITE.url}${path}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', desc)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)
  }, [title, description, path])

  return null
}
