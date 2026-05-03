import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsDashboardPage() {
  return (
    <DocsShell
      title="The IMOS dashboard is a live operator surface."
      description="It exposes the IMOS route surface for running tasks, inspecting adapters, updating settings, configuring permissions, reviewing session history, and watching live execution output."
      eyebrow="Dashboard"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          The IMOS dashboard is served at <code>/imos</code> and talks directly to the IMOS runtime APIs. It is the
          visual companion to the CLI, not a separate execution stack.
        </p>
        <CodeBlock label="Run the dashboard locally" code={'imos dashboard'} />
        <p>
          The page includes a prompt runner, beast-mode routing, adapter cards with test and configure actions,
          capability and status counters, settings, permission controls for PC and IDE access, runtime sessions,
          workflow patterns, recent task history, adapter targeting, and a live execution log.
        </p>
        <p>
          Voice input is available directly in the prompt runner. That keeps IMOS as the central operator surface while
          the dashboard captures prompts hands-free and routes them into the same runtime.
        </p>
        <CodeBlock
          label="Dashboard route surface"
          code={`POST /imos/run
GET  /imos/adapters
GET  /imos/adapters/{name}
POST /imos/adapters
DELETE /imos/adapters/{name}
POST /imos/adapters/{name}/test
GET  /imos/history
GET  /imos/sessions
GET  /imos/sessions/{session_id}
GET  /imos/status
GET  /imos/settings
POST /imos/settings
GET  /imos/permissions
POST /imos/permissions
GET  /imos/capabilities
GET  /imos/system-prompt
WS   /imos/ws`}
        />
      </div>
    </DocsShell>
  )
}
