import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CloseIcon, MonitorIcon, MoonIcon, SunIcon } from './icons'
import { useDialogA11y } from '../hooks/useDialogA11y'
import { useTheme } from '../hooks/useTheme'
import { useLocale } from '../hooks/useLocale'
import { useToast } from './Toast'
import { SITE } from '../config/site'
import { localizedPath } from '../lib/locale'
import { LanguageSwitcher } from './LanguageSwitcher'

const THEME_OPTIONS = [
  { value: 'light', icon: SunIcon },
  { value: 'dark', icon: MoonIcon },
  { value: 'system', icon: MonitorIcon },
]

export function Sidebar({ open, onClose }) {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()
  const { locale } = useLocale()
  const showToast = useToast()
  const panelRef = useRef(null)

  useDialogA11y({ open, onClose, containerRef: panelRef })

  const clearCache = () => {
    localStorage.clear()
    showToast({ icon: 'success', title: t('sidebar.cacheCleared') })
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.menu')}
        className={`glass absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col gap-6 overflow-y-auto p-5 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold" style={{ color: 'var(--ttk)' }}>
            {SITE.shortName}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('nav.close')}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 font-semibold">
          <Link
            to={localizedPath(locale, '/')}
            onClick={onClose}
            className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-zinc-800"
          >
            {t('nav.home')}
          </Link>
          <Link
            to={localizedPath(locale, '/faq')}
            onClick={onClose}
            className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-zinc-800"
          >
            {t('nav.faq')}
          </Link>
          <Link
            to={localizedPath(locale, '/contact')}
            onClick={onClose}
            className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-zinc-800"
          >
            {t('nav.contact')}
          </Link>
        </nav>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-zinc-400">
            {t('theme.label')}
          </div>
          <div className="glass-sm flex rounded-xl p-1">
            {THEME_OPTIONS.map(({ value, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTheme(value)}
                className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-xs font-semibold transition-colors ${theme === value ? 'text-white' : 'text-neutral-500 dark:text-zinc-400'
                  }`}
                style={theme === value ? { background: 'var(--ttk)' } : undefined}
              >
                <Icon className="h-4 w-4" />
                {t(`theme.${value}`)}
              </button>
            ))}
          </div>
        </div>

        <LanguageSwitcher onNavigate={onClose} />

        <button
          type="button"
          onClick={clearCache}
          className="mt-auto rounded-xl bg-amber-500 px-3 py-2 text-sm font-bold text-white hover:bg-amber-600"
        >
          {t('sidebar.clearCache')}
        </button>

        <p className="text-center text-xs text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </aside>
    </div>
  )
}
