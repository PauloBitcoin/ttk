// Generates a static index.html per locale+route inside dist/, with correct
// <title>/description/canonical/og/twitter/hreflang/lang baked into the raw
// HTML. Without this, GitHub Pages serves the same pt-BR markup for every
// URL (the SPA only fixes the tags client-side, after JS runs - see
// src/components/Seo.jsx) which breaks link previews and crawlers that
// don't execute JS. The JS bundle/CSS are untouched, so the SPA still boots
// and takes over routing normally once loaded.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SITE } from '../src/config/site.js'
import { LOCALES, HTML_LANG, localizedPath } from '../src/lib/locale.js'
import pt from '../src/i18n/locales/pt.js'
import en from '../src/i18n/locales/en.js'
import es from '../src/i18n/locales/es.js'
import id from '../src/i18n/locales/id.js'
import { PRIVACY_POLICY_BY_LOCALE } from '../src/content/privacyPolicyContent.js'
import { TERMS_OF_SERVICE_BY_LOCALE } from '../src/content/termsOfServiceContent.js'

const STRINGS = { pt, en, es, id }

const interpolate = (str, vars) => str.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? '')

// Mirrors the { title, description } passed to <Seo> by each page component.
const ROUTES = [
  {
    path: '/',
    seo: (t) => ({
      title: t.home.seoTitle,
      description: interpolate(t.home.seoDescription, { name: SITE.name }),
    }),
  },
  {
    path: '/faq',
    seo: (t) => ({
      title: t.faq.seoTitle,
      description: interpolate(t.faq.seoDescription, { name: SITE.name }),
    }),
  },
  {
    path: '/contact',
    seo: (t) => ({
      title: t.contact.title,
      description: interpolate(t.contact.seoDescription, { name: SITE.name }),
    }),
  },
  {
    path: '/privacy-policy',
    seo: (_t, locale) => ({
      title: PRIVACY_POLICY_BY_LOCALE[locale].title,
      description: SITE.description,
    }),
  },
  {
    path: '/terms-of-service',
    seo: (_t, locale) => ({
      title: TERMS_OF_SERVICE_BY_LOCALE[locale].title,
      description: SITE.description,
    }),
  },
]

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// `replacer` receives the same (match, ...groups) arguments String#replace
// would give a function replacer - it must return the literal output text.
// Going through a function (rather than a "$1"-style template string) means
// a literal "$" inside translated content can never be misread as a
// $&/$1-style backreference.
function replaceOrThrow(html, pattern, replacer) {
  if (!pattern.test(html)) throw new Error(`prerender: pattern not found - ${pattern}`)
  return html.replace(pattern, replacer)
}

function buildHtml(baseHtml, { locale, path }) {
  const t = STRINGS[locale]
  const route = ROUTES.find((r) => r.path === path)
  const { title, description } = route.seo(t, locale)
  const fullTitle = `${title} | ${SITE.name}`
  const canonicalUrl = `${SITE.url}${localizedPath(locale, path)}`
  const htmlLang = HTML_LANG[locale]
  const ogLocale = htmlLang.replace('-', '_')
  const safeTitle = escapeHtml(fullTitle)
  const safeDescription = escapeHtml(description)
  const jsonDescription = description.replace(/\\/g, '\\\\').replace(/"/g, '\\"')

  let html = baseHtml
  html = replaceOrThrow(html, /<html lang="[^"]*">/, () => `<html lang="${htmlLang}">`)
  html = replaceOrThrow(html, /<title>[^<]*<\/title>/, () => `<title>${safeTitle}</title>`)
  html = replaceOrThrow(
    html,
    /(<meta name="description"\s+content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${safeDescription}${p2}`,
  )
  html = replaceOrThrow(html, /(<link rel="canonical" href=")[^"]*(")/, (_m, p1, p2) => `${p1}${canonicalUrl}${p2}`)
  html = replaceOrThrow(
    html,
    /(<meta property="og:title" content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${safeTitle}${p2}`,
  )
  html = replaceOrThrow(
    html,
    /(<meta property="og:description"\s+content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${safeDescription}${p2}`,
  )
  html = replaceOrThrow(
    html,
    /(<meta property="og:url" content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${canonicalUrl}${p2}`,
  )
  html = replaceOrThrow(
    html,
    /(<meta property="og:locale" content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${ogLocale}${p2}`,
  )
  html = replaceOrThrow(
    html,
    /(<meta name="twitter:title" content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${safeTitle}${p2}`,
  )
  html = replaceOrThrow(
    html,
    /(<meta name="twitter:description"\s+content=")[^"]*(")/,
    (_m, p1, p2) => `${p1}${safeDescription}${p2}`,
  )
  html = replaceOrThrow(html, /("url":\s*")[^"]*(")/, (_m, p1, p2) => `${p1}${canonicalUrl}${p2}`)
  html = replaceOrThrow(
    html,
    /("description":\s*")[^"]*(")/,
    (_m, p1, p2) => `${p1}${jsonDescription}${p2}`,
  )
  html = replaceOrThrow(html, /("inLanguage":\s*")[^"]*(")/, (_m, p1, p2) => `${p1}${htmlLang}${p2}`)

  const hreflangLinks = LOCALES.map(
    (code) => `  <link rel="alternate" hreflang="${HTML_LANG[code]}" href="${SITE.url}${localizedPath(code, path)}" />`,
  ).join('\n')
  const xDefault = `  <link rel="alternate" hreflang="x-default" href="${SITE.url}${localizedPath('pt', path)}" />`
  html = replaceOrThrow(
    html,
    /(<link rel="canonical" href="[^"]*" \/>)/,
    (_m, p1) => `${p1}\n${hreflangLinks}\n${xDefault}`,
  )

  return html
}

function main() {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const distDir = join(__dirname, '..', 'dist')
  const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8')

  let count = 0
  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      // pt + '/' resolves to dist/index.html itself (localizedPath('pt', '/')
      // is '/'), so this also re-writes the build's own root file to add the
      // hreflang links Vite's static index.html doesn't have.
      const html = buildHtml(baseHtml, { locale, path: route.path })
      const outDir = join(distDir, localizedPath(locale, route.path))
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'index.html'), html)
      count += 1
    }
  }
  console.log(`prerender: wrote ${count} locale/route index.html files`)
}

main()
