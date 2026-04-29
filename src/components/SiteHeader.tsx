import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'
import { brandPrimaryButtonClass, brandSecondaryButtonClass } from './brandTheme'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/docs', label: 'Docs' },
  { to: '/launch', label: 'Launch' },
  { to: '/about', label: 'About' },
]

export function SiteHeader() {
  const { isSignedIn } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-[1.6rem] border border-white/10 bg-black/82 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
              <BrandLogo className="h-5 w-8" />
            </span>
            <span className="text-sm font-semibold tracking-[0.3em] text-white">VEX</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className={brandSecondaryButtonClass}>Sign in</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className={`${brandPrimaryButtonClass} min-w-[7.5rem]`}>Start a chat</button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Link to="/docs" className={brandSecondaryButtonClass}>
                  Docs
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'h-10 w-10',
                    },
                  }}
                />
              </>
            )}
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-4 bg-white" />
              <span className="h-px w-4 bg-white" />
              <span className="h-px w-4 bg-white" />
            </span>
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 border-t border-white/8 pt-4 md:hidden">
            <nav className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm transition ${
                      isActive
                        ? 'border-white/16 bg-white/[0.06] text-white'
                        : 'border-white/10 bg-white/[0.02] text-neutral-300'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-3 grid gap-2">
              {!isSignedIn ? (
                <>
                  <SignInButton mode="modal">
                    <button className={`${brandSecondaryButtonClass} w-full`}>Sign in</button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className={`${brandPrimaryButtonClass} w-full`}>Start a chat</button>
                  </SignUpButton>
                </>
              ) : (
                <Link to="/docs" className={`${brandSecondaryButtonClass} w-full`} onClick={() => setMobileOpen(false)}>
                  Open docs
                </Link>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
