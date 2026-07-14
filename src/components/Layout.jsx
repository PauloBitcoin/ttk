import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { InstallPrompt } from './InstallPrompt'

export function Layout() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="container-fluid px-4">
        <Outlet />
      </main>
      <InstallPrompt />
    </div>
  )
}
