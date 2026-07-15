import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PauseIcon, PlayIcon, VolumeIcon, VolumeMuteIcon } from './icons'

export function VideoPlayer({ src, poster }) {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play()
    else video.pause()
  }

  const toggleMute = (event) => {
    event.stopPropagation()
    const video = videoRef.current
    if (!video) return
    const next = !video.muted
    video.muted = next
    if (!next) video.volume = 1
    setMuted(next)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      togglePlay()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={playing ? t('videoPlayer.pause') : t('videoPlayer.play')}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg"
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-contain"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
          {playing ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6 translate-x-0.5" />}
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        title={muted ? t('videoPlayer.unmute') : t('videoPlayer.mute')}
        aria-label={muted ? t('videoPlayer.unmute') : t('videoPlayer.mute')}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        {muted ? <VolumeMuteIcon className="h-5 w-5" /> : <VolumeIcon className="h-5 w-5" />}
      </button>
    </div>
  )
}
