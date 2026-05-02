import { Link } from 'react-router-dom'
import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'
import { CLI_COMMAND_DOCS } from './docsContent'

const cliCommands = `imos run "Write a Python hello world and save it"
imos dashboard
imos adapters list
imos adapters add model openai_main
imos adapters test openai_main
imos adapters remove openai_main
imos history
imos status
imos mcp install
python ai_assistant.py --imos "Summarize the repo state"`

const shellCommands = `python ai_assistant.py
/help
/model
/provider
/skills
/workflows
/tasks
/audit
/git
/mcp
/memory
/dashboard
/config`

export function DocsCliPage() {
  return (
    <DocsShell
      title="Use `imos` as the primary start command and `ai_assistant.py` as the file-based launcher."
      description="The command pages below now center the new IMOS CLI while still documenting the interactive shell that starts from `ai_assistant.py`."
      eyebrow="CLI Overview"
    >
      <div className="space-y-8 text-sm leading-8 text-neutral-300">
        <p>
          The IMOS CLI is the primary orchestration surface. It runs task graphs, manages adapters, installs MCP
          config, prints history and status, and can open the IMOS dashboard. The original interactive shell still
          exists, but the file-based launcher for that path is <code>ai_assistant.py</code>.
        </p>
        <CodeBlock label="Primary CLI commands" code={cliCommands} />
        <p>
          The interactive shell remains useful for terminal-first operator sessions. Those slash commands are separate
          from the new IMOS subcommands and are launched directly from <code>ai_assistant.py</code>.
        </p>
        <CodeBlock label="Shell commands from ai_assistant.py" code={shellCommands} />

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
