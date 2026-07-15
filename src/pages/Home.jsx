import { useCallback, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CloseIcon, ClearIcon, DownloadIcon, MusicIcon, PasteIcon, ShieldIcon, ZapIcon } from '../components/icons'
import { AdSlot } from '../components/AdSlot'
import { DownloadModal } from '../components/DownloadModal'
import { ShareFabs } from '../components/ShareFabs'
import { Seo } from '../components/Seo'
import { useToast } from '../components/Toast'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'
import { useLocale } from '../hooks/useLocale'
import { localizedPath } from '../lib/locale'
import { addRecentDownload, clearRecentDownloads, getRecentDownloads, removeRecentDownload } from '../lib/recentDownloads'

const TIKTOK_URL_REGEX = /https?:\/\/[^\s]*tiktok\.com\/[^\s]*/gi
const TIKTOK_ID_REGEX = /^\d{15,19}$/

// TikTok video IDs (bare, no URL) resolve fine at this canonical path -
// useful since some share flows only hand you the numeric ID.
function toTikTokUrl(token) {
  return TIKTOK_ID_REGEX.test(token) ? `https://www.tiktok.com/video/${token}` : token
}

function extractTikTokUrls(text) {
  const fromUrls = text.match(TIKTOK_URL_REGEX) || []
  const fromIds = text
    .split(/\s+/)
    .filter((token) => TIKTOK_ID_REGEX.test(token))
    .map(toTikTokUrl)
  return [...new Set([...fromUrls, ...fromIds])]
}

