import { SignInButton, useAuth, useUser } from '@clerk/react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { BrandLogo } from './components/BrandLogo'
import { SiteHeader } from './components/SiteHeader'
import { brandPrimaryButtonClass, brandSecondaryButtonClass, brandStatusClass } from './components/brandTheme'
import { AboutPage } from './pages/AboutPage'
import { AuthCliPage } from './pages/AuthCliPage'
import { ChangelogPage } from './pages/ChangelogPage'
import { DocsPage } from './pages/DocsPage'
import { DocsAuthenticationPage } from './pages/docs/DocsAuthenticationPage'
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

function Footer() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  const columns = [
    {
      title: 'Product',
      links: [
        { to: '/', label: 'Home' },
        { to: '/platform', label: 'Platform' },
        { to: '/launch', label: 'Launch' },
        { to: '/integrations', label: 'Integrations' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { to: '/docs', label: 'Docs' },
        { to: '/changelog', label: 'Changelog' },
        { to: '/about', label: 'About' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/8 bg-black/55 px-4 py-18 backdrop-blur-xl sm:px-6 md:py-22">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <BrandLogo className="text-xl" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
              Built to make operator-grade AI execution feel crisp, coherent, and deployable across browser, runtime,
              and shell surfaces.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <div className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">{column.title}</div>
              <div className="mt-5 grid gap-3 text-sm text-neutral-300">
                {column.links.map((link) => (
                  <Link key={link.to} to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">Account</div>
            <div className="mt-5 flex flex-col items-start gap-3">
              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <button className={brandSecondaryButtonClass}>Sign in</button>
                </SignInButton>
              ) : (
                <div className={brandStatusClass}>
                  Signed in as {user?.primaryEmailAddress?.emailAddress || user?.id}
                </div>
              )}
              <Link to="/docs" className={brandPrimaryButtonClass}>
                Open docs
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 connect AI. Built for clean operator flow.</div>
          <div className="flex gap-5">
            <span>Desktop</span>
            <span>Mobile</span>
            <span>Runtime</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

const dashboardUrl = import.meta.env.VITE_CONNECT_DASHBOARD_URL || 'http://127.0.0.1:18890'

function AppRoutes() {
  const location = useLocation()
  const isDocsRoute = location.pathname === '/docs' || location.pathname.startsWith('/docs/')
  const isHomeRoute = location.pathname === '/'

  return (
    <div className="site-page-shell min-h-screen text-white">
      {!isDocsRoute && !isHomeRoute ? <SiteHeader /> : null}
      <main>
        <Routes>
          <Route path="/" element={<HomePage dashboardUrl={dashboardUrl} />} />
          <Route path="/auth/cli" element={<AuthCliPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/overview" element={<DocsOverviewPage />} />
          <Route path="/docs/installation" element={<DocsInstallationPage />} />
          <Route path="/docs/authentication" element={<DocsAuthenticationPage />} />
          <Route path="/docs/runtime" element={<DocsRuntimePage />} />
          <Route path="/docs/dashboard" element={<DocsDashboardPage />} />
          <Route path="/docs/connectors" element={<DocsConnectorsPage />} />
          <Route path="/docs/operations" element={<DocsOperationsPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
      </main>
      {!isDocsRoute && !isHomeRoute ? <Footer /> : null}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
