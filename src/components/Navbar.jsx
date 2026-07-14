import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, MoonIcon, SunIcon } from './icons'
import { MenuModal } from './MenuModal'
import { useDarkMode } from '../hooks/useDarkMode'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'

export function Navbar() {
  const [dark, toggleDark] = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-30 flex h-24 items-center justify-between border-b border-black/5 bg-white/70 p-2 backdrop-blur-lg dark:border-white/5 dark:bg-[#1a2430]/70">
        <Link to="/" className="flex h-full items-center gap-2 no-underline">
          <img src={asset(IMAGES.logo)} width="40" height="40" alt={`${SITE.name} logo`} title={SITE.name} />
          <span className="text-2xl font-bold text-current">
            Dino<span style={{ color: 'var(--ttk)' }}>Tok</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            className="rounded p-2 hover:bg-black/5 dark:hover:bg-white/10"
            type="button"
            title="Dark mode"
            onClick={toggleDark}
          >
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            className="rounded p-2 hover:bg-black/5 dark:hover:bg-white/10"
            type="button"
            title="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
