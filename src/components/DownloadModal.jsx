import { useEffect } from 'react'
import { AlertIcon, CloseIcon, DownloadIcon, MusicIcon } from './icons'
import { VideoPlayer } from './VideoPlayer'
import { useTikTokDownload } from '../hooks/useTikTokDownload'

function Spinner({ className = 'h-4 w-4' }) {
  return (
    <span className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`} />
  )
}

export function DownloadModal({ url, onClose, onDownloadSuccess }) {
  const { status, errorMessage, data, download, downloadingKey } = useTikTokDownload(url)

  useEffect(() => {
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
  }, [onClose])

  const handleDownload = async (key) => {
    const ok = await download(key)
    if (ok) onDownloadSuccess?.(key, data)
  }

  return (
    <div
      className="animate-overlay-fade fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass animate-modal-pop relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl shadow-2xl"
        style={{ boxShadow: '0 0 0 1px rgba(255,0,80,0.15), 0 20px 60px -15px rgba(0,0,0,0.5)' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-3 dark:border-zinc-700/50 sm:px-6">
          <h2 className="min-w-0 flex-1 truncate text-sm font-semibold text-neutral-600 dark:text-zinc-300">
            {data?.title ?? ' '}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
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
              <span className="text-sm text-neutral-500 dark:text-zinc-400">Fetching video...</span>
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
                Close
              </button>
            </div>
          )}

          {status === 'success' && data && (
            <div className="flex flex-col gap-4">
              <VideoPlayer src={data.play} poster={data.origin_cover} />

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
                    Profile
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload('video')}
                  disabled={downloadingKey === 'video'}
                  className="flex shrink-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 sm:w-64"
                  style={{ background: 'linear-gradient(135deg, var(--ttk), #ff5c8a)', boxShadow: '0 10px 30px -10px rgba(255,0,80,0.6)' }}
                >
                  {downloadingKey === 'video' ? (
                    <Spinner className="h-5 w-5" />
                  ) : (
                    <>
                      <DownloadIcon className="h-5 w-5" />
                      <span className="flex flex-col items-start leading-tight">
                        <span>Baixar sem marca d'água</span>
                        <span className="text-xs font-normal opacity-80">MP4 · HQ</span>
                      </span>
                    </>
                  )}
                </button>
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
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md disabled:opacity-70"
                  title="Baixar áudio (MP3)"
                  style={{ background: 'linear-gradient(135deg, var(--ttk-2), #2dd4bf)' }}
                >
                  {downloadingKey === 'music' ? <Spinner /> : <MusicIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
