import { CodeBlock } from '../../components/CodeBlock'
import { DocsShell } from '../../components/DocsShell'

export function DocsOperationsPage() {
  return (
    <DocsShell
      title="Operational confidence starts with the exact command the user will run."
      description="The launcher path, auth state, provider configuration, MCP registry, Git state, dashboard reachability, and workspace execution path should all be verified from the real CLI entrypoint."
      eyebrow="Operations"
    >
      <div className="space-y-6 text-sm leading-8 text-neutral-300">
      <p>
          Common operator commands now include <code>imos</code>, <code>imos dashboard</code>,{' '}
          <code>imos login</code>, <code>imos logout</code>, <code>/setmodel</code>, <code>/status</code>,{' '}
          <code>/workspace</code>, <code>/tasks</code>, <code>/audit</code>, and <code>/history</code>.
        </p>
        <p>
          For launch builds, verify the launcher path, auth environment variables, workspace binding, provider readiness,
          dashboard streaming, and at least one real task that creates files or starts a process.
        </p>
        <CodeBlock
          label="Recommended checks"
          code={`imos login
imos dashboard
imos
/tasks
/audit`}
        />
      </div>
    </DocsShell>
  )
}
