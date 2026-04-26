import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/react'
import { Link, NavLink } from 'react-router-dom'

type SiteHeaderProps = {
  dashboardUrl: string
}

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/launch', label: 'Launch' },
]

export function SiteHeader({ dashboardUrl }: SiteHeaderProps) {
  const { isSignedIn } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#30463C] bg-[#06140f] text-sm font-semibold text-[#27F3A9]">
            C
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-white">CONNECT</div>
            <div className="text-xs text-neutral-500">Operator Frontend</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={dashboardUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-[#27F3A9]/50 hover:text-white md:inline-flex"
          >
            Open Operator
          </a>
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-[#27F3A9]/50 hover:text-white">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-full bg-[#27F3A9] px-4 py-2 text-sm font-medium text-black transition hover:brightness-110">
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
    </header>
  )
}
