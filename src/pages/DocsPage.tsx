import { Link } from 'react-router-dom'
import { brandPrimaryButtonClass, brandSecondaryButtonClass } from '../components/brandTheme'
import { DocsShell } from '../components/DocsShell'
import { CLI_COMMAND_DOCS } from './docs/docsContent'

const featuredCode = `imos
imos run "Build a resume SaaS and deploy it"
imos adapters list
imos dashboard
imos mcp install
imos status`

const docCards = [
  {
    title: 'CLI Quickstart',
    body: 'Install the runtime from the GitHub repository, start it with the public CLI, and validate the live operator surface.',
    href: '/docs/installation',
  },
  {
    title: 'Command Guides',
    body: 'Use separate pages for the installed CLI commands, adapter management, dashboard control, and operator setup.',
    href: '/docs/cli',
  },
  {
    title: 'Runtime Routes',
    body: 'Review the public runtime routes, permission model, and service integration surfaces.',
    href: '/docs/runtime',
  },
  {
    title: 'Auth Flow',
    body: 'Understand how IMOS credentials, permissions, and service connections are managed.',
    href: '/docs/authentication',
  },
]

export function DocsPage() {
  return (
    <DocsShell
      title="CLI Platform"
      description="Documentation for the public CLI surface: install from Git Bash, start the runtime with `imos`, open the dashboard, connect services, and operate the system through stable commands and routes."
      eyebrow="Docs Home"
    >
      <section className="rounded-[1.7rem] border border-white/8 bg-[#1b1b1b] p-7">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="pt-2">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">Developer quickstart</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/72">
              Start the runtime in minutes. Learn the public command path, Git Bash install flow, dashboard flow,
              adapter workflow, permission model, and service coordination surface without relying on internal implementation details.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/docs/installation" className={brandPrimaryButtonClass}>
                Get started
              </Link>
              <Link to="/docs/cli" className={brandSecondaryButtonClass}>
                Browse commands
              </Link>
            </div>
          </div>

          <div className="rounded-[1.35rem] bg-[#1b1b1b]">
            <div className="mb-3 flex items-center justify-between text-sm text-white/76">
              <span>bash</span>
              <span className="text-white/34">copy</span>
            </div>
            <pre className="overflow-x-auto text-sm leading-8 text-white">
              <code>{featuredCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white">Build paths</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {docCards.slice(0, 2).map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group rounded-[1.2rem] border border-white/10 bg-[#1f1f1f] p-5 transition hover:border-white/16 hover:bg-[#242424]"
            >
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-8 text-white/72">{item.body}</p>
              <div className="mt-7 text-base font-medium text-white/92 transition group-hover:text-white">Open guide -&gt;</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white">Core guides</h2>
          <Link to="/docs/overview" className="text-lg text-white/65 transition hover:text-white">
            View all
          </Link>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {docCards.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group rounded-[1.2rem] border border-white/10 bg-[#1f1f1f] p-5 transition hover:border-white/16 hover:bg-[#242424]"
            >
              <h3 className="text-2xl font-medium leading-tight text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-white/72 transition group-hover:text-white/82">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white">CLI commands</h2>
            <p className="mt-3 text-base leading-8 text-white/72">The docs are organized around the public CLI surface, with one separate guide for each supported command.</p>
          </div>
          <Link to="/docs/cli" className="text-lg text-white/65 transition hover:text-white">
            View all
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {CLI_COMMAND_DOCS.map((item) => (
            <Link
              key={item.slug}
              to={`/docs/cli/${item.slug}`}
              className="group rounded-[1.2rem] border border-white/10 bg-[#1f1f1f] px-4 py-4 transition hover:border-white/16 hover:bg-[#242424]"
            >
              <div className="text-[11px] font-medium text-white/55">CLI</div>
              <div className="mt-2 text-lg text-white">{item.label}</div>
              <p className="mt-2 text-sm leading-7 text-white/62 transition group-hover:text-white/82">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </DocsShell>
  )
}
