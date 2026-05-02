import { DocsShell } from '../../components/DocsShell'

export function DocsRuntimePage() {
  return (
    <DocsShell
      title="The IMOS runtime is the central brain across services and work surfaces."
      description="IMOS owns orchestration, permissions, memory, adapter routing, and result synthesis while coordinating editors, websites, apps, browser sessions, machine actions, and connected services."
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
          The dashboard route surface exposes runtime control through <code>/imos/run</code>,{' '}
          <code>/imos/adapters</code>, <code>/imos/history</code>, <code>/imos/status</code>,{' '}
          <code>/imos/settings</code>, <code>/imos/permissions</code>, <code>/imos/capabilities</code>, and{' '}
          <code>/imos/ws</code>. That is how the product keeps execution visible while the runtime remains dynamic.
        </p>
      </div>
    </DocsShell>
  )
}
