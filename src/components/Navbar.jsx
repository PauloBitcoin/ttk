import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, MoonIcon, SunIcon } from './icons'
import { MenuModal } from './MenuModal'
import { useDarkMode } from '../hooks/useDarkMode'

export function Navbar() {
  const [dark, toggleDark] = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex h-24 items-center justify-between p-2">
        <Link to="/" className="flex h-full items-center gap-2 no-underline">
          <img src="/assets/logo-350.webp" width="40" height="40" alt="ttk logo" title="TikTok Downloader" />
          <span className="text-2xl font-bold text-current">
            tt<span style={{ color: 'var(--ttk)' }}>k</span>
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
