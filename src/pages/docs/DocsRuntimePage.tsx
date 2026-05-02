import { DocsShell } from '../../components/DocsShell'

export function DocsRuntimePage() {
  return (
    <DocsShell
      title="The gateway routes. The runtime thinks and executes."
      description="The current system is split into a control surface and an execution surface so sessions, tools, MCP connectors, tasks, streaming output, and local state stay consistent across the CLI and dashboard."
      eyebrow="Runtime"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
        <p>
          The gateway acts as the control plane. It accepts routed commands, session traffic, dashboard requests,
          connector payloads, and workflow triggers, then passes them into the runtime.
        </p>
        <p>
          The runtime assembles context, invokes the configured model provider, streams model output, executes skills,
          runs MCP tools, persists task state, stores memory, tracks cost, logs audit events, and manages local
          processes and terminal sessions.
        </p>
        <p>
          This separation makes it possible to use one consistent operator model across direct CLI chat, the local
          dashboard, and future external channels without rewriting the execution layer.
        </p>
      </div>
    </DocsShell>
  )
}
