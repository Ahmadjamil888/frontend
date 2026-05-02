import { NavLink } from 'react-router-dom'
import type { DocGroup } from './docsNav'

type DocSidebarProps = {
  groups: DocGroup[]
  query: string
  onQueryChange: (value: string) => void
}

export function DocSidebar({ groups, query, onQueryChange }: DocSidebarProps) {
  return (
    <aside
      className="min-h-0 overflow-y-auto rounded-[2rem] border border-white/10 bg-[#050505] px-3 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:px-4 sm:py-6 lg:w-[320px] lg:min-w-[280px] lg:max-w-[520px] lg:resize-x"
      style={{ resize: 'horizontal' }}
    >
      <div className="sticky top-0 z-10 bg-[#050505] pb-4">
        <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">Documentation</div>
      </div>
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search documentation"
        className="w-full rounded-[1.2rem] border border-white/12 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
      />
      <nav className="mt-5 space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="mb-2 px-2 text-[10px] uppercase tracking-[0.24em] text-white/32">{group.label}</div>
            <div className="grid gap-2">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-[1rem] border px-3 py-2 text-xs leading-5 transition sm:text-sm ${
                      isActive
                        ? 'border-white bg-white text-black'
                        : 'border-white/0 text-white/72 hover:border-white/10 hover:bg-white/[0.04] hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
