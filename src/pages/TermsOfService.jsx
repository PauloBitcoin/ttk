import { LegalPage } from '../components/LegalPage'
import { useLocale } from '../hooks/useLocale'
import { TERMS_OF_SERVICE_BY_LOCALE } from '../content/termsOfServiceContent'

export function TermsOfService() {
  const { locale } = useLocale()
  const { title, content } = TERMS_OF_SERVICE_BY_LOCALE[locale]
  return <LegalPage title={title} content={content} path="/terms-of-service" />
}
