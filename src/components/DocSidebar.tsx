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
      className="min-h-0 overflow-auto border-r border-white/8 bg-black px-0 py-6 lg:w-[280px] lg:min-w-[240px] lg:max-w-[420px] lg:resize-x"
      style={{ resize: 'horizontal' }}
    >
      <div className="sticky top-0 z-10 bg-black px-4 pb-4">
        <div className="text-[11px] font-medium text-white/90">Get started</div>
      </div>
      <div className="px-4">
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search docs"
          className="w-full rounded-full border border-white/10 bg-[#181818] px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/20"
        />
      </div>
      <nav className="mt-6 space-y-8 px-1">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="mb-2 px-4 text-[11px] font-medium text-white/82">{group.label}</div>
            <div className="grid gap-2">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `mx-2 rounded-xl px-4 py-2.5 text-sm leading-5 transition ${
                      isActive
                        ? 'bg-[#1f1f1f] text-white'
                        : 'text-white/78 hover:bg-[#151515] hover:text-white'
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
