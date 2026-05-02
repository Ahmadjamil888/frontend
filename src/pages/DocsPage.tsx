import { Link } from 'react-router-dom'
import { DocsShell } from '../components/DocsShell'
import { CLI_COMMAND_DOCS } from './docs/docsContent'

const docCards = [
  {
    title: 'Install the runtime',
    body: 'Get the launcher onto the machine, install dependencies, and validate the real entrypoint.',
    href: '/docs/installation',
  },
  {
    title: 'Authenticate locally',
    body: 'Understand how the public sign-in flow hands control back into the local runtime.',
    href: '/docs/authentication',
  },
  {
    title: 'Inspect runtime routes',
    body: 'Review the gateway, dashboard, API surface, and the runtime responsibilities behind them.',
    href: '/docs/runtime',
  },
  {
    title: 'Study the CLI',
    body: 'Every top-level IMOS command now has its own guide page instead of being buried in one long section.',
    href: '/docs/cli',
  },
]

export function DocsPage() {
  return (
    <DocsShell
      title="Runtime clarity, command by command."
      description="The docs are now organized around the real operator flow: install the system, authenticate it, launch the runtime, open the dashboard, and understand every CLI command on its own page."
      eyebrow="Docs Home"
    >
      <section className="rounded-[2rem] border border-white/10 bg-black p-6 sm:p-8">
        <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">How The Docs Work</div>
        <div className="mt-5 max-w-4xl text-2xl leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl">
          We build runtime clarity, <span className="font-serif italic">not vague automation.</span>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-white/68 sm:text-base">
          This documentation follows the actual backend behavior in `Desktop\connect`: the launcher, setup wizard,
          auth bridge, dashboard boot path, gateway runtime, and top-level CLI commands exposed by `imos_cli.py`.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {docCards.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition hover:border-white/20 hover:bg-white hover:text-black"
          >
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">Section</div>
            <h2 className="mt-4 text-2xl leading-tight text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/68">{item.body}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-black p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">CLI Guides</div>
            <h2 className="mt-4 text-3xl leading-[0.96] tracking-[-0.04em] text-white sm:text-4xl">Separate pages for each command.</h2>
          </div>
          <Link to="/docs/cli" className="rounded-full border border-white bg-white px-5 py-2.5 text-sm text-black transition hover:bg-black hover:text-white">
            Open CLI overview
          </Link>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {CLI_COMMAND_DOCS.map((item) => (
            <Link
              key={item.slug}
              to={`/docs/cli/${item.slug}`}
              className="rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-4 transition hover:border-white/24 hover:bg-white hover:text-black"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/36">CLI</div>
              <div className="mt-2 text-lg text-white">{item.label}</div>
              <p className="mt-2 text-sm leading-6 text-white/62">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </DocsShell>
  )
}
