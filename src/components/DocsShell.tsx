import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
    <div className="site-page-shell h-dvh overflow-hidden bg-black px-4 pb-4 pt-4 text-white sm:px-6 lg:pb-6 lg:pt-6">
      <div className="mx-auto flex h-full max-w-[1500px] flex-col gap-4 lg:flex-row lg:gap-6">
        <DocSidebar groups={filteredGroups} query={query} onQueryChange={setQuery} />

        <section className="min-h-0 min-w-0 flex-1 overflow-y-auto rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:p-8 lg:p-10">
          <div className="mb-10 flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <Link to="/docs" className="mb-6 inline-flex items-center gap-3">
                <img src="/favicon.svg" alt="IMOS" className="h-11 w-11 rounded-xl border border-white/10 bg-black p-1.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">IMOS Docs</div>
                  <div className="text-sm text-white/72">Operator runtime and CLI reference</div>
                </div>
              </Link>
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/40">{eyebrow}</div>
              <h1 className="mt-5 max-w-4xl text-4xl leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{description}</p>
            </div>

            <div className="grid gap-3 text-sm text-white/72 sm:max-w-sm">
              <Link to="/docs/cli" className="rounded-[1.2rem] border border-white/10 bg-black px-4 py-3 transition hover:border-white/20 hover:text-white">
                Separate CLI command guides
              </Link>
              <Link to="/docs/installation" className="rounded-[1.2rem] border border-white/10 bg-black px-4 py-3 transition hover:border-white/20 hover:text-white">
                Installation and setup
              </Link>
              <Link to="/docs/api" className="rounded-[1.2rem] border border-white/10 bg-black px-4 py-3 transition hover:border-white/20 hover:text-white">
                Runtime and API surface
              </Link>
            </div>
          </div>

          <div className="space-y-6 text-white">{children}</div>
        </section>
      </div>
    </div>
  )
}
