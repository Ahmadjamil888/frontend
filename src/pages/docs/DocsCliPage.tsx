import { Link } from 'react-router-dom'
import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'
import { CLI_COMMAND_DOCS } from './docsContent'

const cliCommands = `imos
imos run "Summarize the repo state"
imos dashboard
imos adapters list
imos adapters add model openai_main
imos adapters test openai_main
imos adapters remove openai_main
imos history
imos status
imos mcp install
imos install mcp
imos wake install
imos wake start
imos wake status
imos wake stop
imos wake uninstall
imos install wake
imos palette list
imos palette set --shell matrix --dashboard ocean`

export function DocsCliPage() {
  return (
    <DocsShell
      title="Use the public CLI, not internal script files."
      description="The command pages below stay on the supported CLI surface only: start the runtime, run tasks, manage adapters, open the dashboard, and connect editor bridges."
      eyebrow="CLI Overview"
    >
      <div className="space-y-8 text-sm leading-8 text-neutral-300">
        <p>
          These docs intentionally use only the installed CLI surface. Internal file entrypoints are not part of the
          operator docs. Start with <code>imos</code> and use the command pages below for the supported flows.
        </p>
        <CodeBlock label="Primary CLI commands" code={cliCommands} />
        <p>
          The runtime stays central. Editors, models, browser sessions, services, and integrations are connected as
          controlled operator surfaces rather than treated as separate entrypoints.
        </p>
        <p>
          If you want hands-free startup, install the wake listener. That allows IMOS to listen in the background for
          phrases like <code>imos</code> or <code>hey imos</code> and launch the runtime when the wake phrase is heard.
        </p>

        <section className="rounded-[1.8rem] border border-white/10 bg-black p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">Command Guides</div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {CLI_COMMAND_DOCS.map((item) => (
              <Link
                key={item.slug}
                to={`/docs/cli/${item.slug}`}
                className="group rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-white/20 hover:bg-[#242424]"
              >
                <div className="text-base text-white">{item.label}</div>
                <div className="mt-2 text-sm leading-6 text-white/60 transition group-hover:text-white/82">{item.summary}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DocsShell>
  )
}
