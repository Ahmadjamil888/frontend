import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

const apiRoutes = `GET    /api/auth/status
POST   /api/auth/logout
GET    /api/status
GET    /api/stats
GET    /api/weather
GET    /api/news
GET    /api/health
GET    /api/processes
GET    /api/audit
GET    /api/tasks
GET    /api/cost
GET    /api/skills
GET    /api/sessions
GET    /api/sessions/:session_id
POST   /api/chat
POST   /api/chat/stream
POST   /api/shell
GET    /api/config/model
POST   /api/config/model
GET    /api/config/env
POST   /api/config/env
POST   /api/speak
GET    /stream
POST   /api/terminal/open
POST   /api/terminal/:session_id/write
GET    /api/terminal/:session_id/read
POST   /api/terminal/:session_id/close
GET    /api/terminals
GET    /api/memory`

export function DocsApiPage() {
  return (
    <DocsShell
      title="The dashboard and runtime are backed by a real Flask API surface."
      description="The active routes in `imos_server.py` cover auth state, system stats, tasks, processes, sessions, chat, streamed chat, shell execution, config writes, terminals, memory, and server-sent events."
    >
      <div className="space-y-6 text-sm leading-8 text-[#cfb69a]">
        <p>
          The backend is not a placeholder. It exposes status, live operator data, streamed runtime output, terminal
          session management, config endpoints, and memory retrieval directly from the Flask server that powers the
          local dashboard.
        </p>
        <CodeBlock label="Current API routes" code={apiRoutes} />
        <p>
          The main runtime interaction paths are <code>/api/chat</code>, <code>/api/chat/stream</code>,{' '}
          <code>/stream</code>, <code>/api/tasks</code>, <code>/api/audit</code>, and the terminal endpoints used by
          the dashboard shell surface.
        </p>
      </div>
    </DocsShell>
  )
}
