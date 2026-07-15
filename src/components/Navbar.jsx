import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon } from './icons'
import { Sidebar } from './Sidebar'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-30 flex h-24 items-center justify-between border-b border-black/5 bg-white/70 p-2 px-4 backdrop-blur-lg dark:border-zinc-800/60 dark:bg-zinc-950/70">
        <Link to="/" className="flex h-full items-center gap-2 no-underline">
          <img src={asset(IMAGES.logo)} width="40" height="40" alt={`${SITE.name} logo`} title={SITE.name} />
          <span className="text-2xl font-bold" style={{ color: 'var(--ttk)' }}>
            {SITE.shortName}
          </span>
        </Link>

        <button
          className="rounded p-2 hover:bg-black/5 dark:hover:bg-white/10"
          type="button"
          title="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </nav>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
