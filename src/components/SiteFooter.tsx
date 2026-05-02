import { SignInButton, useAuth, useUser } from '@clerk/react'
import { Link } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'
import { brandPrimaryButtonClass, brandSecondaryButtonClass, brandStatusClass } from './brandTheme'

const FOOTER_COLUMNS = [
  {
    title: 'Platform',
    links: [
      { to: '/', label: 'Overview' },
      { to: '/platform', label: 'Capabilities' },
      { to: '/integrations', label: 'Integrations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/docs', label: 'Documentation' },
      { to: '/launch', label: 'Launch Guide' },
      { to: '/changelog', label: 'Changelog' },
      { to: '/about', label: 'About' },
    ],
  },
]

export function SiteFooter() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  return (
    <footer className="bg-black px-4 pb-12 pt-6 sm:px-6 md:pb-16">
      <div className="mx-auto flex max-w-7xl justify-center">
        <div className="w-full max-w-6xl rounded-t-2xl border border-white/5 border-b-0 bg-black px-6 py-8 md:rounded-t-3xl md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.95fr]">
            <div>
              <Link to="/" className="inline-flex items-center">
                <BrandLogo className="text-2xl text-[#E1E0CC]" />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[rgba(225,224,204,0.72)]">
                Intelligent Machine Operating System for teams that need one controlled surface for models, IDEs, apps, browser control, runtime sessions, dashboard visibility, and delivery.
              </p>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <div className="text-[11px] uppercase tracking-[0.26em] text-[rgba(225,224,204,0.42)]">{column.title}</div>
                <div className="mt-4 grid gap-3 text-sm text-[#E1E0CC]">
                  {column.links.map((link) => (
                    <Link key={link.to} to={link.to} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-[rgba(225,224,204,0.42)]">Access</div>
              <div className="mt-4 flex flex-col items-start gap-3">
                {!isSignedIn ? (
                  <SignInButton mode="modal">
                    <button className={brandSecondaryButtonClass}>Sign in</button>
                  </SignInButton>
                ) : (
                  <div className={brandStatusClass}>Signed in as {user?.primaryEmailAddress?.emailAddress || user?.id}</div>
                )}
                <Link to="/docs" className={brandPrimaryButtonClass}>
                  Open docs
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-5 text-xs text-[rgba(225,224,204,0.42)] sm:flex-row sm:items-center sm:justify-between">
            <div>&copy; 2026 IMOS</div>
            <div className="flex gap-5">
              <span>Browser</span>
              <span>Runtime</span>
              <span>System</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
