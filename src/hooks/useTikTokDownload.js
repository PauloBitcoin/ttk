import { useEffect, useRef, useState } from 'react'

const API_ENDPOINT = 'https://tikwm.com/api/?url='
const MAX_RETRIES = 8
const BASE_RETRY_DELAY_MS = 400

// Keeps fetched video data + blobs around for the life of the tab, keyed by
// the pasted URL, so closing and reopening the modal for the same video
// doesn't refire the (rate-limited) tikwm request.
const cache = new Map()

function sanitizeFilename(name) {
  return name
    .replace(/[\\/:*?"<>|]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 150)
}

function resolveSourceUrl(data, blobKey) {
  if (blobKey === 'video') return data.play
  if (blobKey === 'music') return data.music
  if (blobKey.startsWith('image-')) return data.images?.[Number(blobKey.slice(6))]
  return null
}

function resolveFilename(data, blobKey) {
  const base = sanitizeFilename(`${data.author.unique_id} ${data.title}`)
  if (blobKey === 'video') return { filename: `${base} BaixaTok`, extension: '.mp4' }
  if (blobKey === 'music') {
    return { filename: sanitizeFilename(`${data.music_info.author} - ${data.music_info.title}`), extension: '.mp3' }
  }
  if (blobKey.startsWith('image-')) {
    const index = Number(blobKey.slice(6))
    return { filename: `${base} ${index + 1}`, extension: '.jpg' }
  }
  return { filename: base, extension: '' }
}

async function fetchBlob(url, attempt = 0) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`status ${response.status}`)
    return await response.blob()
  } catch (err) {
    if (attempt >= MAX_RETRIES) throw err
    const backoff = BASE_RETRY_DELAY_MS * 2 ** attempt
    const jitter = Math.random() * BASE_RETRY_DELAY_MS
    await new Promise((resolve) => setTimeout(resolve, backoff + jitter))
    return fetchBlob(url, attempt + 1)
  }
}

export function useTikTokDownload(rawUrl) {
  const cached = rawUrl ? cache.get(rawUrl) : null

  const [status, setStatus] = useState(cached ? 'success' : rawUrl ? 'loading' : 'error') // 'loading' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState(rawUrl ? '' : 'Invalid Video URL.')
  const [data, setData] = useState(cached ? cached.data : null)
  const [downloadingKey, setDownloadingKey] = useState(null)
  const blobs = useRef(cached ? cached.blobs : {})

  useEffect(() => {
    if (!rawUrl) {
      setStatus('error')
      setErrorMessage('Invalid Video URL.')
      return
    }

    const existing = cache.get(rawUrl)
    if (existing) {
      blobs.current = existing.blobs
      setData(existing.data)
      setStatus('success')
      return
    }

    let cancelled = false
    blobs.current = {}
    setStatus('loading')

    fetch(API_ENDPOINT + encodeURIComponent(rawUrl))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server returned error code: ${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        if (cancelled) return
        if (json.code === -1) {
          setStatus('error')
          setErrorMessage(json.msg || 'Failed to fetch video.')
          return
        }
        if (json.code !== 0) {
          throw new Error('Unknown response code.')
        }
        setData(json.data)
        setStatus('success')
        cache.set(rawUrl, { data: json.data, blobs: blobs.current })

        // Photo/slideshow posts have no video - images are fetched on demand
        // instead (a slideshow can hold dozens of images, not worth prefetching all).
        const isPhotoPost = Array.isArray(json.data.images) && json.data.images.length > 0
        const prefetchKeys = isPhotoPost ? ['music'] : ['play', 'music']
        for (const key of prefetchKeys) {
          const mediaUrl = json.data[key]
          if (!mediaUrl) continue
          const blobKey = key === 'play' ? 'video' : 'music'
          fetchBlob(mediaUrl)
            .then((blob) => {
              if (!cancelled) blobs.current[blobKey] = blob
            })
            .catch(() => { })
        }
      })
      .catch((err) => {
        if (cancelled) return
        setStatus('error')
        setErrorMessage(err.message || 'Error occurred')
      })

    return () => {
      cancelled = true
    }
  }, [rawUrl])

  const download = async (blobKey) => {
    if (!data) return false
    setDownloadingKey(blobKey)

    let blob = blobs.current[blobKey]
    if (!blob) {
      const sourceUrl = resolveSourceUrl(data, blobKey)
      if (!sourceUrl) {
        setDownloadingKey(null)
        return false
      }
      try {
        blob = await fetchBlob(sourceUrl)
        blobs.current[blobKey] = blob
      } catch {
        setDownloadingKey(null)
        return false
      }
    }

    const { filename, extension } = resolveFilename(data, blobKey)
    const objectUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = objectUrl
    a.download = filename + extension
    a.click()
    // Some browsers (Firefox/Safari) handle the download handoff
    // asynchronously - revoking immediately can truncate the saved file.
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)

    setDownloadingKey(null)
    return true
  }

  return { status, errorMessage, data, download, downloadingKey }
}
