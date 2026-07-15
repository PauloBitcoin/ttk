import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from './Layout'
import { HTML_LANG } from '../lib/locale'

export function LocaleRoot({ locale }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(locale)
    document.documentElement.lang = HTML_LANG[locale]
  }, [locale, i18n])

  return <Layout />
}
