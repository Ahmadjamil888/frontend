import { NavLink } from 'react-router-dom'

export type DocItem = {
  path: string
  label: string
}

type DocSidebarProps = {
  items: DocItem[]
  query: string
  onQueryChange: (value: string) => void
}

export function DocSidebar({ items, query, onQueryChange }: DocSidebarProps) {
  return (
    <aside
      className="min-h-0 overflow-y-auto rounded-[1.6rem] border border-orange-500/10 bg-[#0a0a0a] px-3 py-5 sm:px-4 sm:py-6 lg:w-[320px] lg:min-w-[260px] lg:max-w-[520px] lg:resize-x"
      style={{ resize: 'horizontal' }}
    >
      <div className="sticky top-0 z-10 bg-[#0a0a0a] pb-4 text-[11px] uppercase tracking-[0.22em] text-orange-200/45">
        Documentation
      </div>
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search documentation"
        className="w-full rounded-[1rem] border border-orange-500/12 bg-[#0d0d0d] px-4 py-3 text-sm text-[#ead7be] outline-none transition placeholder:text-orange-100/30 focus:border-orange-500/30"
      />
      <nav className="mt-5 grid gap-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-[1rem] px-3 py-2 text-xs leading-5 transition sm:text-sm ${
                isActive
                  ? 'bg-orange-500/[0.09] text-[#ffd8af]'
                  : 'text-[#cfb69a] hover:bg-orange-500/[0.04] hover:text-[#ffd8af]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
