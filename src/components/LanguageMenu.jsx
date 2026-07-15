import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckIcon, LanguagesIcon } from './icons'
import { useLocale } from '../hooks/useLocale'
import { localizedPath } from '../lib/locale'

// Already alphabetical by name (English, Español, Português).
const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
]

export function LanguageMenu() {
  const { t } = useTranslation()
  const { locale, path } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.label')}
        title={t('language.label')}
        className="flex items-center gap-1 rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        <LanguagesIcon className="h-5 w-5" />
        <span className="text-xs font-bold uppercase">{locale}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('language.label')}
          className="glass absolute right-0 top-full z-40 mt-2 w-40 overflow-hidden rounded-xl py-1 shadow-xl"
        >
          {LANGUAGES.map(({ code, name }) => {
            const active = locale === code
            return (
              <li key={code} role="option" aria-selected={active}>
                <Link
                  to={localizedPath(code, path)}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                  style={active ? { color: 'var(--ttk)', fontWeight: 700 } : undefined}
                >
                  {name}
                  {active && <CheckIcon className="h-4 w-4" />}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
