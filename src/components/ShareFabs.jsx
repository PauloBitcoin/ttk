import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CopyLinkIcon, FacebookIcon, ShareIcon, TelegramIcon, WhatsAppIcon, XIcon } from './icons'
import { useToast } from './Toast'

const popup = (url) => window.open(url, '_blank', 'toolbar=0,status=0,width=600,height=600')

export function ShareFabs() {
  const [open, setOpen] = useState(false)
  const showToast = useToast()
  const location = useLocation()

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      showToast({ icon: 'success', title: 'Copied successfully!' })
    } catch {
      showToast({ icon: 'error', title: 'Failed to copy!' })
    }
  }

  const links = useMemo(() => {
    const href = encodeURIComponent(window.location.href)
    return [
      { icon: TelegramIcon, label: 'Telegram', href: `https://telegram.me/share/url?url=${href}` },
      { icon: WhatsAppIcon, label: 'WhatsApp', href: `https://api.whatsapp.com/send?text=${href}` },
      { icon: XIcon, label: 'X (Twitter)', href: `https://twitter.com/intent/tweet?url=${href}` },
      { icon: FacebookIcon, label: 'Facebook', href: `https://www.facebook.com/share.php?u=${href}` },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search])

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-700 shadow-lg dark:bg-zinc-800 dark:text-zinc-100"
            title="Copy link"
            onClick={copyLink}
          >
            <CopyLinkIcon className="h-5 w-5" />
          </button>
          {links.map(({ icon: Icon, label, href }) => (
            <button
              key={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-700 shadow-lg dark:bg-zinc-800 dark:text-zinc-100"
              title={label}
              onClick={() => popup(href)}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </>
      )}
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
        style={{ background: 'var(--ttk)' }}
        title="Share"
        onClick={() => setOpen((o) => !o)}
      >
        <ShareIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
