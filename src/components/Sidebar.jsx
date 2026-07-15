import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon, MonitorIcon, MoonIcon, SunIcon } from './icons'
import { useTheme } from '../hooks/useTheme'
import { useToast } from './Toast'
import { SITE } from '../config/site'

const THEME_OPTIONS = [
  { value: 'light', label: 'Light', icon: SunIcon },
  { value: 'dark', label: 'Dark', icon: MoonIcon },
  { value: 'system', label: 'System', icon: MonitorIcon },
]

export function Sidebar({ open, onClose }) {
  const { theme, setTheme } = useTheme()
  const showToast = useToast()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  const clearCache = () => {
    localStorage.clear()
    showToast({ icon: 'success', title: 'Cache cleared!' })
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <aside
        className={`glass absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col gap-6 overflow-y-auto rounded-r-3xl p-5 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold" style={{ color: 'var(--ttk)' }}>
            {SITE.shortName}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 font-semibold">
          <Link to="/" onClick={onClose} className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-zinc-800">
            Home
          </Link>
          <Link to="/faq" onClick={onClose} className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-zinc-800">
            FAQ
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-zinc-800"
          >
            Contact
          </Link>
        </nav>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-zinc-400">
            Theme
          </div>
          <div className="glass-sm flex rounded-xl p-1">
            {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setTheme(value)}
                className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-xs font-semibold transition-colors ${
                  theme === value ? 'text-white' : 'text-neutral-500 dark:text-zinc-400'
                }`}
                style={theme === value ? { background: 'var(--ttk)' } : undefined}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={clearCache}
          className="mt-auto rounded-xl bg-amber-500 px-3 py-2 text-sm font-bold text-white hover:bg-amber-600"
        >
          Clear cache
        </button>

        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </aside>
    </div>
  )
}
