import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AdSlot } from './AdSlot'
import { ImageCarousel } from './ImageCarousel'
import { AlertIcon, CloseIcon, CopyLinkIcon, DownloadIcon, MusicIcon } from './icons'
import { VideoPlayer } from './VideoPlayer'
import { useDialogA11y } from '../hooks/useDialogA11y'
import { useTikTokDownload } from '../hooks/useTikTokDownload'
import { useToast } from './Toast'

function Spinner({ className = 'h-4 w-4' }) {
  return (
    <span className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`} />
  )
}

export function DownloadModal({ url, onClose, onDownloadSuccess, badge, onBadgeClick }) {
  const { t } = useTranslation()
  const { status, errorMessage, data, download, downloadingKey } = useTikTokDownload(url)
  const [imageIndex, setImageIndex] = useState(0)
  const showToast = useToast()
  const panelRef = useRef(null)

  useDialogA11y({ open: true, onClose, containerRef: panelRef })

  const isPhotoPost = Array.isArray(data?.images) && data.images.length > 0
  const primaryKey = isPhotoPost ? `image-${imageIndex}` : 'video'

  const handleDownload = async (key) => {
    const ok = await download(key)
    if (ok) onDownloadSuccess?.(key, data)
  }

  const handleCopyLink = async () => {
    const link = isPhotoPost ? data.images[imageIndex] : data.play
    try {
      await navigator.clipboard.writeText(link)
      showToast({ icon: 'success', title: t('downloadModal.linkCopied') })
    } catch {
      showToast({ icon: 'error', title: t('downloadModal.failedToCopyLink') })
    }
  }

  return (
    <div
      className="animate-overlay-fade fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={data?.title || t('home.downloadButton')}
        className="glass animate-modal-pop relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl shadow-2xl"
        style={{ boxShadow: '0 0 0 1px rgba(255,0,80,0.15), 0 20px 60px -15px rgba(0,0,0,0.5)' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-3 dark:border-zinc-700/50 sm:px-6">
          <h2 className="min-w-0 flex-1 truncate text-sm font-semibold text-neutral-600 dark:text-zinc-300">
            {data?.title ?? ' '}
          </h2>
          {badge && (
            <button
              type="button"
              onClick={onBadgeClick}
              title={t('downloadModal.cancelQueue')}
              className="shrink-0 rounded-full px-2.5 py-1 text-xs font-bold text-white hover:opacity-90"
              style={{ background: 'var(--ttk)' }}
            >
              {badge}
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label={t('downloadModal.close')}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-current hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6">
          {status === 'loading' && (
            <div className="flex flex-col items-center justify-center gap-4 py-24">
              <div
                className="h-12 w-12 animate-spin rounded-full border-4 border-current border-t-transparent"
                style={{ color: 'var(--ttk)' }}
              />
              <span className="text-sm text-neutral-500 dark:text-zinc-400">{t('downloadModal.fetching')}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
              <AlertIcon className="h-14 w-14 text-red-400" />
              <h2 className="text-lg font-bold">{errorMessage}</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-4 py-2 text-sm font-bold text-white"
                style={{ background: 'var(--ttk)' }}
              >
                {t('downloadModal.close')}
              </button>
            </div>
          )}

          {status === 'success' && data && (
            <div className="flex flex-col gap-4">
              {isPhotoPost ? (
                <ImageCarousel images={data.images} index={imageIndex} onIndexChange={setImageIndex} />
              ) : (
                <VideoPlayer src={data.play} poster={data.origin_cover} />
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="glass-sm flex flex-1 items-center gap-3 rounded-2xl p-3">
                  <img src={data.author.avatar} alt="avatar" className="h-11 w-11 shrink-0 rounded-full" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-bold">{data.author.nickname}</div>
                    <div className="truncate text-sm text-neutral-500 dark:text-zinc-400">@{data.author.unique_id}</div>
                  </div>
                  <a
                    href={`https://www.tiktok.com/@${data.author.unique_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold opacity-80 hover:opacity-100"
                  >
                    {t('downloadModal.profile')}
                  </a>
                </div>

                <div className="flex flex-2 gap-2 sm:w-64">
                  <button
                    type="button"
                    onClick={() => handleDownload(primaryKey)}
                    disabled={downloadingKey === primaryKey}
                    className="flex flex-1 shrink-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    style={{ background: 'linear-gradient(135deg, var(--ttk), #ff5c8a)', boxShadow: '0 10px 30px -10px rgba(255,0,80,0.6)' }}
                  >
                    {downloadingKey === primaryKey ? (
                      <Spinner className="h-5 w-5" />
                    ) : (
                      <>
                        <DownloadIcon className="h-5 w-5" />
                        <span className="flex flex-col items-start leading-tight">
                          <span>{isPhotoPost ? t('downloadModal.downloadImage') : t('downloadModal.downloadNoWatermark')}</span>
                          <span className="text-xs font-normal opacity-80">
                            {isPhotoPost
                              ? t('downloadModal.imageCounter', { current: imageIndex + 1, total: data.images.length })
                              : t('downloadModal.mp4hq')}
                          </span>
                        </span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    aria-label={t('downloadModal.copyDirectLink')}
                    title={t('downloadModal.copyDirectLink')}
                    className="flex w-12 shrink-0 items-center justify-center rounded-2xl bg-black/5 text-current hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    <CopyLinkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="glass-sm flex items-center gap-3 rounded-2xl p-3">
                <img src={data.music_info.cover} alt="music" className="h-11 w-11 rounded-xl" />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-bold">{data.music_info.title}</div>
                  <div className="truncate text-sm text-neutral-500 dark:text-zinc-400">{data.music_info.author}</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownload('music')}
                  disabled={downloadingKey === 'music'}
                  aria-label={t('downloadModal.downloadAudioTitle')}
                  title={t('downloadModal.downloadAudioTitle')}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, var(--ttk-2), #2dd4bf)' }}
                >
                  {downloadingKey === 'music' ? <Spinner /> : <MusicIcon className="h-5 w-5" />}
                </button>
              </div>

              <AdSlot />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
