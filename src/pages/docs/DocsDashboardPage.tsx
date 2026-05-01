import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsDashboardPage() {
  return (
    <DocsShell
      title="The dashboard is the live operator surface for the runtime."
      description="It now exposes streamed chat, tasks, sessions, memory, audit events, managed processes, MCP tools, token and cost tracking, and an embedded terminal pane."
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-400">
        <p>
          Users can open the operator dashboard through the CLI. If no verified local Clerk session exists yet, the
          dashboard launch path triggers the existing sign-in handoff first and then continues locally.
        </p>
        <CodeBlock label="Run the dashboard locally" code={'imos dashboard'} />
        <p>
          The dashboard now includes a responsive chat panel with streamed assistant output, a live activity feed for
          tool and process events, token and cost counters, task and process registries, MCP tool visibility, and a
          local terminal session attached to the active workspace.
        </p>
      </div>
    </DocsShell>
  )
}
