import { LegalPage } from '../components/LegalPage'
import { title, content } from '../content/termsOfServiceContent'

export function TermsOfService() {
  return <LegalPage title={title} content={content} path="/terms-of-service" />
}
