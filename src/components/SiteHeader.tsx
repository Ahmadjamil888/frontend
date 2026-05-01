import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE_NAV_ITEMS } from './siteNav'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4">
      <div className="rounded-b-2xl border border-white/5 border-t-0 bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
        <div className="flex items-center justify-center gap-4">
          <nav className="hidden items-center gap-3 sm:gap-6 md:flex md:gap-12 lg:gap-14">
            {SITE_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#E1E0CC] md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-4 bg-[#E1E0CC]" />
              <span className="h-px w-4 bg-[#E1E0CC]" />
              <span className="h-px w-4 bg-[#E1E0CC]" />
            </span>
          </button>
        </div>

        {mobileOpen ? (
          <div className="mt-4 border-t border-white/8 pt-4 md:hidden">
            <nav className="grid gap-2">
              {SITE_NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm transition ${
                      isActive
                        ? 'border-white/16 bg-white/[0.06] text-[#E1E0CC]'
                        : 'border-white/10 bg-white/[0.02] text-[rgba(225,224,204,0.8)]'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-3 flex justify-center">
              <Link
                to="/"
                className="text-[10px] uppercase tracking-[0.22em] text-[#E1E0CC]"
                onClick={() => setMobileOpen(false)}
              >
                IMOS
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
