import { useTranslation } from 'react-i18next'
import { MailIcon, TelegramIcon } from '../components/icons'
import { Seo } from '../components/Seo'
import { SITE } from '../config/site'

const CONTACT = {
  email: 'paulobitcoin999@gmail.com',
  telegramHandle: '@paulobitcoin',
  telegramUrl: 'https://t.me/paulobitcoin',
}

export function Contact() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <Seo
        title={t('contact.title')}
        description={t('contact.seoDescription', { name: SITE.name })}
        path="/contact"
      />
      <h1 className="mb-2 text-center text-3xl font-extrabold">{t('contact.title')}</h1>
      <p className="mb-6 text-center text-neutral-500">{t('contact.subtitle')}</p>

      <div className="glass flex flex-col gap-3 rounded-3xl p-4 shadow-lg">
        <ContactRow
          icon={<MailIcon className="h-5 w-5" />}
          label={t('contact.email')}
          value={CONTACT.email}
          href={`mailto:${CONTACT.email}`}
          accent="var(--ttk)"
        />
        <ContactRow
          icon={<TelegramIcon className="h-5 w-5" />}
          label={t('contact.telegram')}
          value={CONTACT.telegramHandle}
          href={CONTACT.telegramUrl}
          accent="var(--ttk-2)"
          external
        />
      </div>
    </div>
  )
}

function ContactRow({ icon, label, value, href, accent, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="glass-sm flex items-center gap-3 rounded-2xl p-3 transition-transform hover:scale-[1.01]"
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
        style={{ background: accent }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-zinc-400">
          {label}
        </div>
        <div className="truncate font-bold">{value}</div>
      </div>
    </a>
  )
}
