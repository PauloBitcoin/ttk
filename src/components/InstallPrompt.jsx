import { CloseIcon } from './icons'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

export function InstallPrompt() {
  const { visible, install, dismiss } = useInstallPrompt()

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 bg-white p-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:bg-[#314052] dark:text-white">
      <button className="flex items-center gap-3 text-left" onClick={install}>
        <img src="/assets/logo-350.webp" width="40" height="40" alt="ttk downloader" />
        <span className="text-sm font-medium">
          Install ttk as an application. <small className="font-normal opacity-70">(does not take up space on your device)</small>
        </span>
      </button>
      <button aria-label="Dismiss" onClick={dismiss}>
        <CloseIcon className="h-5 w-5 opacity-60" />
      </button>
    </div>
  )
}
