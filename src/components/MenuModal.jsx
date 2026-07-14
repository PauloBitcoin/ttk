import { Link } from 'react-router-dom'
import { CloseIcon } from './icons'
import { useToast } from './Toast'

export function MenuModal({ open, onClose }) {
  const showToast = useToast()

  if (!open) return null

  const clearCache = () => {
    localStorage.clear()
    showToast({ icon: 'success', title: 'Cache cleared!' })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-11/12 max-w-sm rounded-xl bg-white p-4 dark:bg-[#314052] dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-3 dark:border-neutral-600">
          <h5 className="text-lg font-bold">Main Menu</h5>
          <button onClick={onClose} aria-label="Close">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 text-center font-bold">
          <li className="rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <Link to="/" onClick={onClose}>Home</Link>
          </li>
          <li className="rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <Link to="/faq" onClick={onClose}>FAQ</Link>
          </li>
          <li className="rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <Link to="/contact" onClick={onClose}>Contact</Link>
          </li>
          <li className="mt-4 text-xs">
            <button className="rounded bg-amber-500 px-3 py-1.5 text-white" onClick={clearCache}>
              Clear cache
            </button>
          </li>
        </ul>

        <p className="mt-4 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} ttk downloader
        </p>
      </div>
    </div>
  )
}
