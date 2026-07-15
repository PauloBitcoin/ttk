import { LegalPage } from '../components/LegalPage'
import { title, content } from '../content/privacyPolicyContent'

export function PrivacyPolicy() {
  return <LegalPage title={title} content={content} path="/privacy-policy" />
}
