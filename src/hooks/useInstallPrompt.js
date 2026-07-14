import { useEffect, useState } from 'react'

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
      if (!localStorage.getItem('hideInstallPrompt')) {
        setVisible(true)
      }
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const install = async () => {
    setVisible(false)
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
  }

  const dismiss = () => {
    localStorage.setItem('hideInstallPrompt', 'true')
    setVisible(false)
  }

  return { visible, install, dismiss }
}
