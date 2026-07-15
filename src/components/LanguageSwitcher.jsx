import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocale } from '../hooks/useLocale'
import { LOCALES, localizedPath } from '../lib/locale'

const LOCALE_LABELS = { pt: 'Português', en: 'English', es: 'Español' }

export function LanguageSwitcher({ onNavigate }) {
  const { t } = useTranslation()
  const { locale, path } = useLocale()

  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-zinc-400">
        {t('language.label')}
      </div>
      <div className="glass-sm flex items-center gap-1 rounded-xl p-1">
        {LOCALES.map((code) => (
          <Link
            key={code}
            to={localizedPath(code, path)}
            onClick={onNavigate}
            className={`flex flex-1 items-center justify-center rounded-lg py-2 text-xs font-semibold transition-colors ${locale === code ? 'text-white' : 'text-neutral-500 dark:text-zinc-400'
              }`}
            style={locale === code ? { background: 'var(--ttk)' } : undefined}
          >
            {LOCALE_LABELS[code]}
          </Link>
        ))}
      </div>
    </div>
  )
}
