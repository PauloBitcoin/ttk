import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SITE } from '../config/site'
import { Seo } from '../components/Seo'
import { useLocale } from '../hooks/useLocale'
import { FAQS_BY_LOCALE } from '../content/faq'

export function Faq() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = FAQS_BY_LOCALE[locale]

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, answerText }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerText,
        },
      })),
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [faqs])

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Seo
        title={t('faq.seoTitle')}
        description={t('faq.seoDescription', { name: SITE.name })}
        path="/faq"
      />
      <h1 className="mb-6 text-center text-3xl font-extrabold">{t('faq.title')}</h1>
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {faqs.map((item, index) => {
          const open = openIndex === index
          return (
            <div key={item.q} className="py-3">
              <button
                className="text-[1.1rem] flex w-full items-center justify-between text-left font-semibold"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.q}
                <span className="ml-4 shrink-0">{open ? '−' : '+'}</span>
              </button>
              {open && <div className="mt-2 text-[0.9rem] text-neutral-600 dark:text-neutral-300">{item.a}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
