import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { InstallPrompt } from './InstallPrompt'

export function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="container-fluid flex-1">
        <Outlet />
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  )
}
