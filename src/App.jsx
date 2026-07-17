import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LocaleRoot } from './components/LocaleRoot'
import { ToastProvider } from './components/Toast'
import { Home } from './pages/Home'
import { Faq } from './pages/Faq'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { Contact } from './pages/Contact'

function pageRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="faq" element={<Faq />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
      <Route path="contact" element={<Contact />} />
    </>
  )
}

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    }
  }, [])

  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          {/* pt-BR is the site's original, already-indexed language - it stays
              unprefixed at the root instead of moving to /pt to avoid losing
              existing SEO rankings. en/es get a path prefix. */}
          <Route path="/" element={<LocaleRoot locale="pt" />}>
            {pageRoutes()}
          </Route>
          <Route path="/en" element={<LocaleRoot locale="en" />}>
            {pageRoutes()}
          </Route>
          <Route path="/es" element={<LocaleRoot locale="es" />}>
            {pageRoutes()}
          </Route>
          <Route path="/id" element={<LocaleRoot locale="id" />}>
            {pageRoutes()}
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
