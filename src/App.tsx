import { SignInButton, useAuth, useUser } from '@clerk/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import { HomePage } from './pages/HomePage'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { LaunchPage } from './pages/LaunchPage'
import { PlatformPage } from './pages/PlatformPage'

const dashboardUrl = import.meta.env.VITE_CONNECT_DASHBOARD_URL || 'http://127.0.0.1:18890'

function Footer() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">CONNECT Frontend</div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">
            Browser entrypoint for the CONNECT operator stack. Designed to bridge public narrative, Clerk sign-in, and the authenticated operator dashboard.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-[#27F3A9]/50 hover:text-white">
                Sign in
              </button>
            </SignInButton>
          ) : (
            <div className="rounded-full border border-[#27F3A9]/25 px-4 py-2 text-sm text-[#9af6d0]">
              Signed in as {user?.primaryEmailAddress?.emailAddress || user?.id}
            </div>
          )}
          <a
            href={dashboardUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#27F3A9] px-4 py-2 text-sm font-medium text-black transition hover:brightness-110"
          >
            Open Operator
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <SiteHeader dashboardUrl={dashboardUrl} />
        <Routes>
          <Route path="/" element={<HomePage dashboardUrl={dashboardUrl} />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
