import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { AboutPage } from './pages/AboutPage'
import { AuthCliPage } from './pages/AuthCliPage'
import { ChangelogPage } from './pages/ChangelogPage'
import { DocsPage } from './pages/DocsPage'
import { DocsAuthenticationPage } from './pages/docs/DocsAuthenticationPage'
import { DocsApiPage } from './pages/docs/DocsApiPage'
import { DocsCliPage } from './pages/docs/DocsCliPage'
import { DocsCommandPage } from './pages/docs/DocsCommandPage'
import { DocsConnectorsPage } from './pages/docs/DocsConnectorsPage'
import { DocsDashboardPage } from './pages/docs/DocsDashboardPage'
import { DocsInstallationPage } from './pages/docs/DocsInstallationPage'
import { DocsOperationsPage } from './pages/docs/DocsOperationsPage'
import { DocsOverviewPage } from './pages/docs/DocsOverviewPage'
import { DocsRuntimePage } from './pages/docs/DocsRuntimePage'
import { HomePage } from './pages/HomePage'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { LaunchPage } from './pages/LaunchPage'
import { PlatformPage } from './pages/PlatformPage'

function AppRoutes() {
  const location = useLocation()
  const isAuthRoute = location.pathname.startsWith('/auth/')
  const isDocsRoute = location.pathname === '/docs' || location.pathname.startsWith('/docs/')
  const isHomeRoute = location.pathname === '/'

  return (
    <div className="site-page-shell min-h-screen text-white">
      {!isAuthRoute && !isDocsRoute ? <SiteHeader /> : null}
      <main className={!isAuthRoute && !isHomeRoute && !isDocsRoute ? 'pt-16 md:pt-18' : ''}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/cli" element={<AuthCliPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/overview" element={<DocsOverviewPage />} />
          <Route path="/docs/installation" element={<DocsInstallationPage />} />
          <Route path="/docs/authentication" element={<DocsAuthenticationPage />} />
          <Route path="/docs/cli" element={<DocsCliPage />} />
          <Route path="/docs/cli/:slug" element={<DocsCommandPage />} />
          <Route path="/docs/runtime" element={<DocsRuntimePage />} />
          <Route path="/docs/dashboard" element={<DocsDashboardPage />} />
          <Route path="/docs/api" element={<DocsApiPage />} />
          <Route path="/docs/connectors" element={<DocsConnectorsPage />} />
          <Route path="/docs/operations" element={<DocsOperationsPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
      </main>
      {!isAuthRoute && !isDocsRoute ? <SiteFooter /> : null}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}
