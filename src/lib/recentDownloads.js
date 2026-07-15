const STORAGE_KEY = 'BaixaTok:recent-downloads'
const MAX_ITEMS = 10

export function getRecentDownloads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function persist(next) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // localStorage unavailable (private mode, quota, etc.) - keep going in-memory only.
  }
  return next
}

export function addRecentDownload(entry) {
  const deduped = getRecentDownloads().filter((item) => item.url !== entry.url)
  return persist([{ ...entry, downloadedAt: Date.now() }, ...deduped].slice(0, MAX_ITEMS))
}

export function removeRecentDownload(url) {
  return persist(getRecentDownloads().filter((item) => item.url !== url))
}

export function clearRecentDownloads() {
  return persist([])
}
