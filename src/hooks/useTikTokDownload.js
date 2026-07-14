import { useEffect, useRef, useState } from 'react'

const API_ENDPOINT = 'https://tikwm.com/api/?url='
const MAX_RETRIES = 10
const RETRY_DELAY_MS = 400

async function fetchBlob(url, attempt = 0) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`status ${response.status}`)
    return await response.blob()
  } catch (err) {
    if (attempt >= MAX_RETRIES) throw err
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS))
    return fetchBlob(url, attempt + 1)
  }
}

// Mirrors the shape of legacy-static/js/download.js, replacing the old
// global BLOBS/DATA/RETRIES with component state and a blobs ref.
export function useTikTokDownload(rawUrl) {
  const [status, setStatus] = useState('loading') // 'loading' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('')
  const [data, setData] = useState(null)
  const [downloadingKey, setDownloadingKey] = useState(null)
  const blobs = useRef({})

  useEffect(() => {
    if (!rawUrl) {
      setStatus('error')
      setErrorMessage('Invalid Video URL.')
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

        for (const key of ['play', 'wmplay', 'music']) {
          const mediaUrl = json.data[key]
          const blobKey = key === 'play' ? 'video' : key === 'wmplay' ? 'video_wm' : 'music'
          fetchBlob(mediaUrl)
            .then((blob) => {
              if (!cancelled) blobs.current[blobKey] = blob
            })
            .catch(() => {})
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
    if (!data) return
    setDownloadingKey(blobKey)

    let blob = blobs.current[blobKey]
    if (!blob) {
      const sourceUrl = blobKey === 'video' ? data.play : blobKey === 'video_wm' ? data.wmplay : data.music
      try {
        blob = await fetchBlob(sourceUrl)
        blobs.current[blobKey] = blob
      } catch {
        setDownloadingKey(null)
        return false
      }
    }

    let filename = data.author.unique_id + data.title
    let extension = '.mp4'
    if (blobKey === 'video') {
      filename += ' ttkvideo'
    } else if (blobKey === 'video_wm') {
      filename += ' WM'
    } else if (blobKey === 'music') {
      filename = data.music_info.author + ' - ' + data.music_info.title
      extension = '.mp3'
    }

    const objectUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = objectUrl
    a.download = filename + extension
    a.click()
    URL.revokeObjectURL(objectUrl)

    setDownloadingKey(null)
    return true
  }

  return { status, errorMessage, data, download, downloadingKey }
}
