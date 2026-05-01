import { useMemo, useState, type ReactNode } from 'react'
import { brandPanelStrongClass } from './brandTheme'
import { DocSidebar } from './DocSidebar'
import { DOC_ITEMS } from './docsNav'

type DocsShellProps = {
  title: string
  description: string
  children: ReactNode
}

export function DocsShell({ title, children }: DocsShellProps) {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return DOC_ITEMS
    return DOC_ITEMS.filter((item) => item.label.toLowerCase().includes(value))
  }, [query])

  return (
    <div className="site-page-shell h-[calc(100vh-4rem)] overflow-hidden px-4 pb-4 pt-4 text-white sm:px-6 lg:h-[calc(100vh-4.5rem)] lg:pb-6 lg:pt-6">
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-4 lg:flex-row lg:gap-6">
        <DocSidebar items={filteredItems} query={query} onQueryChange={setQuery} />

        <section className={`${brandPanelStrongClass} min-h-0 min-w-0 flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10`}>
          <div className="mb-6 text-xs uppercase tracking-[0.22em] text-orange-200/45">{title}</div>
          <div className="space-y-6 text-[#cfb69a]">{children}</div>
        </section>
      </div>
    </div>
  )
}
