import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SITE } from '../config/site'
import { useLocale } from '../hooks/useLocale'
import { localizedPath } from '../lib/locale'

export function Footer() {
  const { t } = useTranslation()
  const { locale } = useLocale()

  return (
    <footer className="mt-16 border-t border-black/5 px-4 py-6 text-center text-sm text-neutral-500 dark:border-zinc-800/60 dark:text-zinc-400">
      <nav className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-semibold">
        <Link to={localizedPath(locale, '/faq')} className="hover:text-current">
          {t('nav.faq')}
        </Link>
        <Link to={localizedPath(locale, '/privacy-policy')} className="hover:text-current">
          {t('footer.privacyPolicy')}
        </Link>
        <Link to={localizedPath(locale, '/terms-of-service')} className="hover:text-current">
          {t('footer.termsOfService')}
        </Link>
        <Link to={localizedPath(locale, '/contact')} className="hover:text-current">
          {t('nav.contact')}
        </Link>
      </nav>
      <p>
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  )
}
