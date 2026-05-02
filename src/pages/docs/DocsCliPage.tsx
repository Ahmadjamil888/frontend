import { Link } from 'react-router-dom'
import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'
import { CLI_COMMAND_DOCS } from './docsContent'

const cliCommands = `imos
imos shell
imos dashboard
imos server
imos setup
imos status
imos skills
imos model
imos setmodel
imos login
imos logout
imos whoami
imos version
imos help`

const shellCommands = `/help
/exit
/clear
/model
/setmodel
/skills
/status
/dashboard
/setup
/login
/logout
/whoami
/github
/deploy
/workspace
/voice on|off
/tasks
/audit
/history`

export function DocsCliPage() {
  return (
    <DocsShell
      title="The CLI is now broken into separate guides."
      description="Each top-level backend command from `imos_cli.py` has its own page so operators can jump directly to the exact launcher path they need."
      eyebrow="CLI Overview"
    >
      <div className="space-y-8 text-sm leading-8 text-neutral-300">
        <p>
          The backend launcher supports direct commands like <code>imos dashboard</code>, <code>imos setup</code>,{' '}
          <code>imos login</code>, and <code>imos setmodel</code>. It also exposes shell-level slash commands once the
          operator is inside the interactive session.
        </p>
        <CodeBlock label="Primary CLI commands" code={cliCommands} />
        <p>
          Inside the shell, IMOS exposes runtime-focused shortcuts for dashboard launch, model management, task review,
          audit inspection, and account status.
        </p>
        <CodeBlock label="Interactive shell commands" code={shellCommands} />

        <section className="rounded-[1.8rem] border border-white/10 bg-black p-6">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">Command Pages</div>
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
