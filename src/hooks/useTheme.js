import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

function getSystemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Three-way theme preference (light/dark/system), persisted to localStorage.
// `resolvedDark` is the actual applied value, following the OS live when
// theme is 'system'.
export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [systemDark, setSystemDark] = useState(getSystemPrefersDark)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => setSystemDark(event.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const resolvedDark = theme === 'system' ? systemDark : theme === 'dark'

  useEffect(() => {
    document.body.classList.toggle('dark', resolvedDark)
    localStorage.setItem(STORAGE_KEY, theme)
    document.head
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolvedDark ? '#09090b' : '#ffffff')
  }, [theme, resolvedDark])

  return { theme, setTheme, resolvedDark }
}
