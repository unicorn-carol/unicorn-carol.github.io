import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Header } from '@/components/Header'

export function SiteLayout() {
  return (
    <div className="shell">
      <GrainOverlay />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
