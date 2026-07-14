import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PasteIcon, DownloadIcon } from '../components/icons'
import { ShareFabs } from '../components/ShareFabs'
import { asset } from '../lib/asset'

export function Home() {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const [canPaste, setCanPaste] = useState(false)

  useEffect(() => {
    document.title = "ttk downloader - Download TikTok videos without watermark!"
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
    navigate(`/download?url=${encodeURIComponent(url.trim())}`)
  }

  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-5 text-center text-3xl font-extrabold sm:text-4xl">
            Download video from TikTok without watermark free.
          </h1>
          <p className="mb-4 text-center text-neutral-500">Paste the link below</p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-2 flex w-full overflow-hidden rounded border border-neutral-300 dark:border-neutral-600">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste link..."
                required
                autoComplete="off"
                autoCapitalize="none"
                title="Paste the link"
                className="w-full bg-transparent px-3 py-2 outline-none"
              />
              {canPaste && (
                <button
                  type="button"
                  onClick={handlePaste}
                  className="flex items-center gap-1 whitespace-nowrap bg-neutral-100 px-3 text-sm dark:bg-neutral-700"
                >
                  <PasteIcon className="h-4 w-4" />
                  {url ? 'Clear' : 'Paste'}
                </button>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-neutral-600 py-3 font-bold text-white hover:bg-neutral-700"
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
        </div>

        <div className="hidden lg:block">
          <h2 className="text-center text-2xl font-bold">
            <span style={{ color: 'var(--ttk)' }}>ttk</span>video
          </h2>
          <div className="relative mx-auto mt-4 max-w-xs">
            <img src={asset("/assets/verti.webp")} width="800" height="1200" alt="ttk app" className="w-full" />
          </div>
        </div>
      </div>

      <ShareFabs />
    </>
  )
}
