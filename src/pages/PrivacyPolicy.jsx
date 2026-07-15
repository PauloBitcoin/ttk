import { LegalPage } from '../components/LegalPage'
import { useLocale } from '../hooks/useLocale'
import { PRIVACY_POLICY_BY_LOCALE } from '../content/privacyPolicyContent'

export function PrivacyPolicy() {
  const { locale } = useLocale()
  const { title, content } = PRIVACY_POLICY_BY_LOCALE[locale]
  return <LegalPage title={title} content={content} path="/privacy-policy" />
}
