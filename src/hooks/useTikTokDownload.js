import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const API_ENDPOINT = 'https://tikwm.com/api/?url='
const MAX_RETRIES = 8
const BASE_RETRY_DELAY_MS = 400

// Keeps fetched video data + blobs around for the life of the tab, keyed by
// the pasted URL, so closing and reopening the modal for the same video
// doesn't refire the (rate-limited) tikwm request.
const cache = new Map()

// Some mobile download managers reject/silently drop files whose name
// exceeds their filesystem's byte limit (Android/iOS are commonly ~255
// bytes). TikTok titles are full of emoji/hashtags, which are 3-4 bytes
// each in UTF-8, so truncating by character count isn't enough - we cap
// by encoded byte length instead, well under that ceiling.
const MAX_FILENAME_BYTES = 100

function sanitizeFilename(name) {
  return name
    .replace(/[\\/:*?"<>|]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncateToByteLength(name, maxBytes) {
  const encoder = new TextEncoder()
  if (encoder.encode(name).length <= maxBytes) return name
  let end = name.length
  while (end > 0 && encoder.encode(name.slice(0, end)).length > maxBytes) end--
  return name.slice(0, end).trim()
}

function buildFilename(name, extension) {
  const sanitized = sanitizeFilename(name)
  const truncated = truncateToByteLength(sanitized, MAX_FILENAME_BYTES - extension.length)
  return truncated + extension
}

function resolveSourceUrl(data, blobKey) {
  if (blobKey === 'video') return data.play
  if (blobKey === 'music') return data.music
  if (blobKey.startsWith('image-')) return data.images?.[Number(blobKey.slice(6))]
  return null
}

function resolveFilename(data, blobKey) {
  const base = `${data.author.unique_id} ${data.title}`
  if (blobKey === 'video') return buildFilename(`${base} BaixaTok`, '.mp4')
  if (blobKey === 'music') {
    return buildFilename(`${data.music_info.author} - ${data.music_info.title}`, '.mp3')
  }
  if (blobKey.startsWith('image-')) {
    const index = Number(blobKey.slice(6))
    return buildFilename(`${base} ${index + 1}`, '.jpg')
  }
  return buildFilename(base, '')
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
  const { t } = useTranslation()
  const cached = rawUrl ? cache.get(rawUrl) : null

  const [status, setStatus] = useState(cached ? 'success' : rawUrl ? 'loading' : 'error') // 'loading' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState(rawUrl ? '' : t('downloadModal.errorInvalidUrl'))
  const [data, setData] = useState(cached ? cached.data : null)
  const [downloadingKey, setDownloadingKey] = useState(null)
  const blobs = useRef(cached ? cached.blobs : {})

  useEffect(() => {
    if (!rawUrl) {
      setStatus('error')
      setErrorMessage(t('downloadModal.errorInvalidUrl'))
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
          setErrorMessage(json.msg || t('downloadModal.errorFailedToFetch'))
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
        setErrorMessage(err.message || t('downloadModal.errorGeneric'))
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const objectUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = objectUrl
    a.download = resolveFilename(data, blobKey)
    a.click()
    // Some browsers (Firefox/Safari) handle the download handoff
    // asynchronously - revoking immediately can truncate the saved file.
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)

    setDownloadingKey(null)
    return true
  }

  return { status, errorMessage, data, download, downloadingKey }
}
