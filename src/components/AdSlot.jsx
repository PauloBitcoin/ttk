import { useTranslation } from 'react-i18next'

// Reserved space for a future ad network snippet. Purely a visual
// placeholder for now - swap the children for the real ad unit when one
// is wired up.
export function AdSlot({ label, className = '' }) {
  const { t } = useTranslation()
  return (
    <div
      className={`flex min-h-20 items-center justify-center rounded-2xl border border-dashed border-black/15 bg-black/[0.02] text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-400 ${className}`}
    >
      {label || t('adSlot.label')}
    </div>
  )
}
