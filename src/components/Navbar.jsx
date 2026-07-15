import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MenuIcon } from './icons'
import { Sidebar } from './Sidebar'
import { LanguageMenu } from './LanguageMenu'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'
import { useLocale } from '../hooks/useLocale'
import { localizedPath } from '../lib/locale'

export function Navbar() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-30 flex h-auto items-center justify-between border-b border-black/5 bg-white/70 p-4 backdrop-blur-lg dark:border-zinc-800/60 dark:bg-zinc-950/70">
        <Link to={localizedPath(locale, '/')} className="flex h-full items-center gap-2 no-underline">
          <img src={asset(IMAGES.logo)} width="40" height="40" alt={`${SITE.name} logo`} title={SITE.name} />
          <span className="text-2xl bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--ttk), var(--ttk-2))', fontWeight: 800 }}>
            {SITE.shortName}
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <LanguageMenu />
          <button
            className="rounded p-2 hover:bg-black/5 dark:hover:bg-white/10"
            type="button"
            title={t('nav.menu')}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
