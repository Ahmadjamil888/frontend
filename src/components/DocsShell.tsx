import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { brandPrimaryButtonClass } from './brandTheme'
import { DocSidebar } from './DocSidebar'
import { DOC_GROUPS } from './docsNav'

type DocsShellProps = {
  title: string
  description: string
  eyebrow?: string
  children: ReactNode
}

export function DocsShell({ title, description, eyebrow = 'Documentation', children }: DocsShellProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.body.classList.add('docs-shell-active')
    return () => document.body.classList.remove('docs-shell-active')
  }, [])

  const filteredGroups = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return DOC_GROUPS
    return DOC_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter((item) => item.label.toLowerCase().includes(value)),
    })).filter((group) => group.items.length > 0)
  }, [query])

  return (
    <div className="site-page-shell h-dvh overflow-hidden bg-black text-white">
      <header className="border-b border-white/8 bg-black">
        <div className="mx-auto flex h-16 max-w-[1880px] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-8">
            <Link to="/docs" className="inline-flex items-center gap-3">
              <img src="/favicon.svg" alt="IMOS" className="h-8 w-8 rounded-lg bg-black" />
              <span className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white">IMOS Developers</span>
            </Link>
            <nav className="hidden items-center gap-2 lg:flex">
              <Link to="/" className="rounded-lg px-3 py-2 text-sm text-white/88 hover:bg-[#171717] hover:text-white">
                Home
              </Link>
              <Link to="/docs" className="rounded-lg bg-[#1f1f1f] px-3 py-2 text-sm text-white">
                Docs
              </Link>
              <Link to="/docs/cli" className="rounded-lg px-3 py-2 text-sm text-white/74 hover:bg-[#171717] hover:text-white">
                CLI
              </Link>
              <Link to="/docs/runtime" className="rounded-lg px-3 py-2 text-sm text-white/74 hover:bg-[#171717] hover:text-white">
                Runtime
              </Link>
              <Link to="/docs/operations" className="rounded-lg px-3 py-2 text-sm text-white/74 hover:bg-[#171717] hover:text-white">
                Resources
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Start searching"
                className="w-[240px] rounded-full border border-white/10 bg-[#1f1f1f] px-5 py-2.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-white/20 lg:w-[280px]"
              />
            </div>
            <Link to="/launch" className={brandPrimaryButtonClass}>
              Install CLI
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex h-[calc(100dvh-4rem)] max-w-[1880px] overflow-hidden">
        <DocSidebar groups={filteredGroups} query={query} onQueryChange={setQuery} />

        <section className="min-h-0 min-w-0 flex-1 overflow-y-auto bg-black">
          <div className="mx-auto max-w-[1320px] px-6 py-10 lg:px-10 lg:py-12">
            <div className="mb-8">
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/40">{eyebrow}</div>
              <h1 className="mt-4 max-w-5xl text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">{description}</p>
            </div>

            <div className="space-y-6 text-white">{children}</div>
          </div>
        </section>
      </div>
    </div>
  )
}
