import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsDashboardPage() {
  return (
    <DocsShell
      title="The IMOS dashboard is now a real adapter-management and orchestration surface."
      description="It keeps the existing style language, but now adds the new IMOS route surface: run tasks, inspect adapters, update settings, review history, and watch live execution output."
      eyebrow="Dashboard"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          The IMOS dashboard is served at <code>/imos</code> and talks directly to the IMOS runtime APIs instead of the
          earlier placeholder shell routes.
        </p>
        <CodeBlock label="Run the dashboard locally" code={'imos dashboard'} />
        <p>
          The page now includes a prompt runner, adapter cards with test/configure/remove actions, capability and
          status counters, a settings panel, recent task history, quick adapter targeting, and a WebSocket-backed live
          execution log.
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
GET  /imos/status
GET  /imos/settings
POST /imos/settings
GET  /imos/capabilities
WS   /imos/ws`}
        />
      </div>
    </DocsShell>
  )
}
