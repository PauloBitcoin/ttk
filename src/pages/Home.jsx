import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { DownloadIcon, MusicIcon, PasteIcon, ShieldIcon, ZapIcon } from '../components/icons'
import { DownloadModal } from '../components/DownloadModal'
import { ShareFabs } from '../components/ShareFabs'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'

const FEATURES = [
  { icon: ShieldIcon, label: 'Sem marca d’água' },
  { icon: ZapIcon, label: 'Qualidade HQ' },
  { icon: MusicIcon, label: 'Áudio em MP3' },
  { icon: DownloadIcon, label: '100% grátis' },
]

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [url, setUrl] = useState('')
  const [canPaste, setCanPaste] = useState(false)
  const activeUrl = searchParams.get('url')

  useEffect(() => {
    document.title = `${SITE.name} - Download TikTok videos without watermark!`
    setCanPaste(Boolean(navigator.clipboard))
  }, [])

  const handlePaste = async () => {
    if (url) {
      setUrl('')
      return
    }
    try {
      const text = await navigator.clipboard.readText()
      if (text) setUrl(text)
      else window.alert('empty!')
    } catch {
      window.alert('empty!')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!url.trim()) return
    setSearchParams({ url: url.trim() })
  }

  const closeModal = () => setSearchParams({}, { replace: true })

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: 'var(--ttk)' }}
        />
        <div
          aria-hidden
          className="animate-blob-delayed pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: 'var(--ttk-2)' }}
        />

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 pb-6 pt-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, var(--ttk), var(--ttk-2))' }}
              >
                {SITE.tagline}
              </span>
            </h1>
            {/* <p className="mb-4 text-center text-neutral-500">Paste the link below</p>*/}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="glass mb-3 flex w-full overflow-hidden rounded-2xl p-1.5 shadow-lg">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste link..."
                  required
                  autoComplete="off"
                  autoCapitalize="none"
                  title="Paste the link"
                  className="w-full bg-transparent px-3 py-2.5 outline-none"
                />
                {canPaste && (
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl bg-black/5 px-3 text-sm font-medium dark:bg-white/10"
                  >
                    <PasteIcon className="h-4 w-4" />
                    {url ? 'Clear' : 'Paste'}
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl py-3 font-bold text-white shadow-lg transition-transform hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, var(--ttk), var(--ttk-2))', boxShadow: '0 12px 30px -12px rgba(255,0,80,0.55)' }}
              >
                <DownloadIcon className="h-5 w-5" />
                Download
              </button>

              <p className="mt-2 text-center text-xs">
                By using our service, you accept our{' '}
                <Link to="/terms-of-service" className="font-bold" style={{ color: 'var(--ttk)' }}>
                  Terms Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="font-bold" style={{ color: 'var(--ttk)' }}>
                  Privacy Policy
                </Link>
                .
              </p>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-center text-xs font-semibold"
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--ttk)' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-center text-2xl font-bold">
              Dino<span style={{ color: 'var(--ttk)' }}>Tok</span>
            </h2>
            <div className="relative mx-auto mt-4 max-w-xs">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full opacity-40 blur-3xl"
                style={{ background: 'linear-gradient(135deg, var(--ttk), var(--ttk-2))' }}
              />
              <img src={asset(IMAGES.heroVertical)} width="800" height="1200" alt={`${SITE.name} app`} className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <ShareFabs />

      {activeUrl && <DownloadModal url={activeUrl} onClose={closeModal} />}
    </>
  )
}
