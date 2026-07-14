import { useEffect } from 'react'
import { SITE } from '../config/site'

export function LegalPage({ title, content }) {
  useEffect(() => {
    document.title = `${SITE.name} - ${title}`
  }, [title])

  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-6 text-center text-3xl font-extrabold">{title}</h1>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        {content.map((block, index) => {
          if (block.type === 'h2') {
            return (
              <h2 key={index} className="mt-3 text-lg font-bold text-current">
                {block.text}
              </h2>
            )
          }
          if (block.type === 'h3') {
            return (
              <h3 key={index} className="mt-2 text-sm font-bold text-current">
                {block.text}
              </h3>
            )
          }
          if (block.type === 'ul' || block.type === 'ol') {
            const Tag = block.type
            return (
              <Tag key={index} className={block.type === 'ul' ? 'list-disc space-y-1 pl-5' : 'list-decimal space-y-1 pl-5'}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Tag>
            )
          }
          return <p key={index}>{block.text}</p>
        })}
      </div>
    </div>
  )
}
