import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { DownloadIcon, MusicIcon, AlertIcon } from '../components/icons'
import { useTikTokDownload } from '../hooks/useTikTokDownload'

function Spinner() {
  return (
    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
  )
}

function DownloadButton({ label, sub, icon, downloadingKey, ownKey, onClick, className }) {
  const busy = downloadingKey === ownKey
  return (
    <button
      onClick={onClick}
      disabled={busy}
      className={`flex w-full flex-col items-center justify-center gap-0.5 rounded-lg py-2 font-semibold text-white disabled:opacity-70 ${className}`}
    >
      {busy ? <Spinner /> : (
        <>
          <span className="text-lg">{label}</span>
          <span className="flex items-center gap-1 text-sm font-normal">{icon}{sub}</span>
        </>
      )}
    </button>
  )
}

export function Download() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const url = params.get('url') ?? ''
  const { status, errorMessage, data, download, downloadingKey } = useTikTokDownload(url)
  const [nextUrl, setNextUrl] = useState('')

  useEffect(() => {
    document.title = 'ttk downloader - Download'
  }, [])

  useEffect(() => {
    if (data) document.title = data.title ? `${data.title} - ttk downloader` : document.title
  }, [data])

  const handleAnotherVideo = (event) => {
    event.preventDefault()
    if (!nextUrl.trim()) return
    navigate(`/download?url=${encodeURIComponent(nextUrl.trim())}`)
  }

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-current border-t-transparent" style={{ color: 'var(--ttk)' }} />
        <span className="text-sm text-neutral-500">Loading...</span>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <AlertIcon className="h-16 w-16 text-red-400" />
        <h1 className="text-xl font-bold">{errorMessage}</h1>
        <Link to="/" style={{ color: 'var(--ttk)' }} className="font-bold">
          return to home page
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pb-10 pt-6 lg:grid-cols-2">
      <div>
        <span className="mb-2 block text-center text-sm text-neutral-500">Video Preview</span>
        <video
          controls
          playsInline
          poster={data.origin_cover}
          src={data.play}
          className="mx-auto max-h-[70vh] w-full rounded-lg bg-black"
        />
      </div>

      <div>
        <span className="mb-2 block text-center text-sm text-neutral-500">Options</span>

        <div className="mb-2 flex items-center gap-2 rounded-lg bg-neutral-800 p-3 text-white">
          <img src={data.author.avatar} alt="avatar" className="h-10 w-10 rounded-lg" />
          <div className="flex-grow">
            <div className="-mt-1 font-bold">{data.author.nickname}</div>
            <div className="-mt-1">@{data.author.unique_id}</div>
          </div>
          <a
            href={`https://www.tiktok.com/@${data.author.unique_id}`}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-white/40 px-3 py-1.5 text-sm"
            style={{ color: 'var(--ttk-2)' }}
          >
            Profile
          </a>
        </div>

        <div className="mb-2 grid grid-cols-2 gap-2">
          <DownloadButton
            label="Download"
            sub="no watermark"
            className="bg-emerald-600 hover:bg-emerald-700"
            downloadingKey={downloadingKey}
            ownKey="video"
            onClick={() => download('video')}
          />
          <DownloadButton
            label="Download"
            sub={<><AlertIcon className="h-4 w-4" /> with watermark</>}
            className="bg-neutral-500 hover:bg-neutral-600"
            downloadingKey={downloadingKey}
            ownKey="video_wm"
            onClick={() => download('video_wm')}
          />
        </div>

        <div className="mb-4 flex h-16 items-center justify-between gap-2 rounded-lg bg-sky-900 p-2">
          <img src={data.music_info.cover} alt="music" className="h-10 w-10 rounded-lg" />
          <div className="flex-grow overflow-hidden">
            <div className="-mt-1 truncate font-bold text-white">{data.music_info.title}</div>
            <div className="-mt-1 truncate text-white">{data.music_info.author}</div>
          </div>
          <button
            onClick={() => download('music')}
            disabled={downloadingKey === 'music'}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-neutral-800 disabled:opacity-70"
          >
            {downloadingKey === 'music' ? <Spinner /> : <MusicIcon className="h-5 w-5" />}
          </button>
        </div>

        <form onSubmit={handleAnotherVideo}>
          <div className="mb-1 text-center text-neutral-500">Download another video</div>
          <div className="mb-2 flex w-full overflow-hidden rounded border border-neutral-300 dark:border-neutral-600">
            <input
              type="text"
              value={nextUrl}
              onChange={(e) => setNextUrl(e.target.value)}
              placeholder="Paste link..."
              required
              autoComplete="off"
              autoCapitalize="none"
              className="w-full bg-transparent px-3 py-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded bg-neutral-600 py-2.5 font-bold text-white hover:bg-neutral-700"
          >
            <DownloadIcon className="h-5 w-5" />
            Download
          </button>
        </form>
      </div>
    </div>
  )
}
