import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsDashboardPage() {
  return (
    <DocsShell
      title="Use `imos dashboard` for the live operator surface."
      description="The dashboard is the visual companion to the CLI for running tasks, inspecting adapters, updating settings, configuring permissions, reviewing session history, and watching live execution output."
      eyebrow="Dashboard"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          Launch the dashboard with <code>imos dashboard</code>. It talks directly to the runtime APIs and stays a
          visual companion to the CLI rather than a separate execution stack.
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
          label="Dashboard API surface"
          code={`GET    /api/status
GET    /api/runtime
GET    /api/models
POST   /api/models
POST   /api/models/test
GET    /api/apikeys
GET    /api/voice/status
GET    /api/skills
GET    /api/integrations
GET    /api/workflows
GET    /api/settings
GET    /api/sessions
GET    /api/routing
GET    /api/contacts
POST   /api/chat
POST   /api/prompt
GET    /api/events`}
        />
      </div>
    </DocsShell>
  )
}
