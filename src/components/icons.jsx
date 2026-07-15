// Generic UI icons come from lucide-react, re-exported under the names the
// rest of the app already uses. Brand/social logos stay hand-rolled below
// since lucide doesn't ship brand marks.
export {
  X as CloseIcon,
  Menu as MenuIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  TriangleAlert as AlertIcon,
  ShieldCheck as ShieldIcon,
  Zap as ZapIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Volume2 as VolumeIcon,
  VolumeX as VolumeMuteIcon,
  ClipboardPaste as PasteIcon,
  Download as DownloadIcon,
  Music2 as MusicIcon,
  Send as SendIcon,
  Share2 as ShareIcon,
  Link2 as CopyLinkIcon,
} from 'lucide-react'

export function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 4.2 2.9 11.4c-1 .4-1 1.5.1 1.8l4.6 1.5 1.8 5.6c.2.7 1.1.9 1.6.3l2.5-2.8 4.7 3.4c.7.5 1.7.1 1.9-.7L23 5c.2-.9-.6-1.5-1.4-1.2Zm-3 3.4-7.7 6.9-.3 3.1-1.6-4.9 9.6-5.1Z" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.2 1-2.5c.3-.3.6-.3.8-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.4 0 .6-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.8.3.2.5.1.7-.1l.6-.7c.2-.3.4-.2.7-.1l1.7.8c.2.1.4.2.5.3.1.2.1 1-.1 1.7Z" />
    </svg>
  )
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m4 3 7 8.4L4.4 21H7l5.4-6.4L17 21h3l-7.3-8.8L19.6 3H17l-5 6-4-6Z" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 22v-8h2.7l.4-3.3H14V8.6c0-.9.3-1.6 1.6-1.6H17V4.1C16.7 4 15.8 4 14.7 4 12.4 4 11 5.4 11 8.2v2.5H8.4v3.3H11V22Z" />
    </svg>
  )
}
