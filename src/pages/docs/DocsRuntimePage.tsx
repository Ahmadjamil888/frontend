import { DocsShell } from '../../components/DocsShell'

export function DocsRuntimePage() {
  return (
    <DocsShell
      title="The runtime stays behind one public CLI and dashboard surface."
      description="The operator runtime owns orchestration, permissions, memory, adapter routing, and result synthesis while coordinating editors, websites, apps, browser sessions, machine actions, and connected services."
      eyebrow="Runtime"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          IMOS decomposes prompts into work that can span models, editors, browser actions, app controls, messaging,
          file operations, Git workflows, deployments, and OS-level tasks. Those steps remain attached to one runtime
          history instead of being scattered across disconnected tabs and tools.
        </p>
        <p>
          Editors such as Cursor are connected surfaces inside that larger runtime. IMOS can coordinate with them, but
          the orchestration logic, memory, preferences, permission gates, and final synthesis stay in IMOS rather than
          moving into the editor itself.
        </p>
        <p>
          The runtime is exposed through the documented dashboard and API endpoints such as <code>/api/status</code>,{' '}
          <code>/api/runtime</code>, <code>/api/models</code>, <code>/api/skills</code>, <code>/api/workflows</code>,{' '}
          and <code>/api/events</code>. That keeps execution visible while the runtime remains dynamic.
        </p>
      </div>
    </DocsShell>
  )
}
