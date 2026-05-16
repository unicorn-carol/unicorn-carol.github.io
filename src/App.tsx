import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/layouts/SiteLayout'
import { AboutPage } from '@/pages/AboutPage'
import { ArticlePage } from '@/pages/ArticlePage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { InsightsPage } from '@/pages/InsightsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ProjectsPage } from '@/pages/ProjectsPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:slug" element={<ArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
