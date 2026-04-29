import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'
import { brandPrimaryButtonClass, brandSecondaryButtonClass } from './brandTheme'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/docs', label: 'Docs' },
  { to: '/launch', label: 'Launch' },
]

export function SiteHeader() {
  const { isSignedIn } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 rounded-[1rem] border border-transparent pr-3 transition hover:border-white/10">
            <div className="flex h-16 min-w-[8.5rem] items-center justify-center rounded-[1rem] bg-white/[0.03] px-4">
              <BrandLogo className="h-7 w-auto sm:h-8" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Connect</div>
              <div className="mt-1 text-xs tracking-[0.16em] text-neutral-500">Operator infrastructure</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/docs"
              className={`hidden md:inline-flex ${brandSecondaryButtonClass}`}
            >
              Documentation
            </Link>
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className={brandSecondaryButtonClass}>
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className={brandPrimaryButtonClass}>
                    Sign up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'h-10 w-10',
                  },
                }}
              />
            )}
          </div>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `shrink-0 rounded-[0.95rem] border px-3 py-2 text-xs transition ${
                  isActive
                    ? 'border-white/16 bg-white/[0.05] text-white'
                    : 'border-white/10 text-neutral-400 hover:border-white/20 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
