import { Link } from 'react-router-dom'
import { SITE } from '../config/site'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 py-6 text-center text-sm text-neutral-500 dark:border-zinc-800/60 dark:text-zinc-400">
      <nav className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-semibold">
        <Link to="/faq" className="hover:text-current">
          FAQ
        </Link>
        <Link to="/privacy-policy" className="hover:text-current">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="hover:text-current">
          Terms of Service
        </Link>
        <Link to="/contact" className="hover:text-current">
          Contact
        </Link>
      </nav>
      <p>
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  )
}
