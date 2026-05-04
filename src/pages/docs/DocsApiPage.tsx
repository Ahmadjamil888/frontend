import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const apiRoutes = `GET    /api/auth/status
POST   /api/auth/logout
GET    /api/status
GET    /api/runtime
GET    /api/processes
GET    /api/audit
GET    /api/tasks
GET    /api/cost
GET    /api/models
POST   /api/models
POST   /api/models/test
GET    /api/models/list?id=<provider_id>
GET    /api/apikeys
POST   /api/apikeys
POST   /api/apikeys/test
GET    /api/voice/status
POST   /api/voice/start
POST   /api/voice/stop
POST   /api/voice/test
POST   /api/voice/config
GET    /api/skills
POST   /api/skills/refresh
GET    /api/integrations
GET    /api/workflows
POST   /api/workflows
GET    /api/settings
POST   /api/settings
GET    /api/sessions
POST   /api/sessions
POST   /api/chat
POST   /api/chat/stream
POST   /api/prompt
GET    /api/memory
GET    /api/mcp
GET    /api/doctor
GET    /api/routing
POST   /api/routing
GET    /api/contacts
POST   /api/contacts
GET    /api/events`

export function DocsApiPage() {
  return (
    <DocsShell
      title="The dashboard and runtime are backed by a real API surface."
      description="The public routes cover auth state, runtime status, providers, API keys, voice controls, skills, integrations, workflows, settings, sessions, chat, memory, and server-sent events."
      eyebrow="API"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          The backend is not a placeholder. It exposes status, live operator data, streamed runtime output, terminal
          session management, config endpoints, and memory retrieval directly from the Flask server that powers the
          local dashboard.
        </p>
        <CodeBlock label="Current API routes" code={apiRoutes} />
        <p>
          The main runtime interaction paths are <code>/api/chat</code>, <code>/api/prompt</code>,{' '}
          <code>/api/status</code>, <code>/api/models</code>, <code>/api/workflows</code>, <code>/api/audit</code>,
          and the <code>/api/events</code> stream used by the dashboard.
        </p>
      </div>
    </DocsShell>
  )
}
