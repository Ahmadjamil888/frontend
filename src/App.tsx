import { SignInButton, useAuth, useUser } from '@clerk/react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { AuthCliPage } from './pages/AuthCliPage'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { ChangelogPage } from './pages/ChangelogPage'
import { DocsPage } from './pages/DocsPage'
import { HomePage } from './pages/HomePage'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { LaunchPage } from './pages/LaunchPage'
import { PlatformPage } from './pages/PlatformPage'
import { DocsAuthenticationPage } from './pages/docs/DocsAuthenticationPage'
import { DocsConnectorsPage } from './pages/docs/DocsConnectorsPage'
import { DocsDashboardPage } from './pages/docs/DocsDashboardPage'
import { DocsInstallationPage } from './pages/docs/DocsInstallationPage'
import { DocsOperationsPage } from './pages/docs/DocsOperationsPage'
import { DocsOverviewPage } from './pages/docs/DocsOverviewPage'
import { DocsRuntimePage } from './pages/docs/DocsRuntimePage'
import { BrandLogo } from './components/BrandLogo'
import { brandPrimaryButtonClass, brandSecondaryButtonClass, brandStatusClass } from './components/brandTheme'

function Footer() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  const productLinks = [
    { to: '/platform', label: 'Platform' },
    { to: '/launch', label: 'Launch' },
    { to: '/changelog', label: 'Changelog' },
  ]
  const resourceLinks = [
    { to: '/docs', label: 'Docs' },
    { to: '/about', label: 'About' },
    { to: '/integrations', label: 'Integrations' },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#050505] px-4 py-20 sm:px-5 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 h-px bg-white/10" />
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
          <div className="flex items-center gap-4">
              <div className="flex h-16 min-w-[8.5rem] items-center justify-center rounded-[1rem] bg-white/[0.03] px-4">
                <BrandLogo className="h-7 w-auto sm:h-8" />
              </div>
              <div>
                <div className="text-base font-semibold uppercase tracking-[0.24em] text-white">Connect</div>
                <div className="mt-1 text-sm text-neutral-500">Human operators with AI execution</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
              Operator-grade AI infrastructure with one public frontend, one authenticated control plane, and one runtime that actually executes work across tools, sessions, memory, and channels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-[14px] text-white/50">
              <span>Gateway</span>
              <span>Runtime</span>
              <span>Canvas</span>
              <span>Messaging</span>
              <span>Automation</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Product</div>
            <div className="mt-5 grid gap-3 text-[14px] text-white/50">
              {productLinks.map((item) => (
                <Link key={item.to} to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Resources</div>
            <div className="mt-5 grid gap-3 text-[14px] text-white/50">
              {resourceLinks.map((item) => (
                <Link key={item.to} to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Account</div>
            <div className="mt-5 flex flex-col items-start gap-3">
              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <button className={brandSecondaryButtonClass}>
                    Sign in
                  </button>
                </SignInButton>
              ) : (
                <div className={brandStatusClass}>
                  Signed in as {user?.primaryEmailAddress?.emailAddress || user?.id}
                </div>
              )}
              <Link to="/docs" className={brandPrimaryButtonClass}>
                Documentation
              </Link>
            </div>
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

  return (
    <div className="min-h-screen bg-black text-white">
      {!isDocsRoute ? <SiteHeader /> : null}
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
      {!isDocsRoute ? <Footer /> : null}
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
