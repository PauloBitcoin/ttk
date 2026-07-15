import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ClearIcon, DownloadIcon, MusicIcon, PasteIcon, ShieldIcon, ZapIcon } from '../components/icons'
import { AdSlot } from '../components/AdSlot'
import { DownloadModal } from '../components/DownloadModal'
import { ShareFabs } from '../components/ShareFabs'
import { useToast } from '../components/Toast'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'
import { addRecentDownload, getRecentDownloads } from '../lib/recentDownloads'

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
  const [recent, setRecent] = useState(() => getRecentDownloads())
  const showToast = useToast()
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

  const openRecent = (recentUrl) => setSearchParams({ url: recentUrl })

  const handleDownloadSuccess = (key, data) => {
    setRecent(
      addRecentDownload({
        url: activeUrl,
        title: data.title,
        cover: data.origin_cover,
        author: { nickname: data.author.nickname, avatar: data.author.avatar },
      }),
    )

    if (key === 'video') {
      showToast({ icon: 'success', title: 'Baixado com sucesso!' })
      closeModal()
      setUrl('')
    } else {
      showToast({ icon: 'success', title: 'Áudio baixado!' })
    }
  }

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
                    className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl px-3 text-sm font-medium transition-colors ${
                      url
                        ? 'bg-black/5 dark:bg-white/10'
                        : 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:bg-blue-400/10 dark:text-blue-300 dark:hover:bg-blue-400/20'
                    }`}
                  >
                    {url ? <ClearIcon className="h-4 w-4" /> : <PasteIcon className="h-4 w-4" />}
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

            {recent.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-zinc-400">
                  Baixados recentemente
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {recent.map((item) => (
                    <button
                      key={item.url}
                      type="button"
                      onClick={() => openRecent(item.url)}
                      className="glass-sm flex w-56 shrink-0 items-center gap-2 rounded-xl p-2 text-left transition-transform hover:scale-[1.02]"
                    >
                      <img src={item.cover} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-xs font-semibold">{item.title || 'TikTok video'}</div>
                        <div className="flex items-center gap-1.5 truncate text-xs text-neutral-500 dark:text-zinc-400">
                          <img src={item.author?.avatar} alt="" className="h-4 w-4 shrink-0 rounded-full" />
                          <span className="truncate">{item.author?.nickname}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass-sm flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-center text-xs font-semibold"
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--ttk)' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-center text-2xl font-bold" style={{ color: 'var(--ttk)' }}>
              {SITE.shortName}
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

        <div className="relative mx-auto max-w-5xl pb-6">
          <AdSlot />
        </div>
      </div>

      <ShareFabs />

      {activeUrl && (
        <DownloadModal url={activeUrl} onClose={closeModal} onDownloadSuccess={handleDownloadSuccess} />
      )}
    </>
  )
}
