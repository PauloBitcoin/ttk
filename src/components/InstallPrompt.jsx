import { CloseIcon } from './icons'
import { useInstallPrompt } from '../hooks/useInstallPrompt'
import { asset } from '../lib/asset'
import { SITE, IMAGES } from '../config/site'

export function InstallPrompt() {
  const { visible, install, dismiss } = useInstallPrompt()

  if (!visible) return null

  return (
    <div className="glass fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-xl p-3 shadow-xl sm:inset-x-4 sm:bottom-4 lg:inset-x-auto lg:left-4 lg:w-full lg:max-w-md">
      <button className="flex min-w-0 flex-1 items-center gap-3 text-left" onClick={install}>
        <img src={asset(IMAGES.logo)} width="40" height="40" alt={SITE.name} className="shrink-0" />
        <span className="text-sm font-medium">
          Install {SITE.shortName} as an application. <small className="font-normal opacity-70">(does not take up space on your device)</small>
        </span>
      </button>
      <button
        aria-label="Dismiss"
        onClick={dismiss}
        className="shrink-0 rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/10"
      >
        <CloseIcon className="h-5 w-5 opacity-60" />
      </button>
    </div>
  )
}