export function Home() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const [searchParams, setSearchParams] = useSearchParams()
  const [url, setUrl] = useState('')
  const [canPaste, setCanPaste] = useState(false)
  const [recent, setRecent] = useState(() => getRecentDownloads())
  const [queue, setQueue] = useState([])
  const showToast = useToast()
  const activeUrl = searchParams.get('url')

  const FEATURES = [
    { icon: ShieldIcon, label: t('home.features.noWatermark') },
    { icon: ZapIcon, label: t('home.features.hq') },
    { icon: MusicIcon, label: t('home.features.mp3') },
    { icon: DownloadIcon, label: t('home.features.free') },
  ]

  useEffect(() => {
    setCanPaste(Boolean(navigator.clipboard))
  }, [])

  const handlePastedText = (text) => {
    const urls = extractTikTokUrls(text)
    if (urls.length === 0) {
      setUrl(text)
      return
    }
    const [first, ...rest] = urls
    setUrl(first)
    setQueue(rest)
    setSearchParams({ url: first })
  }

  const handlePaste = async () => {
    if (url) {
      setUrl('')
      return
    }
    try {
      const text = await navigator.clipboard.readText()
      if (text) handlePastedText(text)
      else showToast({ icon: 'error', title: t('home.clipboardEmpty') })
    } catch {
      showToast({ icon: 'error', title: t('home.clipboardEmpty') })
    }
  }

  const handleInputPaste = (event) => {
    const text = event.clipboardData?.getData('text')
    if (!text) return
    const urls = extractTikTokUrls(text)
    if (urls.length === 0) return // not a TikTok link or bare video ID - let the default paste fill the input
    event.preventDefault()
    handlePastedText(text)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = url.trim()
    if (!trimmed) return
    setSearchParams({ url: toTikTokUrl(trimmed) })
  }

  const closeAndAdvanceQueue = useCallback(() => {
    setQueue((currentQueue) => {
      if (currentQueue.length > 0) {
        const [next, ...rest] = currentQueue
        setUrl(next)
        setSearchParams({ url: next })
        return rest
      }
      setSearchParams({}, { replace: true })
      return currentQueue
    })
  }, [setSearchParams])

  const cancelQueue = useCallback(() => {
    setQueue([])
    showToast({ icon: 'success', title: t('home.queueCleared') })
  }, [showToast, t])

  const openRecent = (recentUrl) => {
    setUrl(recentUrl)
    setSearchParams({ url: recentUrl })
  }

  const handleRemoveRecent = (event, itemUrl) => {
    event.stopPropagation()
    setRecent(removeRecentDownload(itemUrl))
  }

  const handleClearRecent = () => setRecent(clearRecentDownloads())

  const handleDownloadSuccess = useCallback((key, data) => {
    setRecent(
      addRecentDownload({
        url: activeUrl,
        title: data.title,
        cover: data.origin_cover,
        author: { nickname: data.author.nickname, avatar: data.author.avatar },
      }),
    )

    if (key === 'video' || key.startsWith('image-')) {
      showToast({ icon: 'success', title: t('home.downloadedSuccess') })
      closeAndAdvanceQueue()
    } else {
      showToast({ icon: 'success', title: t('home.audioDownloaded') })
    }
  }, [activeUrl, showToast, closeAndAdvanceQueue, t])

  return (
    <>
      <Seo
        title={t('home.seoTitle')}
        description={t('home.seoDescription', { name: SITE.name })}
        path="/"
      />
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

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-6 pt-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, var(--ttk), var(--ttk-2))' }}
              >
                {t('home.tagline')}
              </span>
            </h1>
            <p className="mb-6 text-center text-sm text-neutral-500 dark:text-zinc-400">
              {t('home.subtitle')}
            </p>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="glass mb-3 flex w-full overflow-hidden rounded-2xl p-1.5 shadow-lg">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onPaste={handleInputPaste}
                  placeholder={t('home.placeholder')}
                  required
                  autoComplete="off"
                  autoCapitalize="none"
                  title={t('home.pasteTitle')}
                  className="w-full bg-transparent px-3 py-2.5 outline-none placeholder:text-neutral-500 dark:placeholder:text-zinc-400"
                />
                {canPaste && (
                  <button
                    type="button"
                    onClick={handlePaste}
                    className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-xl px-3 text-sm font-medium transition-colors ${url
                      ? 'bg-black/5 dark:bg-white/10'
                      : 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:bg-blue-400/10 dark:text-blue-300 dark:hover:bg-blue-400/20'
                      }`}
                  >
                    {url ? <ClearIcon className="h-4 w-4" /> : <PasteIcon className="h-4 w-4" />}
                    {url ? t('home.clear') : t('home.paste')}
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl py-3 font-bold text-white shadow-lg transition-transform hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, var(--ttk), var(--ttk-2))', boxShadow: '0 12px 30px -12px rgba(255,0,80,0.55)' }}
              >
                <DownloadIcon className="h-5 w-5" />
                {t('home.downloadButton')}
              </button>

              <p className="mt-2 text-center text-xs">
                {t('home.termsPrefix')}{' '}
                <Link to={localizedPath(locale, '/terms-of-service')} className="font-bold" style={{ color: 'var(--ttk)' }}>
                  {t('home.termsLink')}
                </Link>{' '}
                {t('home.and')}{' '}
                <Link to={localizedPath(locale, '/privacy-policy')} className="font-bold" style={{ color: 'var(--ttk)' }}>
                  {t('home.privacyLink')}
                </Link>
                .
              </p>
            </form>

            {recent.length > 0 && (
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-500 dark:text-zinc-400">
                    {t('home.recentTitle')}
                  </h3>
                  <button
                    type="button"
                    onClick={handleClearRecent}
                    className="text-xs font-semibold text-neutral-400 hover:text-current dark:text-zinc-500"
                  >
                    {t('home.recentClear')}
                  </button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {recent.map((item) => (
                    <div
                      key={item.url}
                      role="button"
                      tabIndex={0}
                      onClick={() => openRecent(item.url)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          openRecent(item.url)
                        }
                      }}
                      className="glass-sm relative flex w-56 shrink-0 cursor-pointer items-center gap-2 rounded-xl p-2 text-left transition-transform hover:scale-[1.02]"
                    >
                      <img src={item.cover} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-xs font-semibold">{item.title || t('home.recentFallbackTitle')}</div>
                        <div className="flex items-center gap-1.5 truncate text-xs text-neutral-500 dark:text-zinc-400">
                          <img src={item.author?.avatar} alt="" className="h-4 w-4 shrink-0 rounded-full" />
                          <span className="truncate">{item.author?.nickname}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(event) => handleRemoveRecent(event, item.url)}
                        aria-label={t('home.recentClear')}
                        className="absolute right-1 top-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
                      >
                        <CloseIcon className="h-3.5 w-3.5" />
                      </button>
                    </div>
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
            <h2 className="text-center text-2xl" >
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--ttk), var(--ttk-2))', fontWeight: 800 }}>
                {SITE.shortName}
              </span>
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

        <div className="relative mx-auto max-w-5xl px-4 pb-6">
          <AdSlot />
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pb-10 pt-4">
        <h2 className="mb-4 text-center text-xl font-bold sm:text-2xl">
          {t('home.howTo.title')}
        </h2>
        <ol className="mb-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <strong>1.</strong> {t('home.howTo.step1')}
          </li>
          <li>
            <strong>2.</strong> {t('home.howTo.step2', { name: SITE.name })}
          </li>
          <li>
            <strong>3.</strong> {t('home.howTo.step3')}
          </li>
        </ol>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {t('home.howTo.paragraph', { name: SITE.name })}
        </p>
      </section>

      <ShareFabs />

      {activeUrl && (
        <DownloadModal
          key={activeUrl}
          url={activeUrl}
          onClose={closeAndAdvanceQueue}
          onDownloadSuccess={handleDownloadSuccess}
          badge={queue.length > 0 ? `+${queue.length} ${t('home.queueSuffix')}` : undefined}
          onBadgeClick={cancelQueue}
        />
      )}
    </>
  )
}
