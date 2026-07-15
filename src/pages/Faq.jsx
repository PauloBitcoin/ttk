import { useEffect, useState } from 'react'
import { SITE } from '../config/site'

const FAQS = [
  {
    q: 'How to Download Videos from TikTok (Step by Step)',
    a: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Open the TikTok app on your phone or PC</li>
        <li>Choose the video you want to download.</li>
        <li>Click the Share button in the lower right corner.</li>
        <li>Click the copy button.</li>
        <li>
          Then just paste the video in {SITE.name}, click on the download arrow, choose the
          format and that's it. If you prefer the browser's menu, you have the option: Install app,
          try it, it's even faster.
        </li>
      </ol>
    ),
  },
  {
    q: 'Where do I find the videos after downloading?',
    a: (
      <p>
        They are usually saved in a default folder. Your browser normally defines this folder for
        you. In browser settings, you can manually change and choose the destination folder for
        your downloaded TikTok videos.
      </p>
    ),
  },
  {
    q: 'Can I download music from the video in mp3?',
    a: (
      <p>
        Yes. With {SITE.name} you can also download the music from the video in mp3 - just click
        on the music icon.
      </p>
    ),
  },
  {
    q: `Is ${SITE.name} free?`,
    a: <p>Yes. {SITE.name} is free, you will have no cost to use our services.</p>,
  },
  {
    q: `Does the ${SITE.name} app take up memory on my device?`,
    a: (
      <p>
        No. {SITE.name} does not occupy memory. You can install it on Android or PC without
        worrying about memory consumption - the app storage is 100% in the cloud, your device will
        only store the shortcut, which is smaller than a photo.
      </p>
    ),
  },
  {
    q: `How do I install the ${SITE.name} app?`,
    a: (
      <p>
        If you are accessing from an Android device or PC, just click on the banner located at the
        bottom of the screen to install - it's easy and fast. If the banner does not appear, go to
        your browser's menu and click "Install application".
      </p>
    ),
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    document.title = `${SITE.name} - FAQ`
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-extrabold">FAQ</h1>
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {FAQS.map((item, index) => {
          const open = openIndex === index
          return (
            <div key={item.q} className="py-3">
              <button
                className="flex w-full items-center justify-between text-left font-semibold"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.q}
                <span className="ml-4 shrink-0">{open ? '−' : '+'}</span>
              </button>
              {open && <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.a}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
