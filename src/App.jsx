import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ToastProvider } from './components/Toast'
import { Home } from './pages/Home'
import { Download } from './pages/Download'
import { Faq } from './pages/Faq'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { Contact } from './pages/Contact'

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(import.meta.env.BASE_URL + 'sw.js').catch(() => {})
    }
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
